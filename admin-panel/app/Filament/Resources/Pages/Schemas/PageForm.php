<?php

namespace App\Filament\Resources\Pages\Schemas;

use App\Filament\Seo\ContentFields;
use App\Filament\Seo\SeoPanel;
use App\Models\Page;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Database\Eloquent\Builder;

class PageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(3)
            ->components([
                Group::make([
                    Section::make()
                        ->schema([
                            ContentFields::title(),
                            ContentFields::slug(),
                            ContentFields::editorMode(),
                            ...ContentFields::editors(),
                        ]),
                    SeoPanel::make(Page::class),
                ])->columnSpan(['lg' => 2]),

                Group::make([
                    Section::make('Publish')
                        ->icon('heroicon-o-paper-airplane')
                        ->schema([
                            Select::make('status')
                                ->options(Page::STATUSES)
                                ->default('draft')
                                ->selectablePlaceholder(false)
                                ->required(),
                            DateTimePicker::make('published_at')
                                ->label('Published on')
                                ->seconds(false)
                                ->native(false),
                        ]),
                    Section::make('Page attributes')
                        ->icon('heroicon-o-squares-2x2')
                        ->schema([
                            Select::make('parent_id')
                                ->label('Parent page')
                                ->relationship(
                                    'parent',
                                    'title',
                                    fn (Builder $query, ?Page $record) => $query->when($record, fn ($q) => $q->whereKeyNot($record->getKey())),
                                )
                                ->searchable()
                                ->preload()
                                ->live()
                                ->placeholder('(no parent)'),
                            TextInput::make('sort_order')
                                ->label('Order')
                                ->numeric()
                                ->default(0),
                        ]),
                    Section::make('Featured image')
                        ->icon('heroicon-o-photo')
                        ->collapsible()
                        ->schema([
                            FileUpload::make('featured_image')
                                ->hiddenLabel()
                                ->image()
                                ->imageEditor()
                                ->disk('public')
                                ->directory('pages')
                                ->visibility('public')
                                ->maxSize(4096),
                        ]),
                ])->columnSpan(['lg' => 1]),
            ]);
    }
}
