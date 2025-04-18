import { NextRequest } from 'next/server';
import { pool } from '@/lib/db';

export async function GET(
  req: NextRequest,
  { params }: { params: { itemname: string } }
) {
  const decodedItemname = decodeURIComponent(params.itemname);

  try {
const result = await pool.query(
  `SELECT 
    n.needle AS needle,
    ARRAY[t.min, t.max] AS actual,
    g.rang,
    g.color,
    g.created_at
  FROM gaugeset g
  JOIN threshold t ON g.itemname = t.item
  JOIN (
    SELECT DISTINCT ON (itemname) itemname, needle AS needle
    FROM needleValue
    WHERE itemname = $1
    ORDER BY itemname, created_at DESC
  ) n ON g.itemname = n.itemname
  WHERE g.itemname = $1
  ORDER BY g.created_at DESC
  LIMIT 1;`,
  [decodedItemname]
);



    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Item not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const row = result.rows[0];

    const responseData = {
      needle: row.needle,
      actual: row.actual,
      rang: row.rang,
      color: row.color,
      created: row.created_at,
    };

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('API Error:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
