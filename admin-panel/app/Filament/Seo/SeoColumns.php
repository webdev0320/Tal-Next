<?php

namespace App\Filament\Seo;

use App\Models\SeoMeta;
use App\Support\Seo\SeoAnalyzer;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;

/**
 * Yoast-style traffic-light columns + filter for list tables.
 */
class SeoColumns
{
    public static function score(string $kind = 'seo'): IconColumn
    {
        $attr = $kind === 'seo' ? 'seo_score' : 'readability_score';

        return IconColumn::make("seo.{$attr}")
            ->label($kind === 'seo' ? 'SEO' : 'Read.')
            ->alignCenter()
            ->default(null)
            ->state(fn ($record) => ($kind === 'seo' && blank($record->seo?->focus_keyword)) ? -1 : ($record->seo?->{$attr} ?? -1))
            ->icon(fn ($state) => (int) $state < 0 ? 'heroicon-o-minus-circle' : 'heroicon-s-check-circle')
            ->color(fn ($state) => match (SeoAnalyzer::status((int) $state < 0 ? null : (int) $state)) {
                'good' => 'success',
                'ok' => 'warning',
                'bad' => 'danger',
                default => 'gray',
            })
            ->tooltip(fn ($state) => (int) $state < 0 ? ($kind === 'seo' ? 'No focus keyphrase' : 'Not analysed yet') : ucfirst($kind)." score: {$state}/100")
            ->sortable(query: fn (Builder $query, string $direction) => $query->orderBy(
                SeoMeta::select($attr)
                    ->whereColumn('seo_meta.seoable_id', $query->getModel()->getTable().'.id')
                    ->where('seo_meta.seoable_type', $query->getModel()::class)
                    ->limit(1),
                $direction,
            ));
    }

    public static function filter(): SelectFilter
    {
        return SelectFilter::make('seo_score')
            ->label('SEO score')
            ->options([
                'good' => 'Good (70+)',
                'ok' => 'OK (40–69)',
                'bad' => 'Needs improvement (<40)',
                'none' => 'No focus keyphrase',
                'noindex' => 'Set to noindex',
            ])
            ->query(function (Builder $query, array $data) {
                return match ($data['value'] ?? null) {
                    'good' => $query->whereHas('seo', fn ($q) => $q->whereNotNull('focus_keyword')->where('seo_score', '>=', 70)),
                    'ok' => $query->whereHas('seo', fn ($q) => $q->whereNotNull('focus_keyword')->whereBetween('seo_score', [40, 69])),
                    'bad' => $query->whereHas('seo', fn ($q) => $q->whereNotNull('focus_keyword')->where('seo_score', '<', 40)),
                    'none' => $query->where(fn ($q) => $q->doesntHave('seo')->orWhereHas('seo', fn ($s) => $s->whereNull('focus_keyword')->orWhere('focus_keyword', ''))),
                    'noindex' => $query->whereHas('seo', fn ($q) => $q->where('robots_index', 'noindex')),
                    default => $query,
                };
            });
    }
}
