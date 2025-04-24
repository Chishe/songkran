import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();

    const res = await client.query(`
      SELECT * FROM after_cut_1 
      ORDER BY id DESC 
      LIMIT 10
    `);

    client.release();

    const records = res.rows.map(row => {
      const randomItem = (Math.random() * (0.26 - 0.2) + 0.2).toFixed(2);
      return {
        ...row,
        item: parseFloat(randomItem),
      };
    });

    return NextResponse.json(records);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
