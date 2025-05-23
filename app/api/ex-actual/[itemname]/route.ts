import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<Record<string, string>> }
) {
  // ต้องรอให้ params เป็น Promise เสร็จ
  const { itemname } = await params; // ใช้ await params แทน context.params
  const decodedItemname = decodeURIComponent(itemname);

  try {
    const result = await pool.query(
      `
      SELECT 
        n.id,
        n.itemname,
        n.item,
        t.min,
        t.max,
        CASE 
          WHEN n.item >= t.min AND n.item <= t.max THEN 0
          ELSE 1
        END AS status
      FROM 
        ex_fan_line n
      JOIN 
        threshold t 
      ON 
        n.itemname = t.item
      WHERE 
        n.itemname = $1
      ORDER BY 
        n.id DESC
      LIMIT 1;
      `,
      [decodedItemname]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    const { item: needle, min, max, status } = result.rows[0];

    return NextResponse.json({
      itemname: decodedItemname, // ใช้ decodedItemname ที่แปลงแล้ว
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
