@php
    $block = $result[$kind] ?? ['score' => 0, 'checks' => []];
    $colors = ['bad' => '#dc3232', 'ok' => '#ee7c1b', 'good' => '#7ad03a'];
    $groups = [
        'bad' => ['Problems', []],
        'ok' => ['Improvements', []],
        'good' => ['Good results', []],
    ];
    foreach ($block['checks'] as $c) {
        $groups[$c['status']][1][] = $c;
    }
    $status = \App\Support\Seo\SeoAnalyzer::status($block['score']);
    $stats = $result['stats'] ?? [];
@endphp

<div style="margin-top:.5rem">
    <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem">
        <span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:{{ $colors[$status] ?? '#999' }}"></span>
        <span style="font-weight:600">
            {{ $kind === 'seo' ? 'SEO analysis' : 'Readability analysis' }}: {{ $block['score'] }}/100
        </span>
        @if ($kind === 'readability' && $stats)
            <span style="font-size:.75rem;opacity:.7">
                {{ $stats['words'] }} words · {{ $stats['reading_time'] }} min read · Flesch {{ $stats['flesch'] }}
            </span>
        @endif
    </div>

    @foreach ($groups as $statusKey => [$heading, $items])
        @continue(empty($items))
        <details @if($statusKey !== 'good') open @endif style="margin-bottom:.5rem">
            <summary style="cursor:pointer;font-weight:600;font-size:.875rem;padding:.25rem 0">
                {{ $heading }} ({{ count($items) }})
            </summary>
            <ul style="list-style:none;padding:0;margin:.25rem 0 0">
                @foreach ($items as $check)
                    <li style="display:flex;gap:.6rem;align-items:flex-start;padding:.3rem 0;font-size:.875rem">
                        <span style="flex:none;margin-top:.35rem;width:10px;height:10px;border-radius:50%;background:{{ $colors[$check['status']] }}"></span>
                        <span><strong>{{ $check['label'] }}:</strong> {{ $check['message'] }}</span>
                    </li>
                @endforeach
            </ul>
        </details>
    @endforeach

    <p style="font-size:.75rem;opacity:.6;margin-top:.5rem">Analysis updates when you leave a field. Scores are saved with the record.</p>
</div>
