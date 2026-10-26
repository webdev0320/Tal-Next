<?php

namespace App\Filament\Resources\Categories\Schemas;

use App\Filament\Seo\SeoPanel;
use App\Models\Category;
use App\Support\Seo\SeoSettings;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class CategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(1)
            ->components([
                Section::make()
                    ->columns(2)
                    ->schema([
                        TextInput::make('name')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(function ($state, $set, $get, string $operation) {
                                if ($operation === 'create' || blank($get('slug'))) {
                                    $set('slug', Str::slug((string) $state));
                                }
                            }),
                        TextInput::make('slug')
                            ->required()
                            ->rule('alpha_dash')
                            ->unique(ignoreRecord: true)
                            ->prefix(Str::after(SeoSettings::siteUrl(SeoSettings::get('category_base', 'blog/category')), '://')),
                        Textarea::make('description')
                            ->rows(3)
                            ->live(onBlur: true)
                            ->helperText('Shown on the category archive and used as the default meta description.')
                            ->columnSpanFull(),
                    ]),
                SeoPanel::make(Category::class, withAnalysis: false),
            ]);
    }
}
