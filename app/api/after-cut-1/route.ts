// import { NextRequest, NextResponse } from 'next/server';
// import { pool } from '@/lib/db';

// export async function GET() {
//   try {
//     const client = await pool.connect();

//     const res = await client.query(`
//       SELECT * FROM after_cut_1 
//       ORDER BY id DESC 
//       LIMIT 10
//     `);

//     client.release();

//     const records = res.rows.map(row => {
//       const randomItem = (Math.random() * (0.26 - 0.2) + 0.2).toFixed(2);
//       return {
//         ...row,
//         item: parseFloat(randomItem),
//       };
//     });

//     return NextResponse.json(records);
//   } catch (error) {
//     console.error('Database error:', error);
//     return NextResponse.json({ error: 'Database error' }, { status: 500 });
//   }
// }
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const mockData = [
      { id: 10, itemname: "After cut air blow 1", time: "11.10" },
      { id: 9, itemname: "After cut air blow 1", time: "11.09" },
      { id: 8, itemname: "After cut air blow 1", time: "11.08" },
      { id: 7, itemname: "After cut air blow 1", time: "11.07" },
      { id: 6, itemname: "After cut air blow 1", time: "11.06" },
      { id: 5, itemname: "After cut air blow 1", time: "11.05" },
      { id: 4, itemname: "After cut air blow 1", time: "11.04" },
      { id: 3, itemname: "After cut air blow 1", time: "11.03" },
      { id: 2, itemname: "After cut air blow 1", time: "11.02" },
      { id: 1, itemname: "After cut air blow 1", time: "11.01" },
    ];

    const mockWithItems = mockData.map((entry) => ({
      ...entry,
      item: parseFloat((Math.random() * (0.26 - 0.2) + 0.2).toFixed(2)),
      created_at: "2025-04-23T07:59:42.430Z",
    }));

    return NextResponse.json(mockWithItems);
  } catch (error) {
    console.error('Mock error:', error);
    return NextResponse.json({ error: 'Failed to load mock data' }, { status: 500 });
  }
}
