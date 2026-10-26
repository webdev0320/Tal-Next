<?php

namespace Tests\Feature;

use App\Filament\Resources\Posts\Pages\CreatePost;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Tests\TestCase;

class SeoPreviewTest extends TestCase
{
    use RefreshDatabase;

    public function test_live_preview_and_analysis_use_unsaved_form_values(): void
    {
        $this->actingAs(User::factory()->create());

        Livewire::test(CreatePost::class)
            ->fillForm([
                'title' => 'Unique preview headline',
                'slug' => 'unique-preview-headline',
                'excerpt' => 'Excerpt text for the snippet preview.',
                'seo.focus_keyword' => 'zebra stripes',
            ])
            ->assertSee('Unique preview headline | Taxaccolega')
            ->assertSee('taxaccolega.co.uk › blog › unique-preview-headline', false)
            ->assertSee('Excerpt text for the snippet preview.')
            ->assertSee('Keyphrase in SEO title')
            ->assertSee('Not all the words from your keyphrase appear in the SEO title');
    }
}
