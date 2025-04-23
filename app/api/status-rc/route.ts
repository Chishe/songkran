import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const query = `
            SELECT 
        f.id,
        f.itemname,
        f.item,
        t.min,
        t.max,
        CASE 
          WHEN f.item >= t.min AND f.item <= t.max THEN 0
          ELSE 1
        END AS status
      FROM 
        rc_fan_line f
      JOIN 
        threshold t 
      ON 
        f.itemname = t.item
      ORDER BY 
        f.id ASC;
    `;

    const result = await pool.query(query);
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error('Error in /api/line-status:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
