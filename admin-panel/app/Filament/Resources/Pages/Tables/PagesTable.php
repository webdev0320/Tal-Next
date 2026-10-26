<?php

namespace App\Filament\Resources\Pages\Tables;

use App\Filament\Seo\SeoColumns;
use App\Models\Page;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Str;

class PagesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('sort_order')
            ->reorderable('sort_order')
            ->modifyQueryUsing(fn ($query) => $query->with(['seo', 'parent']))
            ->columns([
                TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->weight('medium')
                    ->formatStateUsing(fn (string $state, Page $record) => ($record->parent_id ? '— ' : '').$state)
                    ->description(fn (Page $record) => '/'.ltrim($record->frontendPath().'/', '/')),
                TextColumn::make('status')
                    ->badge()
                    ->formatStateUsing(fn (string $state) => Page::STATUSES[$state] ?? Str::headline($state))
                    ->color(fn (string $state) => match ($state) {
                        'published' => 'success',
                        default => 'gray',
                    })
                    ->sortable(),
                TextColumn::make('parent.title')
                    ->label('Parent')
                    ->placeholder('—')
                    ->toggleable(),
                SeoColumns::score('seo'),
                SeoColumns::score('readability'),
                TextColumn::make('seo.focus_keyword')
                    ->label('Keyphrase')
                    ->placeholder('—')
                    ->limit(30)
                    ->toggleable(),
                TextColumn::make('updated_at')
                    ->label('Last modified')
                    ->since()
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('status')->options(Page::STATUSES),
                SelectFilter::make('parent')->relationship('parent', 'title')->label('Parent page'),
                SeoColumns::filter(),
            ])
            ->recordActions([
                Action::make('view')
                    ->label('View')
                    ->icon('heroicon-o-arrow-top-right-on-square')
                    ->color('gray')
                    ->url(fn (Page $record) => $record->frontendUrl(), shouldOpenInNewTab: true)
                    ->visible(fn (Page $record) => ! $record->trashed()),
                EditAction::make(),
                ActionGroup::make([
                    DeleteAction::make()->label('Move to trash'),
                    RestoreAction::make(),
                    ForceDeleteAction::make(),
                ]),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    BulkAction::make('publish')
                        ->label('Publish')
                        ->icon('heroicon-o-check-circle')
                        ->requiresConfirmation()
                        ->action(fn (Collection $records) => $records->each->update(['status' => 'published']))
                        ->deselectRecordsAfterCompletion(),
                    BulkAction::make('draft')
                        ->label('Move to draft')
                        ->icon('heroicon-o-pencil')
                        ->action(fn (Collection $records) => $records->each->update(['status' => 'draft']))
                        ->deselectRecordsAfterCompletion(),
                    DeleteBulkAction::make()->label('Move to trash'),
                    RestoreBulkAction::make(),
                    ForceDeleteBulkAction::make(),
                ]),
            ]);
    }
}
