<?php

namespace App\Support\Seo;

use Illuminate\Support\Str;

/**
 * Yoast-style content analysis.
 *
 * Input keys: title, seo_title (resolved), description (resolved meta description),
 * slug, content (HTML), focus_keyword, is_cornerstone, site_host.
 *
 * Each check returns ['id', 'label', 'status' => good|ok|bad, 'message'].
 */
class SeoAnalyzer
{
    public const GOOD = 'good';

    public const OK = 'ok';

    public const BAD = 'bad';

    protected array $in;

    protected string $html;

    protected string $text;

    protected array $words;

    protected array $sentences;

    public function __construct(array $input)
    {
        $this->in = array_merge([
            'title' => '', 'seo_title' => '', 'description' => '', 'slug' => '',
            'content' => '', 'focus_keyword' => '', 'is_cornerstone' => false, 'site_host' => '',
        ], $input);

        $this->html = (string) $this->in['content'];
        $this->text = static::plainText($this->html);
        $this->words = static::words($this->text);
        $this->sentences = static::sentences($this->text);
    }

    public static function make(array $input): static
    {
        return new static($input);
    }

    public function analyze(): array
    {
        $seo = $this->seoChecks();
        $read = $this->readabilityChecks();

        return [
            'seo' => ['score' => static::score($seo), 'checks' => $seo],
            'readability' => ['score' => static::score($read), 'checks' => $read],
            'stats' => [
                'words' => count($this->words),
                'sentences' => count($this->sentences),
                'flesch' => $this->flesch(),
                'reading_time' => max(1, (int) ceil(count($this->words) / 230)),
            ],
        ];
    }

    /** Overall status label for a 0-100 score, matching Yoast's traffic light. */
    public static function status(?int $score): string
    {
        return match (true) {
            $score === null => 'none',
            $score >= 70 => self::GOOD,
            $score >= 40 => self::OK,
            default => self::BAD,
        };
    }

    // ------------------------------------------------------------------ SEO

    protected function seoChecks(): array
    {
        $kw = Str::lower(trim((string) $this->in['focus_keyword']));
        $checks = [];

        if ($kw === '') {
            $checks[] = $this->check('keyphrase', 'Focus keyphrase', self::BAD,
                'No focus keyphrase was set. Set a keyphrase to calculate your SEO score.');
        } else {
            $checks = array_merge($checks, $this->keyphraseChecks($kw));
        }

        // Meta description length
        $descLen = mb_strlen(trim((string) $this->in['description']));
        $checks[] = match (true) {
            $descLen === 0 => $this->check('meta_length', 'Meta description length', self::BAD,
                'No meta description has been specified. Search engines will display copy from the page instead.'),
            $descLen < 120 => $this->check('meta_length', 'Meta description length', self::OK,
                "The meta description is short ({$descLen} chars). Up to 156 characters are available."),
            $descLen > 156 => $this->check('meta_length', 'Meta description length', self::OK,
                "The meta description is over 156 characters ({$descLen}). It may be truncated."),
            default => $this->check('meta_length', 'Meta description length', self::GOOD, 'Well done!'),
        };

        // SEO title width (approximate px via char count)
        $titleLen = mb_strlen(trim((string) $this->in['seo_title']));
        $checks[] = match (true) {
            $titleLen === 0 => $this->check('title_width', 'SEO title width', self::BAD, 'Please create an SEO title.'),
            $titleLen < 30 => $this->check('title_width', 'SEO title width', self::OK,
                "The SEO title is too short ({$titleLen} chars). Use the space to add keyphrase variations or a call-to-action."),
            $titleLen > 60 => $this->check('title_width', 'SEO title width', self::OK,
                "The SEO title is wider than the viewable limit ({$titleLen} chars, aim for ≤ 60)."),
            default => $this->check('title_width', 'SEO title width', self::GOOD, 'Good job!'),
        };

        // Text length
        $count = count($this->words);
        $min = $this->in['is_cornerstone'] ? 900 : 300;
        $checks[] = match (true) {
            $count >= $min => $this->check('text_length', 'Text length', self::GOOD, "The text contains {$count} words. Good job!"),
            $count >= $min * 0.66 => $this->check('text_length', 'Text length', self::OK,
                "The text contains {$count} words. This is slightly below the recommended minimum of {$min} words."),
            default => $this->check('text_length', 'Text length', self::BAD,
                "The text contains {$count} words. This is far below the recommended minimum of {$min} words."),
        };

        // Links
        [$internal, $external] = $this->countLinks();
        $checks[] = $internal > 0
            ? $this->check('internal_links', 'Internal links', self::GOOD, "You have {$internal} internal link(s). Good job!")
            : $this->check('internal_links', 'Internal links', self::BAD, 'No internal links appear in this page. Add some!');
        $checks[] = $external > 0
            ? $this->check('outbound_links', 'Outbound links', self::GOOD, "You have {$external} outbound link(s). Good job!")
            : $this->check('outbound_links', 'Outbound links', self::OK, 'No outbound links appear in this page. Consider adding some where relevant.');

        // Images
        $imgCount = preg_match_all('/<img\b/i', $this->html);
        $checks[] = $imgCount > 0
            ? $this->check('images', 'Images', self::GOOD, "Good job! The page has {$imgCount} image(s).")
            : $this->check('images', 'Images', self::OK, 'No images appear on this page. Add some as appropriate.');

        // Single H1 (theme already outputs the title as H1)
        $h1 = preg_match_all('/<h1\b/i', $this->html);
        $checks[] = $h1 === 0
            ? $this->check('single_h1', 'Single title', self::GOOD, 'You don\'t have multiple H1 headings, well done!')
            : $this->check('single_h1', 'Single title', self::BAD,
                "The content contains {$h1} H1 heading(s). The page title is already an H1 — use H2/H3 in the content.");

        return $checks;
    }

    protected function keyphraseChecks(string $kw): array
    {
        $checks = [];
        $kwWords = static::words($kw);
        $textLower = Str::lower($this->text);

        // Keyphrase length
        $n = count($kwWords);
        $checks[] = match (true) {
            $n <= 4 => $this->check('keyphrase_length', 'Keyphrase length', self::GOOD, 'Good job!'),
            $n <= 8 => $this->check('keyphrase_length', 'Keyphrase length', self::OK,
                "The keyphrase is {$n} words long. That's a bit more than the recommended maximum of 4."),
            default => $this->check('keyphrase_length', 'Keyphrase length', self::BAD,
                "The keyphrase is {$n} words long. That's way more than the recommended maximum of 4."),
        };

        // In SEO title (beginning preferred)
        $seoTitle = Str::lower((string) $this->in['seo_title']);
        $pos = mb_strpos($seoTitle, $kw);
        $checks[] = match (true) {
            $pos === 0 => $this->check('kw_title', 'Keyphrase in SEO title', self::GOOD,
                'The exact match of the focus keyphrase appears at the beginning of the SEO title. Good job!'),
            $pos !== false => $this->check('kw_title', 'Keyphrase in SEO title', self::OK,
                'The exact match of the focus keyphrase appears in the SEO title, but not at the beginning. Move it to the beginning for the best results.'),
            $this->containsAllWords($seoTitle, $kwWords) => $this->check('kw_title', 'Keyphrase in SEO title', self::OK,
                'All words of the keyphrase appear in the SEO title, but not as an exact match.'),
            default => $this->check('kw_title', 'Keyphrase in SEO title', self::BAD,
                'Not all the words from your keyphrase appear in the SEO title. Try to use the exact match at the beginning.'),
        };

        // In meta description
        $desc = Str::lower((string) $this->in['description']);
        $checks[] = $this->containsAllWords($desc, $kwWords)
            ? $this->check('kw_meta', 'Keyphrase in meta description', self::GOOD, 'Keyphrase or synonym appear in the meta description. Well done!')
            : $this->check('kw_meta', 'Keyphrase in meta description', self::BAD,
                'The meta description has been specified, but it does not contain the keyphrase. Fix that!');

        // In slug
        $slug = str_replace(['-', '_', '/'], ' ', Str::lower((string) $this->in['slug']));
        $slugWords = array_map(fn ($w) => Str::slug($w), $kwWords);
        $checks[] = $this->containsAllWords($slug, $slugWords)
            ? $this->check('kw_slug', 'Keyphrase in slug', self::GOOD, 'Great work!')
            : $this->check('kw_slug', 'Keyphrase in slug', self::OK, '(Part of) your keyphrase does not appear in the slug. Change that!');

        // In introduction (first paragraph)
        $firstParagraph = Str::lower(static::plainText(static::firstParagraph($this->html)));
        $checks[] = match (true) {
            $firstParagraph !== '' && str_contains($firstParagraph, $kw) => $this->check('kw_intro', 'Keyphrase in introduction', self::GOOD, 'Well done!'),
            $firstParagraph !== '' && $this->containsAllWords($firstParagraph, $kwWords) => $this->check('kw_intro', 'Keyphrase in introduction', self::OK,
                'Your keyphrase or its synonyms appear in the first paragraph, but not within one sentence.'),
            default => $this->check('kw_intro', 'Keyphrase in introduction', self::BAD,
                'Your keyphrase or its synonyms do not appear in the first paragraph. Make sure the topic is clear immediately.'),
        };

        // Density
        $occurrences = $kw === '' ? 0 : substr_count($textLower, $kw);
        $wordCount = max(1, count($this->words));
        $density = round(($occurrences * $n) / $wordCount * 100, 2);
        $checks[] = match (true) {
            $occurrences === 0 => $this->check('kw_density', 'Keyphrase density', self::BAD,
                'The focus keyphrase was found 0 times. That\'s less than the recommended minimum. Focus on your keyphrase!'),
            $density < 0.5 => $this->check('kw_density', 'Keyphrase density', self::OK,
                "The focus keyphrase was found {$occurrences} time(s) ({$density}%). That's less than the recommended minimum."),
            $density > 3 => $this->check('kw_density', 'Keyphrase density', self::BAD,
                "The focus keyphrase was found {$occurrences} times ({$density}%). That's more than the recommended maximum. Don't overoptimize!"),
            default => $this->check('kw_density', 'Keyphrase density', self::GOOD,
                "The focus keyphrase was found {$occurrences} time(s) ({$density}%). This is great!"),
        };

        // In subheadings
        preg_match_all('/<h[2-3][^>]*>(.*?)<\/h[2-3]>/is', $this->html, $m);
        $subs = array_map(fn ($h) => Str::lower(static::plainText($h)), $m[1] ?? []);
        $withKw = count(array_filter($subs, fn ($h) => $this->containsAllWords($h, $kwWords)));
        $checks[] = match (true) {
            count($subs) === 0 => $this->check('kw_subheadings', 'Keyphrase in subheading', self::OK,
                'No H2 or H3 subheadings found. Use subheadings that reflect the topic.'),
            $withKw === 0 => $this->check('kw_subheadings', 'Keyphrase in subheading', self::OK,
                'Use more keyphrases or synonyms in your H2 and H3 subheadings.'),
            $withKw / count($subs) > 0.75 => $this->check('kw_subheadings', 'Keyphrase in subheading', self::OK,
                'More than 75% of your subheadings reflect the topic. That\'s too many — don\'t overoptimize.'),
            default => $this->check('kw_subheadings', 'Keyphrase in subheading', self::GOOD,
                "{$withKw} of your H2/H3 subheadings reflect the topic of your copy. Good job!"),
        };

        // Image alt attributes
        preg_match_all('/<img\b[^>]*alt=["\']([^"\']*)["\']/i', $this->html, $alts);
        $altsLower = array_map('mb_strtolower', $alts[1] ?? []);
        $imgTotal = preg_match_all('/<img\b/i', $this->html);
        if ($imgTotal > 0) {
            $altHit = count(array_filter($altsLower, fn ($a) => $this->containsAllWords($a, $kwWords)));
            $checks[] = $altHit > 0
                ? $this->check('kw_alt', 'Image keyphrase', self::GOOD, 'Good job! Images on this page have alt attributes with the keyphrase.')
                : $this->check('kw_alt', 'Image keyphrase', self::OK, 'Images on this page do not have alt attributes that reflect the topic of your text.');
        }

        return $checks;
    }

    // ---------------------------------------------------------- Readability

    protected function readabilityChecks(): array
    {
        $checks = [];
        $sentenceCount = count($this->sentences);

        if (count($this->words) < 50) {
            return [$this->check('not_enough', 'Not enough content', self::BAD,
                'Please add some content to enable a good readability analysis.')];
        }

        // Sentence length: % of sentences longer than 20 words
        $long = count(array_filter($this->sentences, fn ($s) => count(static::words($s)) > 20));
        $pct = $sentenceCount ? round($long / $sentenceCount * 100, 1) : 0;
        $checks[] = match (true) {
            $pct <= 25 => $this->check('sentence_length', 'Sentence length', self::GOOD, 'Great!'),
            $pct <= 30 => $this->check('sentence_length', 'Sentence length', self::OK,
                "{$pct}% of the sentences contain more than 20 words, which is more than the recommended maximum of 25%."),
            default => $this->check('sentence_length', 'Sentence length', self::BAD,
                "{$pct}% of the sentences contain more than 20 words, which is more than the recommended maximum of 25%. Try to shorten them."),
        };

        // Paragraph length
        $paragraphs = static::paragraphs($this->html);
        $longParas = count(array_filter($paragraphs, fn ($p) => count(static::words($p)) > 150));
        $checks[] = $longParas === 0
            ? $this->check('paragraph_length', 'Paragraph length', self::GOOD, 'None of the paragraphs are too long. Great job!')
            : $this->check('paragraph_length', 'Paragraph length', $longParas > 1 ? self::BAD : self::OK,
                "{$longParas} paragraph(s) contain more than the recommended maximum of 150 words. Shorten them!");

        // Subheading distribution
        $chunks = preg_split('/<h[2-6][^>]*>.*?<\/h[2-6]>/is', $this->html) ?: [];
        $hasSubs = count($chunks) > 1;
        $maxChunk = max(array_map(fn ($c) => count(static::words(static::plainText($c))), $chunks ?: ['']));
        $checks[] = match (true) {
            ! $hasSubs && count($this->words) > 300 => $this->check('subheadings', 'Subheading distribution', self::BAD,
                'You are not using any subheadings, although your text is rather long. Try to add some.'),
            $maxChunk > 350 => $this->check('subheadings', 'Subheading distribution', self::OK,
                'At least one section of your text is longer than 300 words and isn\'t separated by subheadings.'),
            default => $this->check('subheadings', 'Subheading distribution', self::GOOD, 'Great job!'),
        };

        // Passive voice (heuristic: to-be + past participle)
        $passive = count(array_filter($this->sentences, fn ($s) => preg_match(
            '/\b(am|is|are|was|were|be|been|being)\s+(\w+ly\s+)?\w+(ed|en|wn|ne|pt|lt)\b/i', $s)));
        $passivePct = $sentenceCount ? round($passive / $sentenceCount * 100, 1) : 0;
        $checks[] = match (true) {
            $passivePct <= 10 => $this->check('passive_voice', 'Passive voice', self::GOOD, 'You\'re using enough active voice. That\'s great!'),
            $passivePct <= 15 => $this->check('passive_voice', 'Passive voice', self::OK,
                "{$passivePct}% of the sentences contain passive voice, which is more than the recommended maximum of 10%."),
            default => $this->check('passive_voice', 'Passive voice', self::BAD,
                "{$passivePct}% of the sentences contain passive voice, which is more than the recommended maximum of 10%. Try to use their active counterparts."),
        };

        // Transition words
        $transitions = '/\b(also|and then|as a result|because|besides|consequently|finally|first|firstly|for example|for instance|furthermore|however|in addition|in conclusion|in fact|in other words|in short|instead|likewise|meanwhile|moreover|nevertheless|next|on the other hand|otherwise|second|secondly|similarly|since|so that|subsequently|then|therefore|thus|ultimately|whereas|while|although|unless|until)\b/i';
        $withTransition = count(array_filter($this->sentences, fn ($s) => preg_match($transitions, $s)));
        $tPct = $sentenceCount ? round($withTransition / $sentenceCount * 100, 1) : 0;
        $checks[] = match (true) {
            $tPct >= 30 => $this->check('transition_words', 'Transition words', self::GOOD, 'Well done!'),
            $tPct >= 20 => $this->check('transition_words', 'Transition words', self::OK,
                "Only {$tPct}% of the sentences contain transition words, which is not enough. Use more of them."),
            default => $this->check('transition_words', 'Transition words', self::BAD,
                "Only {$tPct}% of the sentences contain transition words, which is not enough. Use more of them."),
        };

        // Consecutive sentences starting with the same word
        $firsts = array_map(fn ($s) => Str::lower(static::words($s)[0] ?? ''), $this->sentences);
        $run = 1;
        $maxRun = 1;
        for ($i = 1; $i < count($firsts); $i++) {
            $run = ($firsts[$i] !== '' && $firsts[$i] === $firsts[$i - 1]) ? $run + 1 : 1;
            $maxRun = max($maxRun, $run);
        }
        $checks[] = $maxRun >= 3
            ? $this->check('consecutive_sentences', 'Consecutive sentences', self::BAD,
                'The text contains 3 or more consecutive sentences starting with the same word. Try to mix things up!')
            : $this->check('consecutive_sentences', 'Consecutive sentences', self::GOOD,
                'There is enough variety in your sentences. That\'s great!');

        // Flesch reading ease
        $flesch = $this->flesch();
        $checks[] = match (true) {
            $flesch >= 60 => $this->check('flesch', 'Flesch Reading Ease', self::GOOD,
                "The copy scores {$flesch} in the test, which is considered fairly easy to read. Good job!"),
            $flesch >= 50 => $this->check('flesch', 'Flesch Reading Ease', self::OK,
                "The copy scores {$flesch} in the test, which is considered fairly difficult to read. Try to make shorter sentences."),
            default => $this->check('flesch', 'Flesch Reading Ease', self::BAD,
                "The copy scores {$flesch} in the test, which is considered difficult to read. Try to use shorter sentences and simpler words."),
        };

        return $checks;
    }

    // -------------------------------------------------------------- helpers

    protected function check(string $id, string $label, string $status, string $message): array
    {
        return compact('id', 'label', 'status', 'message');
    }

    protected static function score(array $checks): int
    {
        if (! $checks) {
            return 0;
        }
        $points = ['good' => 9, 'ok' => 6, 'bad' => 3];
        $total = array_sum(array_map(fn ($c) => $points[$c['status']], $checks));

        return (int) round($total / (count($checks) * 9) * 100);
    }

    protected function containsAllWords(string $haystack, array $words): bool
    {
        if (! $words) {
            return false;
        }
        foreach ($words as $w) {
            if ($w === '' || ! preg_match('/\b'.preg_quote($w, '/').'/iu', $haystack)) {
                return false;
            }
        }

        return true;
    }

    protected function countLinks(): array
    {
        preg_match_all('/<a\b[^>]*href=["\']([^"\']+)["\']/i', $this->html, $m);
        $host = Str::lower(preg_replace('/^www\./', '', (string) $this->in['site_host']));
        $internal = 0;
        $external = 0;
        foreach ($m[1] ?? [] as $href) {
            if (str_starts_with($href, '#') || str_starts_with($href, 'mailto:') || str_starts_with($href, 'tel:')) {
                continue;
            }
            $linkHost = Str::lower(preg_replace('/^www\./', '', (string) parse_url($href, PHP_URL_HOST)));
            if ($linkHost === '' || ($host !== '' && $linkHost === $host)) {
                $internal++;
            } else {
                $external++;
            }
        }

        return [$internal, $external];
    }

    protected function flesch(): float
    {
        $words = count($this->words);
        $sentences = max(1, count($this->sentences));
        if ($words === 0) {
            return 0;
        }
        $syllables = array_sum(array_map([static::class, 'syllables'], $this->words));
        $score = 206.835 - 1.015 * ($words / $sentences) - 84.6 * ($syllables / $words);

        return round(max(0, min(100, $score)), 1);
    }

    public static function syllables(string $word): int
    {
        $word = preg_replace('/[^a-z]/', '', Str::lower($word));
        if ($word === '') {
            return 0;
        }
        if (strlen($word) <= 3) {
            return 1;
        }
        $word = preg_replace('/(?:[^laeiouy]es|ed|[^laeiouy]e)$/', '', $word);
        $word = preg_replace('/^y/', '', $word);
        preg_match_all('/[aeiouy]{1,2}/', $word, $m);

        return max(1, count($m[0]));
    }

    public static function plainText(string $html): string
    {
        $html = preg_replace('/<(script|style)\b[^>]*>.*?<\/\1>/is', ' ', $html);
        $html = preg_replace('/<!--.*?-->/s', ' ', $html);
        $html = preg_replace('/<\/(p|div|h[1-6]|li|br|tr)>|<br\s*\/?>/i', "$0\n", $html);
        $text = html_entity_decode(strip_tags($html), ENT_QUOTES | ENT_HTML5, 'UTF-8');

        return trim(preg_replace('/[ \t\x{00A0}]+/u', ' ', $text));
    }

    public static function words(string $text): array
    {
        preg_match_all("/[\p{L}\p{N}][\p{L}\p{N}'’-]*/u", $text, $m);

        return $m[0];
    }

    public static function sentences(string $text): array
    {
        $parts = preg_split('/(?<=[.!?])\s+|\n+/u', $text) ?: [];

        return array_values(array_filter(array_map('trim', $parts), fn ($s) => count(static::words($s)) > 0));
    }

    public static function paragraphs(string $html): array
    {
        preg_match_all('/<p\b[^>]*>(.*?)<\/p>/is', $html, $m);

        return array_map(fn ($p) => static::plainText($p), $m[1] ?? []);
    }

    public static function firstParagraph(string $html): string
    {
        if (preg_match('/<p\b[^>]*>(.*?)<\/p>/is', $html, $m)) {
            return $m[1];
        }

        return Str::limit(static::plainText($html), 600, '');
    }
}
