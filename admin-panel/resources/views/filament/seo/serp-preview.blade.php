@php
    $title = $title ?? '';
    $description = $description ?? '';
    $url = $url ?? '';
    $parts = parse_url($url) ?: [];
    $host = $parts['host'] ?? '';
    $crumbs = collect(explode('/', trim($parts['path'] ?? '', '/')))->filter()->implode(' › ');
    $titleLen = mb_strlen($title);
    $descLen = mb_strlen($description);
    $highlight = function (string $text) use ($keyword) {
        $safe = e($text);
        if (blank($keyword)) {
            return $safe;
        }
        foreach (preg_split('/\s+/', trim($keyword)) as $w) {
            if (mb_strlen($w) < 2) continue;
            $safe = preg_replace('/\b(' . preg_quote(e($w), '/') . ')/iu', '<strong>$1</strong>', $safe);
        }
        return $safe;
    };
    $bar = function (int $len, int $min, int $max) {
        $pct = min(100, round($len / $max * 100));
        $color = $len === 0 ? '#dc3232' : ($len < $min || $len > $max ? '#ee7c1b' : '#7ad03a');
        return "<div style=\"height:4px;border-radius:2px;background:#e5e7eb;margin-top:4px\"><div style=\"height:4px;border-radius:2px;width:{$pct}%;background:{$color}\"></div></div>";
    };
@endphp

<div x-data="{ mode: 'desktop' }" style="margin-bottom: .25rem">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem">
        <span style="font-weight:600;font-size:.875rem">Google preview</span>
        <span style="display:inline-flex;gap:.25rem;font-size:.75rem">
            <button type="button" x-on:click="mode='mobile'" :style="mode==='mobile' ? 'font-weight:700;text-decoration:underline' : 'opacity:.6'">Mobile</button>
            <span style="opacity:.4">/</span>
            <button type="button" x-on:click="mode='desktop'" :style="mode==='desktop' ? 'font-weight:700;text-decoration:underline' : 'opacity:.6'">Desktop</button>
        </span>
    </div>

    <div :style="mode==='mobile' ? 'max-width:400px' : 'max-width:600px'"
         style="background:#fff;border:1px solid #dadce0;border-radius:8px;padding:12px 16px;font-family:arial,sans-serif;color:#202124">
        <div style="display:flex;align-items:center;gap:10px">
            <div style="width:26px;height:26px;border-radius:50%;background:#f1f3f4;display:flex;align-items:center;justify-content:center;font-size:12px;color:#5f6368">
                {{ strtoupper(mb_substr($host, 0, 1)) ?: '•' }}
            </div>
            <div style="line-height:1.2">
                <div style="font-size:14px;color:#202124">{{ $host }}</div>
                <div style="font-size:12px;color:#4d5156">{{ $parts['scheme'] ?? 'https' }}://{{ $host }}{{ $crumbs ? ' › ' . $crumbs : '' }}</div>
            </div>
        </div>
        <div :style="mode==='mobile' ? 'font-size:18px;white-space:normal' : 'font-size:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis'"
             style="color:#1a0dab;margin-top:6px;line-height:1.3">
            {{ \Illuminate\Support\Str::limit($title, 70) ?: 'Add an SEO title' }}
        </div>
        <div style="font-size:14px;color:#4d5156;line-height:1.58;margin-top:2px">
            @if ($date)<span style="color:#70757a">{{ $date }} — </span>@endif
            {!! $highlight(\Illuminate\Support\Str::limit($description, 160)) ?: '<em>Please provide a meta description by editing the snippet below.</em>' !!}
        </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:.75rem;font-size:.75rem;opacity:.85">
        <div>SEO title: {{ $titleLen }} / 60 chars {!! $bar($titleLen, 30, 60) !!}</div>
        <div>Meta description: {{ $descLen }} / 156 chars {!! $bar($descLen, 120, 156) !!}</div>
    </div>
</div>
