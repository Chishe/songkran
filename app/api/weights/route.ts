// import { NextRequest, NextResponse } from 'next/server';
// import { pool } from '@/lib/db';

// export async function GET(req: NextRequest) {
//     try {
//         const result = await pool.query(`
//             SELECT * FROM weights
//             WHERE item_name IN ('Weight A', 'Weight B')
//             ORDER BY time DESC
//             LIMIT 2;  -- ดึงข้อมูลทั้งหมดที่ต้องการ 2 แถว
//         `);

//         const formatted = result.rows.map((row) => ({
//             ...row,
//             date: row.date.toISOString().split("T")[0],
//             time: row.time, 
//         }));

//         return NextResponse.json(formatted);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
//     }
// }
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const mockData = [
            {
                id: 1,
                date: "2023-08-06",
                time: "11:15:00",
                item_name: "Weight A",
                items: [400]
            },
            {
                id: 2,
                date: "2023-08-06",
                time: "11:15:00",
                item_name: "Weight B",
                items: [1100]
            }
        ];
        const formatted = mockData.map((row) => ({
            ...row,
            date: row.date, 
            time: row.time,
        }));

        return NextResponse.json(formatted);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
