<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Page;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;
use NoteBrainsLab\FilamentMenuManager\Models\Menu;
use NoteBrainsLab\FilamentMenuManager\Models\MenuItem;
use NoteBrainsLab\FilamentMenuManager\Models\MenuLocation;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin',
                'password' => 'password123',
                'email_verified_at' => now(),
            ]
        );

        $category = Category::firstOrCreate(
            ['slug' => 'accounting'],
            ['name' => 'Accounting', 'description' => 'Accounting articles and updates.']
        );

        Page::firstOrCreate(
            ['slug' => 'home'],
            [
                'title' => 'Home',
                'content' => '<p>Welcome to our website.</p>',
                'status' => 'published',
            ]
        );

        Page::firstOrCreate(
            ['slug' => 'about-us'],
            [
                'title' => 'About Us',
                'content' => '<p>About our company.</p>',
                'status' => 'published',
            ]
        );

        // Sync industry pages using dedicated seeder
        $this->call(IndustryPagesSeeder::class);

        Post::firstOrCreate(
            ['slug' => 'welcome-to-our-blog'],
            [
                'title' => 'Welcome to Our Blog',
                'excerpt' => 'This is the first blog post.',
                'content' => '<p>Hello world! This is your first blog post.</p>',
                'category_id' => $category->id,
                'author_id' => $admin->id,
                'status' => 'published',
                'published_at' => now(),
            ]
        );

        // Industry pages (synced via IndustryPagesSeeder)
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

        $this->call(IndustryPagesSeeder::class);
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
