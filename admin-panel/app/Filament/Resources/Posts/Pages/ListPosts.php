<?php

namespace App\Filament\Resources\Posts\Pages;

use App\Filament\Resources\Posts\PostResource;
use App\Models\Post;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;
use Illuminate\Database\Eloquent\Builder;

class ListPosts extends ListRecords
{
    protected static string $resource = PostResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }

    public function getTabs(): array
    {
        return [
            'all' => Tab::make('All')
                ->modifyQueryUsing(fn (Builder $query) => $query->withoutTrashed()),
            'published' => Tab::make('Published')
                ->badge(fn () => Post::query()->where('status', 'published')->count() ?: null)
                ->modifyQueryUsing(fn (Builder $query) => $query->withoutTrashed()->where('status', 'published')),
            'draft' => Tab::make('Drafts')
                ->badge(fn () => Post::query()->where('status', 'draft')->count() ?: null)
                ->modifyQueryUsing(fn (Builder $query) => $query->withoutTrashed()->where('status', 'draft')),
            'pending' => Tab::make('Pending')
                ->badge(fn () => Post::query()->where('status', 'pending')->count() ?: null)
                ->modifyQueryUsing(fn (Builder $query) => $query->withoutTrashed()->where('status', 'pending')),
            'scheduled' => Tab::make('Scheduled')
                ->badge(fn () => Post::query()->where('status', 'scheduled')->count() ?: null)
                ->modifyQueryUsing(fn (Builder $query) => $query->withoutTrashed()->where('status', 'scheduled')),
            'trash' => Tab::make('Trash')
                ->icon('heroicon-o-trash')
                ->badge(fn () => Post::onlyTrashed()->count() ?: null)
                ->modifyQueryUsing(fn (Builder $query) => $query->onlyTrashed()),
        ];
    }
}
