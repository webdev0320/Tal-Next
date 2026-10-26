<?php

namespace App\Filament\Resources\Posts\Tables;

use App\Filament\Seo\SeoColumns;
use App\Models\Post;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\ReplicateAction;
use Filament\Actions\RestoreAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Str;

class PostsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('published_at', 'desc')
            ->modifyQueryUsing(fn ($query) => $query->with(['seo', 'category', 'author']))
            ->columns([
                ImageColumn::make('thumbnail')
                    ->label('')
                    ->state(fn (Post $record) => $record->featuredImageUrl())
                    ->imageHeight(40)
                    ->imageWidth(60)
                    ->extraImgAttributes(['style' => 'object-fit:cover;border-radius:4px']),
                TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->weight('medium')
                    ->limit(60)
                    ->wrap()
                    ->description(fn (Post $record) => '/'.$record->frontendPath().'/'),
                TextColumn::make('status')
                    ->badge()
                    ->formatStateUsing(fn (string $state) => Post::STATUSES[$state] ?? Str::headline($state))
                    ->color(fn (string $state) => match ($state) {
                        'published' => 'success',
                        'scheduled' => 'info',
                        'pending' => 'warning',
                        'private' => 'gray',
                        default => 'gray',
                    })
                    ->sortable(),
                TextColumn::make('category.name')
                    ->label('Category')
                    ->badge()
                    ->color('gray')
                    ->sortable(),
                TextColumn::make('author.name')
                    ->label('Author')
                    ->toggleable(isToggledHiddenByDefault: true),
                SeoColumns::score('seo'),
                SeoColumns::score('readability'),
                TextColumn::make('seo.focus_keyword')
                    ->label('Keyphrase')
                    ->placeholder('—')
                    ->limit(30)
                    ->toggleable(isToggledHiddenByDefault: true),
                ToggleColumn::make('is_featured')
                    ->label('Featured')
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('published_at')
                    ->label('Date')
                    ->dateTime('d M Y, H:i')
                    ->sortable(),
                TextColumn::make('updated_at')
                    ->label('Last modified')
                    ->since()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('status')->options(Post::STATUSES)->multiple(),
                SelectFilter::make('category')->relationship('category', 'name')->searchable()->preload(),
                SelectFilter::make('author')->relationship('author', 'name')->preload(),
                TernaryFilter::make('is_featured')->label('Featured'),
                SeoColumns::filter(),
            ])
            ->recordActions([
                Action::make('view')
                    ->label('View')
                    ->icon('heroicon-o-arrow-top-right-on-square')
                    ->color('gray')
                    ->url(fn (Post $record) => $record->frontendUrl(), shouldOpenInNewTab: true)
                    ->visible(fn (Post $record) => ! $record->trashed()),
                EditAction::make(),
                ActionGroup::make([
                    ReplicateAction::make()
                        ->label('Duplicate')
                        ->excludeAttributes(['slug'])
                        ->mutateRecordDataUsing(function (array $data) {
                            $data['title'] = $data['title'].' (copy)';
                            $data['slug'] = Str::slug($data['title']).'-'.Str::lower(Str::random(4));
                            $data['status'] = 'draft';

                            return $data;
                        })
                        ->after(function (Post $replica, Post $record) {
                            if ($record->seo) {
                                $replica->seo()->create(collect($record->seo->getAttributes())->except(['id', 'seoable_id', 'seoable_type', 'created_at', 'updated_at'])->all());
                            }
                        }),
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
