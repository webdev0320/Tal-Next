<?php

namespace App\Filament\Resources;

use App\Models\Page;
use App\Models\Post;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Schemas\Schema as FilamentSchema;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table as FilamentTable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;

class CombinedContentResource extends Resource
{
    protected static ?string $model = null;

    protected static ?int $navigationSort = 3;

    public static function form(Schema $schema): FilamentSchema
    {
        return FilamentSchema::make(
            [
                //
            ]
        );
    }

    public static function table(Table $table): FilamentTable
    {
        return $table
            ->emptyStateHeading('No content found')
            ->emptyStateDescription('Create Pages or Blog Posts to get started')
            ->columns([
                TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color('gray')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->formatStateUsing(fn (string $state) => match ($state) {
                        'page' => 'Static Page',
                        'post' => 'Blog Post',
                        default => $state,
                    }),
                TextColumn::make('title')
                    ->label('Title')
                    ->searchable()
                    ->sortable()
                    ->weight('medium')
                    ->limit(60)
                    ->wrap(),
                BadgeColumn::make('status')
                    ->formatStateUsing(fn (string $state) => match (strtolower($state)) {
                        'published' => 'Published',
                        'draft' => 'Draft',
                        'pending' => 'Pending',
                        default => ucfirst($state),
                    })
                    ->color(fn (string $state) => match (strtolower($state)) {
                        'published' => 'success',
                        'draft' => 'warning',
                        'pending' => 'info',
                        default => 'gray',
                    }),
                TextColumn::make('frontendPath')
                    ->label('URL')
                    ->url()
                    ->openUrlInNewTab()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('type')
                    ->label('Content Type')
                    ->options([
                        'page' => 'Static Pages',
                        'post' => 'Blog Posts',
                    ])
                    ->multiple()
                    ->columnSpanFull(),
            ])
            ->recordActions([
                Action::make('view')
                    ->label('View on Site')
                    ->icon('heroicon-o-arrow-top-right-on-square')
                    ->color('gray')
                    ->url(fn (mixed $record) => $record['frontendUrl'] ?? null, shouldOpenInNewTab: true)
                    ->visible(fn (mixed $record) => isset($record['frontendUrl'])),
                ActionGroup::make([
                    Action::make('edit')
                        ->label('Edit')
                        ->icon('heroicon-pencil')
                        ->url(fn (mixed $record) => '/admin/' . ($record['type'] === 'page' ? 'pages' : 'posts') . '/' . ($record['id'] ?? ''))
                        ->openUrlInNewTab(),
                    DeleteAction::make()
                        ->label('Delete')
                        ->icon('heroicon-o-trash')
                        ->color('danger')
                        ->confirmButtonText('Delete')
                        ->action(fn (mixed $record) => match ($record['type']) {
                            'page' => Page::find($record['id'])?->delete(),
                            'post' => Post::find($record['id'])?->delete(),
                        }),
                ]),
            ]);

        // We'll add toolbar actions separately
        return $table;
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return Builder::query()
            ->from(['pages' => (new Page())->getQuery()->fromSql])
            ->union(
                Builder::query()
                    ->from(['posts' => (new Post())->getQuery()->fromSql])
            )
            ->orderBy('title');
    }

    public static function getNavigationBadge(): ?string
    {
        $pages = Page::count();
        $posts = Post::count();

        return "{$pages} Pages, {$posts} Posts";
    }

    public static function getNavigationBadgeTooltip(): ?string
    {
        return "{$pages} static pages and {$posts} blog posts";
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['title'];
    }
}