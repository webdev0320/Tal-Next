import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const ROOT_DIR = path.join(process.cwd(), 'wp-content');

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
};

function safeFilePath(segments) {
  const filePath = path.normalize(path.join(ROOT_DIR, ...segments));
  return filePath.startsWith(ROOT_DIR + path.sep) ? filePath : null;
}

export async function GET(_request, { params }) {
  const { path: requestedPath } = await params;
  const filePath = safeFilePath(requestedPath || []);

  if (!filePath) {
    return new NextResponse('Not found', { status: 404 });
  }

  try {
    const file = await readFile(filePath);
    const contentType = MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream';

    return new NextResponse(file, {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Type': contentType,
      },
    });
  } catch {
    return new NextResponse('Not found', { status: 404 });
  }
}
