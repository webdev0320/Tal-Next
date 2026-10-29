<?php

require __DIR__.'/vendor/autoload.php';

use App\Models\Page;

$industriesPage = Page::where('slug', 'industries')->first();

$industrySlugs = [
    'it-contractor-accountants',
    'startup-accountants',
    'software-company-accountants',
    'saas-accountants',
    'real-estate-accountants',
    'landlord-accountants',
    'property-investor-accountants',
    'ecommerce-accountants',
    'construction-accountants',
    'doctor-accountants',
    'dental-accountants',
    'pharmacy-accountants',
    'medical-practice-accountants',
    'veterinary-accountants',
    'logistics-accountants',
    'hospitality-accountants',
    'charity-accountants',
];

foreach ($industrySlugs as $slug) {
    $page = Page::where('slug', $slug)->first();
    if ($page) {
        $page->parent_id = $industriesPage->id;
        $page->save();
        echo "Updated: {$slug} - frontendPath now: " . $page->frontendPath() . PHP_EOL;
    }
}
echo "Done updating industry pages" . PHP_EOL;