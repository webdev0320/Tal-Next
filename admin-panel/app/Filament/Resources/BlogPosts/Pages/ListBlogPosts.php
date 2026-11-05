<?php

namespace App\Filament\Resources\BlogPosts\Pages;

use App\Filament\Resources\BlogPosts\BlogPostResource;
use App\Models\BlogPost;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;
use Illuminate\Database\Eloquent\Builder;

class ListBlogPosts extends ListRecords
{
    protected static string $resource = BlogPostResource::class;

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
                ->badge(fn () => BlogPost::query()->where('status', 'published')->count() ?: null)
                ->modifyQueryUsing(fn (Builder $query) => $query->withoutTrashed()->where('status', 'published')),
            'draft' => Tab::make('Drafts')
                ->badge(fn () => BlogPost::query()->where('status', 'draft')->count() ?: null)
                ->modifyQueryUsing(fn (Builder $query) => $query->withoutTrashed()->where('status', 'draft')),
            'pending' => Tab::make('Pending')
                ->badge(fn () => BlogPost::query()->where('status', 'pending')->count() ?: null)
                ->modifyQueryUsing(fn (Builder $query) => $query->withoutTrashed()->where('status', 'pending')),
            'scheduled' => Tab::make('Scheduled')
                ->badge(fn () => BlogPost::query()->where('status', 'scheduled')->count() ?: null)
                ->modifyQueryUsing(fn (Builder $query) => $query->withoutTrashed()->where('status', 'scheduled')),
            'trash' => Tab::make('Trash')
                ->icon('heroicon-o-trash')
                ->badge(fn () => BlogPost::onlyTrashed()->count() ?: null)
                ->modifyQueryUsing(fn (Builder $query) => $query->onlyTrashed()),
        ];
    }
}
