<?php

namespace Tests\Feature;

use App\Filament\Pages\SeoSettingsPage;
use App\Filament\Widgets\SeoOverview;
use App\Filament\Widgets\StatsOverview;
use App\Models\Post;
use App\Models\User;
use App\Support\Seo\SeoSettings;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Tests\TestCase;

class SeoSettingsTest extends TestCase
{
    use RefreshDatabase;

    public function test_settings_page_saves_and_changes_resolved_titles(): void
    {
        $this->actingAs(User::factory()->create());

        $this->get('/admin/seo-settings')->assertOk()->assertSee('Title separator');
        $this->get('/admin')->assertOk();
        Livewire::test(SeoOverview::class)->assertOk()->assertSee('Good SEO score');
        Livewire::test(StatsOverview::class)->assertOk()->assertSee('Published posts');

        Livewire::test(SeoSettingsPage::class)
            ->assertOk()
            ->fillForm([
                'site_name' => 'Taxaccolega',
                'separator' => '-',
                'site_url' => 'https://www.taxaccolega.co.uk/',
                'post_title_template' => '%%title%% %%sep%% %%sitename%% Blog',
            ])
            ->call('save')
            ->assertHasNoFormErrors();

        $this->assertSame('https://www.taxaccolega.co.uk', SeoSettings::get('site_url'));

        $post = Post::create(['title' => 'Hello', 'slug' => 'hello', 'status' => 'published']);
        $this->assertSame('Hello - Taxaccolega Blog', $post->resolvedSeo()['title']);
        $this->assertSame('https://www.taxaccolega.co.uk/blog/hello/', $post->resolvedSeo()['canonical']);
    }
}
