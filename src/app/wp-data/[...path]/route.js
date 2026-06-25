import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const ROOT_DIR = path.join(process.cwd(), 'wp-data');

function safeFilePath(segments) {
  const filePath = path.normalize(path.join(ROOT_DIR, ...segments));
  return filePath.startsWith(ROOT_DIR + path.sep) ? filePath : null;
}

export async function GET(_request, { params }) {
  const { path: requestedPath } = await params;
  const filePath = safeFilePath(requestedPath || []);

  if (!filePath || path.extname(filePath).toLowerCase() !== '.json') {
    return new NextResponse('Not found', { status: 404 });
  }

  try {
    const file = await readFile(filePath, 'utf8');

    return new NextResponse(file, {
      headers: {
        'Cache-Control': 'public, max-age=300',
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  } catch {
    return new NextResponse('Not found', { status: 404 });
  }
}
