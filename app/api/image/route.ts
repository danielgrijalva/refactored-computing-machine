import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename) {
    return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
  }

  const filePath = path.join('D:\\Photos\\Edited', filename);
  
  try {
    const data = await fs.promises.readFile(filePath);
    return new NextResponse(data, {
      headers: {
        'Content-Type': 'image/png', // Adjust the MIME type as needed
      },
    });
  } catch (err) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
