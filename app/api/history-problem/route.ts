import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT * FROM history_problems ORDER BY id DESC');
    client.release();
    return NextResponse.json(res.rows);
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { date, time, item, min, max, actual, status } = data;

    const client = await pool.connect();
    await client.query(
      `INSERT INTO history_problems (date, time, item, min, max, actual, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [date, time, item, min, max, actual, status]
    );
    client.release();
    return NextResponse.json({ message: 'Inserted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Insert failed' }, { status: 500 });
  }
}
