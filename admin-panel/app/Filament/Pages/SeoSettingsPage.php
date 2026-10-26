<?php

namespace App\Filament\Pages;

use App\Filament\Seo\SeoPanel;
use App\Support\Seo\SeoSettings;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Forms\Components\CodeEditor;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\ToggleButtons;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Actions;
use Filament\Schemas\Components\EmbeddedSchema;
use Filament\Schemas\Components\Fieldset;
use Filament\Schemas\Components\Form;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Components\Text;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;

/**
 * Global SEO settings — the equivalent of Yoast SEO > Settings.
 *
 * @property-read Schema $form
 */
class SeoSettingsPage extends Page
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedMagnifyingGlassCircle;

    protected static string|\UnitEnum|null $navigationGroup = 'SEO';

    protected static ?string $navigationLabel = 'SEO Settings';

    protected static ?string $title = 'SEO Settings';

    protected static ?string $slug = 'seo-settings';

    protected static ?int $navigationSort = 1;

    /** @var array<string, mixed> */
    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill(SeoSettings::all());
    }

    public function form(Schema $schema): Schema
    {
        $separators = collect(['-', '–', '—', ':', '·', '•', '*', '⋆', '|', '~', '«', '»', '>', '<'])
            ->mapWithKeys(fn ($s) => [$s => $s])->all();

        $templateHint = SeoPanel::VARIABLES_HINT.' %%term_title%% %%term_description%% %%author%%';

        return $schema
            ->statePath('data')
            ->components([
                Tabs::make('settings')
                    ->persistTabInQueryString()
                    ->tabs([
                        Tab::make('Site basics')
                            ->icon('heroicon-o-globe-alt')
                            ->schema([
                                Section::make()->columns(2)->schema([
                                    TextInput::make('site_name')->label('Website name')->required(),
                                    TextInput::make('tagline')->label('Tagline'),
                                    TextInput::make('site_url')
                                        ->label('Website URL (Next.js front end)')
                                        ->url()
                                        ->required()
                                        ->helperText('Used for canonical URLs, sitemaps and schema. No trailing slash.'),
                                    TextInput::make('site_language')->label('Site language')->placeholder('en-GB'),
                                    TextInput::make('blog_base')->label('Blog URL base')->prefix('/')->helperText('e.g. blog → /blog/my-post/'),
                                    TextInput::make('category_base')->label('Category URL base')->prefix('/'),
                                ]),
                                Section::make('Title separator')
                                    ->description('Choose the symbol to use as your title separator. It is shown between your post title and site name.')
                                    ->schema([
                                        ToggleButtons::make('separator')->hiddenLabel()->options($separators)->inline()->required(),
                                    ]),
                                Section::make('Site image')
                                    ->description('This image is used as a fallback for posts/pages that don\'t have any images set.')
                                    ->schema([
                                        FileUpload::make('default_og_image')->hiddenLabel()->image()->disk('public')->directory('seo')->visibility('public'),
                                    ]),
                            ]),

                        Tab::make('Homepage')
                            ->icon('heroicon-o-home')
                            ->schema([
                                Section::make()->schema([
                                    TextInput::make('home_title')->label('SEO title')->helperText($templateHint),
                                    Textarea::make('home_description')->label('Meta description')->rows(3),
                                ]),
                            ]),

                        Tab::make('Content types')
                            ->icon('heroicon-o-document-duplicate')
                            ->schema([
                                Text::make($templateHint),
                                Section::make('Pages')->columns(2)->schema([
                                    TextInput::make('page_title_template')->label('SEO title template'),
                                    TextInput::make('page_description_template')->label('Meta description template'),
                                    Select::make('default_page_schema')->label('Default page type')->options([
                                        'WebPage' => 'Web Page', 'AboutPage' => 'About Page', 'ContactPage' => 'Contact Page',
                                        'FAQPage' => 'FAQ Page', 'ItemPage' => 'Item Page', 'CollectionPage' => 'Collection Page',
                                    ]),
                                    Toggle::make('pages_noindex')->label('Hide pages from search results (noindex)')->inline(false),
                                ]),
                                Section::make('Blog posts')->columns(2)->schema([
                                    TextInput::make('post_title_template')->label('SEO title template'),
                                    TextInput::make('post_description_template')->label('Meta description template'),
                                    Select::make('default_post_schema')->label('Default article type')->options([
                                        'Article' => 'Article', 'BlogPosting' => 'Blog Post', 'NewsArticle' => 'News Article', 'None' => 'None',
                                    ]),
                                    Toggle::make('posts_noindex')->label('Hide posts from search results (noindex)')->inline(false),
                                    TextInput::make('blog_index_title')->label('Blog archive SEO title'),
                                    TextInput::make('blog_index_description')->label('Blog archive meta description'),
                                ]),
                                Section::make('Categories')->columns(2)->schema([
                                    TextInput::make('category_title_template')->label('SEO title template'),
                                    TextInput::make('category_description_template')->label('Meta description template'),
                                    Toggle::make('categories_noindex')->label('Hide category archives from search results (noindex)')->inline(false),
                                ]),
                            ]),

                        Tab::make('Site representation')
                            ->icon('heroicon-o-building-office')
                            ->schema([
                                Section::make('Organization')
                                    ->description('Used in the schema.org knowledge graph (Google Knowledge Panel).')
                                    ->columns(2)
                                    ->schema([
                                        Select::make('org_type')->label('Represents')->options([
                                            'Organization' => 'Organization',
                                            'AccountingService' => 'Accounting service (local business)',
                                            'LocalBusiness' => 'Local business',
                                            'ProfessionalService' => 'Professional service',
                                            'Person' => 'Person',
                                        ])->required(),
                                        TextInput::make('org_name')->label('Name'),
                                        TextInput::make('org_legal_name')->label('Legal name'),
                                        TextInput::make('org_phone')->label('Phone')->tel(),
                                        TextInput::make('org_email')->label('Email')->email(),
                                        FileUpload::make('org_logo')->label('Logo')->image()->disk('public')->directory('seo')->visibility('public')->helperText('Minimum 112 × 112 px.'),
                                    ]),
                                Fieldset::make('Address')->columns(3)->schema([
                                    TextInput::make('org_street')->label('Street')->columnSpan(3),
                                    TextInput::make('org_city')->label('City'),
                                    TextInput::make('org_region')->label('Region'),
                                    TextInput::make('org_postal_code')->label('Postcode'),
                                    TextInput::make('org_country')->label('Country code')->maxLength(2)->placeholder('GB'),
                                ]),
                            ]),

                        Tab::make('Social')
                            ->icon('heroicon-o-share')
                            ->schema([
                                Section::make()->columns(2)->schema([
                                    TextInput::make('facebook_url')->label('Facebook page')->url(),
                                    TextInput::make('twitter_username')->label('X (Twitter) username')->prefix('@'),
                                    TextInput::make('linkedin_url')->label('LinkedIn')->url(),
                                    TextInput::make('instagram_url')->label('Instagram')->url(),
                                    TextInput::make('youtube_url')->label('YouTube')->url(),
                                    TagsInput::make('other_profiles')->label('Other profiles (URLs)')->placeholder('https://…'),
                                ]),
                            ]),

                        Tab::make('Webmaster & analytics')
                            ->icon('heroicon-o-chart-bar-square')
                            ->schema([
                                Section::make('Site verification')
                                    ->description('Paste only the content value of the verification meta tag.')
                                    ->columns(2)
                                    ->schema([
                                        TextInput::make('google_verification')->label('Google Search Console'),
                                        TextInput::make('bing_verification')->label('Bing Webmaster Tools'),
                                        TextInput::make('yandex_verification')->label('Yandex'),
                                        TextInput::make('pinterest_verification')->label('Pinterest'),
                                    ]),
                                Section::make('Analytics')->columns(2)->schema([
                                    TextInput::make('ga_measurement_id')->label('Google Analytics 4 measurement ID')->placeholder('G-XXXXXXX'),
                                    TextInput::make('gtm_container_id')->label('Google Tag Manager container ID')->placeholder('GTM-XXXXXX'),
                                ]),
                            ]),

                        Tab::make('Crawling & indexing')
                            ->icon('heroicon-o-bug-ant')
                            ->schema([
                                Section::make('Search engine visibility')->schema([
                                    Toggle::make('allow_indexing')
                                        ->label('Allow search engines to index this site')
                                        ->helperText('Turn off on staging: every URL gets noindex and robots.txt blocks crawling.'),
                                ]),
                                Section::make('XML sitemaps')->columns(2)->schema([
                                    Toggle::make('sitemap_enabled')->label('Enable XML sitemaps'),
                                    Toggle::make('sitemap_include_categories')->label('Include category archives'),
                                    Text::make(fn () => 'Sitemap index: '.url('/sitemap_index.xml'))->columnSpanFull(),
                                ]),
                                Section::make('robots.txt')
                                    ->description('The sitemap line is added automatically. Served at '.url('/robots.txt').' and /api/seo/robots.txt')
                                    ->schema([
                                        CodeEditor::make('robots_txt')->hiddenLabel(),
                                    ]),
                                Section::make('Breadcrumbs')->columns(2)->schema([
                                    TextInput::make('breadcrumbs_home_label')->label('Anchor text for the homepage'),
                                    TextInput::make('breadcrumbs_separator')->label('Separator between breadcrumbs'),
                                ]),
                            ]),
                    ]),
            ]);
    }

    public function content(Schema $schema): Schema
    {
        return $schema->components([
            Form::make([EmbeddedSchema::make('form')])
                ->id('form')
                ->livewireSubmitHandler('save')
                ->footer([
                    Actions::make([
                        Action::make('save')->label('Save changes')->submit('save')->keyBindings(['mod+s']),
                    ]),
                ]),
        ]);
    }

    public function save(): void
    {
        $data = $this->form->getState();
        $data['site_url'] = rtrim((string) $data['site_url'], '/');
        $data['blog_base'] = trim((string) ($data['blog_base'] ?? 'blog'), '/');
        $data['category_base'] = trim((string) ($data['category_base'] ?? 'blog/category'), '/');

        SeoSettings::save($data);

        Notification::make()->success()->title('SEO settings saved')->send();
    }
}
