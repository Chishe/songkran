import { NextRequest } from 'next/server';
import { pool } from '@/lib/db';

export async function GET(
  req: NextRequest,
  { params }: { params: { itemname: string } }
) {
  const { itemname } = await params;

  const decodedItemname = decodeURIComponent(itemname);

  try {
    const result = await pool.query(
      `SELECT needle, actual, color, created_at FROM needlevalue WHERE itemname = $1 ORDER BY created_at DESC LIMIT 1`,
      [decodedItemname]
    );

    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Item not found' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(result.rows[0]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('API Error:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
