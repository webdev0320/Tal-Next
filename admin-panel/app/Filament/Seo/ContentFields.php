<?php

namespace App\Filament\Seo;

use App\Support\Seo\SeoSettings;
use Filament\Forms\Components\CodeEditor;
use Filament\Forms\Components\CodeEditor\Enums\Language;
use Filament\Forms\Components\Field;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\ToggleButtons;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\Utilities\Set;
use Illuminate\Support\Str;

/**
 * Shared title / slug / editor fields for pages and posts.
 */
class ContentFields
{
    public static function title(): TextInput
    {
        return TextInput::make('title')
            ->required()
            ->maxLength(255)
            ->placeholder('Add title')
            ->extraInputAttributes(['style' => 'font-size:1.25rem;font-weight:600'])
            ->live(onBlur: true)
            ->afterStateUpdated(function (?string $state, Set $set, Get $get, string $operation) {
                // Only auto-generate the slug for new records so published URLs never change silently.
                if ($operation === 'create' || blank($get('slug'))) {
                    $set('slug', Str::slug((string) $state));
                }
            });
    }

    public static function slug(string $prefixPath = ''): TextInput
    {
        $prefix = rtrim(SeoSettings::siteUrl($prefixPath), '/').'/';

        return TextInput::make('slug')
            ->label('Permalink')
            ->prefix(Str::after($prefix, '://'))
            ->required()
            ->maxLength(191)
            ->rule('alpha_dash')
            ->unique(ignoreRecord: true)
            ->live(onBlur: true)
            ->afterStateUpdated(fn (?string $state, Set $set) => $set('slug', Str::slug((string) $state)))
            ->helperText('Changing the slug of published content changes its URL — add a redirect on the website if you do.');
    }

    public static function editorMode(): ToggleButtons
    {
        return ToggleButtons::make('editor_mode')
            ->label('Editor')
            ->options(['visual' => 'Visual', 'html' => 'HTML'])
            ->icons(['visual' => 'heroicon-o-pencil-square', 'html' => 'heroicon-o-code-bracket'])
            ->default('visual')
            ->inline()
            ->live()
            ->helperText('Use HTML for imported or custom-styled content — the visual editor removes inline styles. Save before switching.');
    }

    /** @return array<int, Field> */
    public static function editors(): array
    {
        return [
            RichEditor::make('content')
                ->label('Content')
                ->fileAttachmentsDisk('public')
                ->fileAttachmentsDirectory('editor')
                ->fileAttachmentsVisibility('public')
                ->toolbarButtons([
                    ['bold', 'italic', 'underline', 'strike', 'link', 'textColor'],
                    ['h2', 'h3', 'paragraph'],
                    ['alignStart', 'alignCenter', 'alignEnd'],
                    ['blockquote', 'codeBlock', 'bulletList', 'orderedList', 'horizontalRule'],
                    ['table', 'attachFiles'],
                    ['undo', 'redo', 'clearFormatting'],
                ])
                ->extraInputAttributes(['style' => 'min-height: 24rem'])
                ->live(onBlur: true)
                ->visible(fn (Get $get) => $get('editor_mode') !== 'html')
                ->columnSpanFull(),
            CodeEditor::make('content_html')
                ->label('Content (HTML)')
                ->language(Language::Html)
                ->extraAttributes(['style' => 'max-height: 36rem; overflow: auto'])
                ->afterStateHydrated(fn (CodeEditor $component, $record) => $component->state($record?->content))
                ->live(onBlur: true)
                ->visible(fn (Get $get) => $get('editor_mode') === 'html')
                ->columnSpanFull(),
        ];
    }
}
