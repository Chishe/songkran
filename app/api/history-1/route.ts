import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();

    const query = `
WITH latest_values AS (
  SELECT DISTINCT ON (itemname)
    itemname,
    item::float AS value,
    created_at AS time
  FROM temp_line
  ORDER BY itemname, created_at DESC
)
SELECT
  t.id,
  t.item,
  t.created_at,
  th.min,
  th.max,
  lv.value,
  lv.time,
  'NG' AS status
FROM temp t
LEFT JOIN threshold th ON t.item = th.item
LEFT JOIN latest_values lv ON t.item = lv.itemname
WHERE lv.value < th.min OR lv.value > th.max
ORDER BY t.id ASC;

    `;

    const result = await client.query(query);
    client.release();

    return NextResponse.json(result.rows);
  } catch (err) {
    console.error('Database error:', err);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
