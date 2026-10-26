<?php

namespace App\Filament\Resources\Posts\Schemas;

use App\Filament\Seo\ContentFields;
use App\Filament\Seo\SeoPanel;
use App\Models\Post;
use App\Support\Seo\SeoSettings;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class PostForm
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
                            ContentFields::slug(SeoSettings::get('blog_base', 'blog')),
                            ContentFields::editorMode(),
                            ...ContentFields::editors(),
                        ]),
                    Section::make('Excerpt')
                        ->collapsible()
                        ->schema([
                            Textarea::make('excerpt')
                                ->hiddenLabel()
                                ->rows(3)
                                ->helperText('Hand-crafted summary shown on the blog listing. Also used as the default meta description.')
                                ->live(onBlur: true),
                        ]),
                    SeoPanel::make(Post::class),
                ])->columnSpan(['lg' => 2]),

                Group::make([
                    Section::make('Publish')
                        ->icon('heroicon-o-paper-airplane')
                        ->schema([
                            Select::make('status')
                                ->options(Post::STATUSES)
                                ->default('draft')
                                ->selectablePlaceholder(false)
                                ->live()
                                ->required(),
                            DateTimePicker::make('published_at')
                                ->label(fn (Get $get) => $get('status') === 'scheduled' ? 'Publish on' : 'Published on')
                                ->required(fn (Get $get) => $get('status') === 'scheduled')
                                ->after(fn (Get $get, string $operation) => $get('status') === 'scheduled' && $operation === 'create' ? 'now' : null)
                                ->helperText('Leave empty to publish immediately.')
                                ->seconds(false)
                                ->native(false),
                            Select::make('author_id')
                                ->label('Author')
                                ->relationship('author', 'name')
                                ->searchable()
                                ->preload()
                                ->default(fn () => auth()->id()),
                            Toggle::make('is_featured')
                                ->label('Featured (sticky) post'),
                        ]),
                    Section::make('Category')
                        ->icon('heroicon-o-folder')
                        ->schema([
                            Select::make('category_id')
                                ->hiddenLabel()
                                ->relationship('category', 'name')
                                ->searchable()
                                ->preload()
                                ->createOptionForm([
                                    TextInput::make('name')
                                        ->required()
                                        ->live(onBlur: true)
                                        ->afterStateUpdated(fn ($state, $set) => $set('slug', Str::slug((string) $state))),
                                    TextInput::make('slug')->required()->unique('categories', 'slug'),
                                ]),
                        ]),
                    Section::make('Featured image')
                        ->icon('heroicon-o-photo')
                        ->schema([
                            FileUpload::make('featured_image')
                                ->hiddenLabel()
                                ->image()
                                ->imageEditor()
                                ->disk('public')
                                ->directory('posts')
                                ->visibility('public')
                                ->maxSize(4096),
                            TextInput::make('featured_image_url')
                                ->label('…or image URL')
                                ->url()
                                ->maxLength(500)
                                ->helperText('Used when no file is uploaded (e.g. imported WordPress images).')
                                ->live(onBlur: true),
                            TextInput::make('featured_image_alt')
                                ->label('Alt text')
                                ->maxLength(255),
                        ]),
                ])->columnSpan(['lg' => 1]),
            ]);
    }
}
