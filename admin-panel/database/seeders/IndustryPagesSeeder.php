<?php

namespace Database\Seeders;

use App\Models\IndustryPages as IndustryPagesModel;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class IndustryPagesSeeder extends Seeder
{
    public function run(): void
    {
        // Resolve the path to industry pages relative to the project root
        $projectRoot = dirname(database_path()); // D:\projects\Tal-Next-Project\admin-panel\database
        $srcRoot = dirname($projectRoot); // D:\projects\Tal-Next-Project
        $pagesDir = $srcRoot . '/src/data/industryPages';

        if (!is_dir($pagesDir)) {
            echo "Industry pages directory not found: {$pagesDir}\n";
            return;
        }

        $files = glob($pagesDir . '/*.js');

        if (!$files) {
            echo "No industry page files found.\n";
            return;
        }

        foreach ($files as $file) {
            $slug = basename($file, '.js');

            // Read and parse the industry page data
            $content = @file_get_contents($file);
            if ($content === false) {
                echo "✗ Cannot read file: {$file}\n";
                continue;
            }

            echo "Processing: {$slug}\n";

            // Extract the default export object - format: "const page = {...}; export default page;"
            if (preg_match('/export default (\w+);/', $content, $matches)) {
                $varName = $matches[1];
                if (preg_match("/const " . $varName . "\s*=\s*((?:\{[^}]*\}|[^{])*);\s*export/", $content, $assignMatches)) {
                    echo "  Found assignment\n";
                    try {
                        // The assignment may have nested braces, so we need to handle it carefully
                        $assignmentContent = $assignMatches[1];
                        // Try to parse as JSON - if it fails, try extracting the object
                        $pageData = @json_decode("(" . $assignmentContent . ")", true);
                        if ($pageData === false && preg_match('/\{(?:[^{}]|(?R))*\}/', $assignmentContent, $objectMatch)) {
                            $pageData = @json_decode("(" . $objectMatch[0] . ")", true);
                        }
                        if ($pageData === false) {
                            echo "  ✗ Failed to decode JSON for: {$slug}\n";
                            continue;
                        }
                        if (!$pageData || !isset($pageData['slug'])) {
                            echo "  ✗ Failed to extract data for: {$slug}\n";
                            continue;
                        }

                        // Prepare the page data for database insertion
                        $title = $pageData['title'] ?? ucfirst(str_replace('-', ' ', $slug));
                        $pageContent = $pageData['sections'] ? json_encode($pageData['sections']) : '';
                        $status = 'published';
                        $sortOrder = (int)($pageData['slug'] === 'home' ? 0 : 1);

                        // Check if page already exists
                        $existing = IndustryPagesModel::where('slug', $slug)->first();

                        if ($existing) {
                            // Update existing page
                            $existing->title = $title;
                            $existing->content = $pageContent;
                            $existing->status = $status;
                            $existing->sort_order = $sortOrder;
                            $existing->save();
                            echo "  ✓ Updated: {$slug}\n";
                        } else {
                            // Create new page
                            IndustryPagesModel::create([
                                'title' => $title,
                                'slug' => $slug,
                                'content' => $pageContent,
                                'status' => $status,
                                'sort_order' => $sortOrder,
                            ]);
                            echo "  ✓ Created: {$slug}\n";
                        }
                    } catch (Exception $e) {
                        echo "  ✗ Error parsing {$slug}: " . $e->getMessage() . "\n";
                    }
                } else {
                    echo "  ✗ No assignment found\n";
                }
            } else {
                echo "  ✗ No export default found\n";
            }
        }

        echo "\nSync complete.\n";
    }
}