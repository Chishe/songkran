// import { NextRequest, NextResponse } from 'next/server';
// import { pool } from '@/lib/db';

// export async function GET() {
//   try {
//     const client = await pool.connect();

//     const res = await client.query(`
//       SELECT * FROM tension_ap
//       ORDER BY id DESC 
//       LIMIT 10
//     `);

//     client.release();

//     return NextResponse.json(res.rows);
//   } catch (error) {
//     console.error('Database error:', error);
//     return NextResponse.json({ error: 'Database error' }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const mockData = [
    {
      id: 10,
      itemname: "Tension adjust press",
      item: 0.2,
      time: "11.10",
      created_at: "2025-04-23T07:59:42.430Z"
    },
    {
      id: 9,
      itemname: "Tension adjust press",
      item: 0.2,
      time: "11.09",
      created_at: "2025-04-23T07:59:42.430Z"
    },
    {
      id: 8,
      itemname: "Tension adjust press",
      item: 0.2,
      time: "11.08",
      created_at: "2025-04-23T07:59:42.430Z"
    },
    {
      id: 7,
      itemname: "Tension adjust press",
      item: 0.2,
      time: "11.07",
      created_at: "2025-04-23T07:59:42.430Z"
    },
    {
      id: 6,
      itemname: "Tension adjust press",
      item: 0.2,
      time: "11.06",
      created_at: "2025-04-23T07:59:42.430Z"
    },
    {
      id: 5,
      itemname: "Tension adjust press",
      item: 0.2,
      time: "11.05",
      created_at: "2025-04-23T07:59:42.430Z"
    },
    {
      id: 4,
      itemname: "Tension adjust press",
      item: 0.2,
      time: "11.04",
      created_at: "2025-04-23T07:59:42.430Z"
    },
    {
      id: 3,
      itemname: "Tension adjust press",
      item: 0.22,
      time: "11.03",
      created_at: "2025-04-23T07:59:42.430Z"
    },
    {
      id: 2,
      itemname: "Tension adjust press",
      item: 0.24,
      time: "11.02",
      created_at: "2025-04-23T07:59:42.430Z"
    },
    {
      id: 1,
      itemname: "Tension adjust press",
      item: 0.26,
      time: "11.01",
      created_at: "2025-04-23T07:59:42.430Z"
    }
  ];

  return NextResponse.json(mockData);
}
