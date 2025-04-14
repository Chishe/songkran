import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET(req: NextRequest) {
    try {
        const result = await pool.query(`
            SELECT * FROM weights
            WHERE item_name IN ('Weight A', 'Weight B')
            ORDER BY time DESC
            LIMIT 2;  -- ดึงข้อมูลทั้งหมดที่ต้องการ 2 แถว
        `);

        const formatted = result.rows.map((row) => ({
            ...row,
            date: row.date.toISOString().split("T")[0],
            time: row.time, 
        }));

        return NextResponse.json(formatted);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
