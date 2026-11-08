/**
 * Webhook the Laravel admin panel calls after every blog or menu save so the
 * ISR cache is dropped and the next visitor sees the change immediately.
 *
 * Protected by the REVALIDATE_TOKEN header. When REVALIDATE_TOKEN is not set
 * (local development) the token check is skipped.
 *
 *   curl -X POST http://localhost:3000/api/revalidate -H "x-revalidate-token: <token>"
 */

import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const expected = process.env.REVALIDATE_TOKEN;
  if (expected && req.headers.get('x-revalidate-token') !== expected) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  revalidateTag('blog-posts');
  revalidateTag('header-menu');

  return NextResponse.json({ revalidated: true, tags: ['blog-posts', 'header-menu'], now: Date.now() });
}

export async function GET() {
  return NextResponse.json({ status: 'ok', hint: 'POST to this endpoint to revalidate the blog cache' });
}
