import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
    try {
      const client = await pool.connect();
      const res = await client.query('SELECT * FROM history_result ORDER BY id DESC');
      client.release();
  

      const formatted = res.rows.map((row) => ({
        ...row,
        date: row.date.toISOString().split("T")[0], 
        time: row.time, 
      }));
  
      return NextResponse.json(formatted);
    } catch (error) {
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
  }
  

export async function POST(req: NextRequest) {
  try {
    const { date, time, item, status } = await req.json();

    const client = await pool.connect();
    await client.query(
      'INSERT INTO history (date, time, item, status) VALUES ($1, $2, $3, $4)',
      [date, time, item, status]
    );
    client.release();

    return NextResponse.json({ message: 'Insert success' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Insert failed' }, { status: 500 });
  }
}
