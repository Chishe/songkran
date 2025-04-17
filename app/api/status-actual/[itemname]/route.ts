import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET(
  req: NextRequest,
  { params }: { params: { itemname: string } }
) {
  const { itemname } = params;

  try {
    const result = await pool.query(
      `
      SELECT 
        n.id,
        n.itemname,
        n.needle,
        t.min,
        t.max,
        CASE 
          WHEN n.needle >= t.min AND n.needle <= t.max THEN 0
          ELSE 1
        END AS status
      FROM 
        needlevalue n
      JOIN 
        threshold t 
      ON 
        n.itemname = t.item
      WHERE 
        n.itemname = $1
      ORDER BY 
        n.id ASC;
      `,
      [itemname]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    const { needle, min, max, status } = result.rows[0];

    return NextResponse.json({
      itemname,
      needle,
      min,
      max,
      status
    });
  } catch (error) {
    console.error('Error in GET request:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
