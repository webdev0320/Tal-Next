<?php

namespace App\Filament\Seo;

use App\Models\Category;
use App\Models\Page;
use App\Models\Post;
use App\Models\SeoMeta;
use App\Models\User;
use App\Support\Seo\SeoAnalyzer;
use App\Support\Seo\SeoResolver;
use App\Support\Seo\SeoSettings;
use Filament\Forms\Components\CheckboxList;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor\RichContentRenderer;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\View;
use Illuminate\Database\Eloquent\Model;

/**
 * Reusable Yoast-style SEO box for any model using the HasSeo trait.
 *
 * Usage: SeoPanel::make(Post::class) inside a resource form.
 * The parent form must have "title"/"name", "slug" and "content"/"description" fields.
 */
class SeoPanel
{
    public const VARIABLES_HINT = 'Variables: %%title%% %%sitename%% %%sep%% %%tagline%% %%excerpt%% %%category%% %%date%% %%currentyear%%';

    /**
     * @param  class-string<Model>  $modelClass
     */
    public static function make(string $modelClass, bool $withAnalysis = true): Section
    {
        $seoTab = [
            TextInput::make('focus_keyword')
                ->label('Focus keyphrase')
                ->helperText('The search term you want this content to rank for.')
                ->live(onBlur: true)
                ->maxLength(191),
            TagsInput::make('related_keywords')
                ->label('Related keyphrases / synonyms')
                ->placeholder('Add keyphrase')
                ->helperText('Optional. Used as reference only.'),
            View::make('filament.seo.serp-preview')
                ->viewData(fn (Get $get) => static::preview($modelClass, $get)),
            TextInput::make('title')
                ->label('SEO title')
                ->placeholder(fn () => static::defaultTemplate($modelClass, 'title'))
                ->helperText(self::VARIABLES_HINT.'. Leave empty to use the template from SEO Settings.')
                ->live(onBlur: true)
                ->maxLength(191),
            Textarea::make('description')
                ->label('Meta description')
                ->rows(3)
                ->placeholder('Leave empty to auto-generate from the excerpt/content.')
                ->helperText('Aim for 120–156 characters.')
                ->live(onBlur: true)
                ->maxLength(320),
        ];

        if ($withAnalysis) {
            $seoTab[] = View::make('filament.seo.analysis')
                ->viewData(fn (Get $get) => ['result' => static::analysis($modelClass, $get), 'kind' => 'seo']);
        }

        $tabs = [
            Tab::make('SEO')
                ->icon('heroicon-o-magnifying-glass')
                ->badge(fn (Get $get) => $withAnalysis ? static::badge($modelClass, $get, 'seo') : null)
                ->badgeColor(fn (Get $get) => static::badgeColor($modelClass, $get, 'seo'))
                ->schema($seoTab),
        ];

        if ($withAnalysis) {
            $tabs[] = Tab::make('Readability')
                ->icon('heroicon-o-book-open')
                ->badge(fn (Get $get) => static::badge($modelClass, $get, 'readability'))
                ->badgeColor(fn (Get $get) => static::badgeColor($modelClass, $get, 'readability'))
                ->schema([
                    View::make('filament.seo.analysis')
                        ->viewData(fn (Get $get) => ['result' => static::analysis($modelClass, $get), 'kind' => 'readability']),
                ]);
        }

        $tabs[] = Tab::make('Social')
            ->icon('heroicon-o-share')
            ->schema([
                Section::make('Facebook / Open Graph')
                    ->compact()
                    ->schema([
                        TextInput::make('og_title')->label('Social title')->placeholder('Defaults to the SEO title')->maxLength(191),
                        Textarea::make('og_description')->label('Social description')->rows(2)->placeholder('Defaults to the meta description'),
                        FileUpload::make('og_image')
                            ->label('Social image')
                            ->helperText('Recommended 1200 × 630 px. Defaults to the featured image, then the site default.')
                            ->image()->disk('public')->directory('seo')->visibility('public'),
                    ]),
                Section::make('X (Twitter)')
                    ->compact()
                    ->collapsed()
                    ->schema([
                        TextInput::make('twitter_title')->label('X title')->placeholder('Defaults to the social title')->maxLength(191),
                        Textarea::make('twitter_description')->label('X description')->rows(2),
                        FileUpload::make('twitter_image')->label('X image')->image()->disk('public')->directory('seo')->visibility('public'),
                    ]),
            ]);

        $advanced = [
            Select::make('robots_index')
                ->label('Allow search engines to show this content in search results?')
                ->options([
                    'default' => 'Default (from SEO Settings)',
                    'index' => 'Yes',
                    'noindex' => 'No (noindex)',
                ])
                ->default('default')
                ->selectablePlaceholder(false),
            Toggle::make('robots_follow')
                ->label('Should search engines follow links on this content?')
                ->default(true),
            CheckboxList::make('robots_advanced')
                ->label('Meta robots advanced')
                ->options([
                    'noimageindex' => 'No Image Index',
                    'noarchive' => 'No Archive',
                    'nosnippet' => 'No Snippet',
                ])
                ->columns(3),
            TextInput::make('breadcrumb_title')->label('Breadcrumbs title')->maxLength(191),
            TextInput::make('canonical_url')
                ->label('Canonical URL')
                ->url()
                ->placeholder('Leave empty to use this page\'s own URL')
                ->maxLength(191),
            Select::make('schema_page_type')
                ->label('Schema page type')
                ->placeholder('Default')
                ->options([
                    'WebPage' => 'Web Page',
                    'ItemPage' => 'Item Page',
                    'AboutPage' => 'About Page',
                    'FAQPage' => 'FAQ Page',
                    'QAPage' => 'QA Page',
                    'ProfilePage' => 'Profile Page',
                    'ContactPage' => 'Contact Page',
                    'MedicalWebPage' => 'Medical Web Page',
                    'CollectionPage' => 'Collection Page',
                    'CheckoutPage' => 'Checkout Page',
                    'RealEstateListing' => 'Real Estate Listing',
                    'SearchResultsPage' => 'Search Results Page',
                ]),
        ];

        if ($modelClass === Post::class) {
            $advanced[] = Select::make('schema_article_type')
                ->label('Schema article type')
                ->placeholder('Default')
                ->options([
                    'Article' => 'Article',
                    'BlogPosting' => 'Blog Post',
                    'NewsArticle' => 'News Article',
                    'TechArticle' => 'Tech Article',
                    'Report' => 'Report',
                    'None' => 'None',
                ]);
        }

        if ($modelClass !== Category::class) {
            $advanced[] = Toggle::make('is_cornerstone')
                ->label('Cornerstone content')
                ->helperText('Your most important, most complete articles. Requires 900+ words in the analysis.')
                ->live();
        }

        $tabs[] = Tab::make('Advanced')
            ->icon('heroicon-o-adjustments-horizontal')
            ->schema($advanced);

        return Section::make('SEO')
            ->description('Search appearance, social sharing and content analysis — like Yoast SEO.')
            ->icon('heroicon-o-chart-bar')
            ->relationship('seo')
            ->collapsible()
            ->schema([
                Tabs::make('seo_tabs')->tabs($tabs)->contained(false),
            ]);
    }

    // ------------------------------------------------------------ builders

    /**
     * Build an unsaved model + SeoMeta from the current (possibly unsaved) form state.
     */
    public static function draftRecord(string $modelClass, Get $get): Model
    {
        /** @var Model $record */
        $record = new $modelClass;

        $parent = fn (string $key) => $get('../'.$key);

        if ($modelClass === Category::class) {
            $record->forceFill([
                'name' => (string) $parent('name'),
                'slug' => (string) $parent('slug'),
                'description' => (string) $parent('description'),
            ]);
        } else {
            $record->forceFill([
                'title' => (string) $parent('title'),
                'slug' => (string) $parent('slug'),
                'content' => $parent('editor_mode') === 'html'
                    ? (string) $parent('content_html')
                    : static::contentToHtml($parent('content')),
            ]);
        }

        if ($modelClass === Post::class) {
            $record->forceFill([
                'excerpt' => $parent('excerpt'),
                'published_at' => $parent('published_at'),
                'featured_image_url' => $parent('featured_image_url'),
            ]);
            if ($categoryId = $parent('category_id')) {
                $record->setRelation('category', Category::find($categoryId));
            }
            if ($authorId = $parent('author_id')) {
                $record->setRelation('author', User::find($authorId));
            }
        }

        if ($modelClass === Page::class && ($parentId = $parent('parent_id'))) {
            $record->parent_id = $parentId;
        }

        $seo = new SeoMeta([
            'focus_keyword' => $get('focus_keyword'),
            'title' => $get('title'),
            'description' => $get('description'),
            'canonical_url' => $get('canonical_url'),
            'is_cornerstone' => (bool) $get('is_cornerstone'),
        ]);
        $record->setRelation('seo', $seo);

        return $record;
    }

    public static function contentToHtml(mixed $content): string
    {
        if (is_array($content)) {
            try {
                return RichContentRenderer::make($content)->toHtml();
            } catch (\Throwable) {
                return '';
            }
        }

        return (string) $content;
    }

    public static function preview(string $modelClass, Get $get): array
    {
        try {
            $record = static::draftRecord($modelClass, $get);
            $resolver = SeoResolver::for($record);

            return [
                'title' => $resolver->title(),
                'description' => $resolver->description(),
                'url' => $resolver->canonical(),
                'date' => $modelClass === Post::class && $record->published_at ? $record->published_at->format('j M Y') : null,
                'keyword' => $get('focus_keyword'),
            ];
        } catch (\Throwable $e) {
            report($e);

            return ['title' => '', 'description' => '', 'url' => '', 'date' => null, 'keyword' => null];
        }
    }

    /** @var array<string, array> memoised per request */
    protected static array $analysisCache = [];

    public static function analysis(string $modelClass, Get $get): array
    {
        $record = static::draftRecord($modelClass, $get);
        $input = $record->seoAnalysisInput($record->seo);
        $key = md5(serialize($input));

        return static::$analysisCache[$key] ??= SeoAnalyzer::make($input)->analyze();
    }

    public static function badge(string $modelClass, Get $get, string $kind): ?string
    {
        try {
            $score = static::analysis($modelClass, $get)[$kind]['score'];
        } catch (\Throwable) {
            return null;
        }

        return match (SeoAnalyzer::status($score)) {
            'good' => 'Good',
            'ok' => 'OK',
            default => 'Needs work',
        };
    }

    public static function badgeColor(string $modelClass, Get $get, string $kind): string
    {
        try {
            $score = static::analysis($modelClass, $get)[$kind]['score'];
        } catch (\Throwable) {
            return 'gray';
        }

        return match (SeoAnalyzer::status($score)) {
            'good' => 'success',
            'ok' => 'warning',
            default => 'danger',
        };
    }

    public static function defaultTemplate(string $modelClass, string $field): string
    {
        $type = match ($modelClass) {
            Post::class => 'post',
            Category::class => 'category',
            default => 'page',
        };

        return (string) SeoSettings::get("{$type}_{$field}_template", '');
    }
}
