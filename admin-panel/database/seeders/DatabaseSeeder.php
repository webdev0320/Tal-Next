<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use NoteBrainsLab\FilamentMenuManager\Models\Menu;
use NoteBrainsLab\FilamentMenuManager\Models\MenuItem;
use NoteBrainsLab\FilamentMenuManager\Models\MenuLocation;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin',
                'password' => 'password123',
                'email_verified_at' => now(),
            ]
        );

        // Every URL the website serves (+ legacy WordPress URLs), industry page metadata, then page bodies.
        $this->call(PageUrlsSeeder::class);
        $this->call(IndustryPagesSeeder::class);
        $this->call(PagesContentSeeder::class); // rendered HTML of each page -> pages_content
        $this->call(BlogPostsSeeder::class);    // blog URLs + WordPress import -> blog_posts / blog_contents
        $this->call(ProfessionalSeoSeeder::class); // professional SEO settings -> seo_meta

        $location = MenuLocation::firstOrCreate(
            ['handle' => 'header'],
            ['name' => 'Header']
        );

        $menu = Menu::firstOrCreate(
            ['menu_location_id' => $location->id, 'name' => 'Header Menu'],
            ['is_active' => true]
        );

        $extract = json_decode(file_get_contents(database_path('seeders/menu-extract.json')), true);

        $order = 1;
        $createItem = function (string $title, string $url, ?int $parentId = null) use ($menu, &$order) {
            return MenuItem::create([
                'menu_id' => $menu->id,
                'parent_id' => $parentId,
                'title' => $title,
                'url' => $url,
                'target' => '_self',
                'type' => 'custom',
                'enabled' => true,
                'order' => $order++,
            ]);
        };

        $createItem('Home', '/');

        $servicesParent = $createItem('Services', '/taxation');
        foreach ($extract['servicesItems'] as $item) {
            $createItem($item['label'], $item['to'], $servicesParent->id);
        }

        $industriesParent = $createItem('Who We Assist', '/industries');
        foreach ($extract['industriesItems'] as $item) {
            $createItem($item['label'], $item['to'], $industriesParent->id);
        }

        $packagesParent = $createItem('Packages', '/packages');
        foreach ($extract['packageItems'] as $item) {
            $createItem($item['label'], $item['to'], $packagesParent->id);
        }

        $createItem('Blog', '/blog');
        $createItem('About Us', '/about-us');
        $createItem('Contact Us', '/contact-us');
    }
}
