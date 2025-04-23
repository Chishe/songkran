import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
    try {
      const client = await pool.connect();
      const res = await client.query('SELECT * FROM history ORDER BY id DESC');
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
  
