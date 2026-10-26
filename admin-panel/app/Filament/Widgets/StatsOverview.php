<?php

namespace App\Filament\Widgets;

use App\Models\Category;
use App\Models\Page;
use App\Models\Post;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends StatsOverviewWidget
{
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        $scheduled = Post::where('status', 'scheduled')->where('published_at', '>', now())->count();

        return [
            Stat::make('Published posts', Post::published()->count())
                ->description(Post::whereIn('status', ['draft', 'pending'])->count().' drafts · '.$scheduled.' scheduled')
                ->icon('heroicon-o-newspaper'),
            Stat::make('Pages', Page::where('status', 'published')->count())
                ->description(Page::where('status', 'draft')->count().' drafts')
                ->icon('heroicon-o-document-text'),
            Stat::make('Categories', Category::count())
                ->icon('heroicon-o-folder'),
        ];
    }
}
