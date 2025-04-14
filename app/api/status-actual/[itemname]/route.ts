import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET(req: NextRequest, { params }: { params: { itemname: string } }) {
    const { itemname } = params;

    try {
        const result = await pool.query(`
            SELECT needle, actual FROM needlevalue WHERE itemname = $1
        `, [itemname]);

        // ถ้าไม่พบข้อมูลให้ส่งข้อผิดพลาด 404
        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'Item not found' }, { status: 404 });
        }

        const { needle, actual } = result.rows[0];

        const status = needle !== actual ? 1 : 0;

        return NextResponse.json({
            itemname,
            needle,
            actual,
            status
        });
    } catch (error) {
        console.error('Error in GET request:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
