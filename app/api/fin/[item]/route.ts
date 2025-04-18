import { NextRequest } from 'next/server';
import { pool } from '@/lib/db';
interface Params {
    item: string;
}


export async function GET(req: NextRequest, { params }: { params: Params }) {
    const { item } = await params;

    try {
        const result = await pool.query(
            `SELECT * FROM fin_linecompo WHERE itemname = $1 ORDER BY time DESC LIMIT 10`,
            [item]
        );

        if (result.rows.length === 0) {
            return new Response(JSON.stringify({ error: `No data found for item: ${item}` }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const data = result.rows.map((row: any) => ({
            itemname: `${row.itemname}`,
            time: `${row.time}`,
            item: row.item,
        }));

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error('Database error:', err);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
