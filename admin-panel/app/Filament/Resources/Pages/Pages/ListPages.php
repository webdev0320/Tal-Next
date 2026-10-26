<?php

namespace App\Filament\Resources\Pages\Pages;

use App\Filament\Resources\Pages\PageResource;
use App\Models\Page;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;
use Illuminate\Database\Eloquent\Builder;

class ListPages extends ListRecords
{
    protected static string $resource = PageResource::class;

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
                ->badge(fn () => Page::query()->where('status', 'published')->count() ?: null)
                ->modifyQueryUsing(fn (Builder $query) => $query->withoutTrashed()->where('status', 'published')),
            'draft' => Tab::make('Drafts')
                ->badge(fn () => Page::query()->where('status', 'draft')->count() ?: null)
                ->modifyQueryUsing(fn (Builder $query) => $query->withoutTrashed()->where('status', 'draft')),
            'trash' => Tab::make('Trash')
                ->icon('heroicon-o-trash')
                ->badge(fn () => Page::onlyTrashed()->count() ?: null)
                ->modifyQueryUsing(fn (Builder $query) => $query->onlyTrashed()),
        ];
    }
}
