import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();

    const res = await client.query(`
      SELECT * FROM tension_p
      ORDER BY id DESC 
      LIMIT 10
    `);

    client.release();

    return NextResponse.json(res.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
