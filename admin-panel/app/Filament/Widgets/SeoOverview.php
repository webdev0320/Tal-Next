<?php

namespace App\Filament\Widgets;

use App\Filament\Resources\Posts\PostResource;
use App\Models\Page;
use App\Models\Post;
use App\Models\SeoMeta;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

/**
 * Yoast-style "SEO overview" dashboard widget for published content.
 */
class SeoOverview extends StatsOverviewWidget
{
    protected static ?int $sort = 2;

    protected ?string $heading = 'SEO overview';

    protected ?string $description = 'Published pages & posts by SEO score';

    protected function getStats(): array
    {
        $types = [Post::class, Page::class];

        $published = fn ($q) => $q->whereIn('seoable_type', $types)
            ->whereHasMorph('seoable', $types, fn ($m) => $m->where('status', 'published'));

        $withKeyphrase = SeoMeta::query()->tap($published)->whereNotNull('focus_keyword')->where('focus_keyword', '!=', '');

        $good = (clone $withKeyphrase)->where('seo_score', '>=', 70)->count();
        $ok = (clone $withKeyphrase)->whereBetween('seo_score', [40, 69])->count();
        $bad = (clone $withKeyphrase)->where('seo_score', '<', 40)->count();

        $totalPublished = Post::where('status', 'published')->count() + Page::where('status', 'published')->count();
        $noKeyphrase = max(0, $totalPublished - $good - $ok - $bad);
        $noindex = SeoMeta::query()->tap($published)->where('robots_index', 'noindex')->count();

        $postsUrl = PostResource::getUrl('index');

        return [
            Stat::make('Good SEO score', $good)->color('success')->description('Score 70+')->descriptionIcon('heroicon-s-check-circle')
                ->url($postsUrl.'?filters[seo_score][value]=good'),
            Stat::make('OK SEO score', $ok)->color('warning')->description('Score 40–69')->descriptionIcon('heroicon-s-exclamation-circle')
                ->url($postsUrl.'?filters[seo_score][value]=ok'),
            Stat::make('Needs improvement', $bad)->color('danger')->description('Score under 40')->descriptionIcon('heroicon-s-x-circle')
                ->url($postsUrl.'?filters[seo_score][value]=bad'),
            Stat::make('No focus keyphrase', $noKeyphrase)->color('gray')
                ->description($noindex ? "{$noindex} set to noindex" : 'Add a keyphrase to score')
                ->descriptionIcon('heroicon-o-minus-circle')
                ->url($postsUrl.'?filters[seo_score][value]=none'),
        ];
    }
}
