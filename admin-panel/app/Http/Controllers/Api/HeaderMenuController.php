<?php

namespace App\Http\Controllers\Api;

use NoteBrainsLab\FilamentMenuManager\Models\Menu;
use NoteBrainsLab\FilamentMenuManager\Models\MenuLocation;
use NoteBrainsLab\FilamentMenuManager\Models\MenuItem;
use Illuminate\Http\JsonResponse;

class HeaderMenuController extends \App\Http\Controllers\Controller
{
    public function show(string $location): JsonResponse
    {
        $loc = MenuLocation::where('handle', $location)->first();

        if (! $loc) {
            return response()->json(['data' => [], 'message' => 'Location not found.'], 404)->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        }

        $menu = $loc->activeMenu();

        if (! $menu) {
            return response()->json([
                'data' => [],
                'menu' => [
                    'location' => $location,
                    'is_active' => false,
                ],
            ])->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        }

        $items = $menu->items()->get();

        $tree = $this->buildTree($items->where('enabled', true));

        return response()->json([
            'data' => $tree,
            'menu' => [
                'id' => $menu->id,
                'name' => $menu->name,
                'location' => $location,
                'is_active' => (bool) $menu->is_active,
            ],
        ])->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    }

    public function index(): JsonResponse
    {
        return $this->show('header');
    }

    private function buildTree($items, $parentId = null): array
    {
        $branch = [];

        foreach ($items->where('parent_id', $parentId) as $item) {
            $branch[] = [
                'id' => $item->id,
                'title' => $item->getResolvedTitle(),
                'url' => $item->getResolvedUrl(),
                'target' => $item->target ?? '_self',
                'type' => $item->type,
                'order' => $item->order,
                'enabled' => (bool) $item->enabled,
                'children' => $this->buildTree($items, $item->id),
            ];
        }

        usort($branch, fn ($a, $b) => $a['order'] <=> $b['order']);

        return $branch;
    }
}
