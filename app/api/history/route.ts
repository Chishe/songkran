// import { NextResponse } from 'next/server';
// import { pool } from '@/lib/db';

// export async function GET() {
//     try {
//       const client = await pool.connect();
//       const res = await client.query('SELECT * FROM history ORDER BY id DESC');
//       client.release();
  

//       const formatted = res.rows.map((row) => ({
//         ...row,
//         date: row.date.toISOString().split("T")[0], 
//         time: row.time, 
//       }));
  
//       return NextResponse.json(formatted);
//     } catch (error) {
//       return NextResponse.json({ error: 'Database error' }, { status: 500 });
//     }
//   }
  


// const mockData = [
//   {
//     id: 7,
//     date: "2023-07-04",
//     time: "15:11:00",
//     item: "Twist cut air blow 1",
//     status: "NG"
//   },
//   {
//     id: 6,
//     date: "2023-07-05",
//     time: "08:39:00",
//     item: "Twist cut air blow 1",
//     status: "NG"
//   },
//   {
//     id: 5,
//     date: "2023-07-06",
//     time: "21:15:00",
//     item: "Twist cut air blow 1",
//     status: "NG"
//   },
//   {
//     id: 4,
//     date: "2023-07-06",
//     time: "23:59:00",
//     item: "After cut air blow 1",
//     status: "NG"
//   },
//   {
//     id: 3,
//     date: "2023-07-07",
//     time: "10:22:00",
//     item: "Twist cut air blow 1",
//     status: "NG"
//   },
//   {
//     id: 2,
//     date: "2023-07-07",
//     time: "10:47:00",
//     item: "After cut air blow 2",
//     status: "NG"
//   },
//   {
//     id: 1,
//     date: "2023-07-07",
//     time: "11:02:00",
//     item: "After cut air blow 1",
//     status: "NG"
//   }
// ];

import { NextResponse } from 'next/server';

const mockData = [
  {
    id: 3,
    date: "2023-07-07",
    time: "10:22:00",
    item: "Twist cut air blow 1",
    status: "NG"
  },
  {
    id: 2,
    date: "2023-07-07",
    time: "10:47:00",
    item: "After cut air blow 2",
    status: "NG"
  },
  {
    id: 1,
    date: "2023-07-07",
    time: "11:02:00",
    item: "After cut air blow 1",
    status: "NG"
  }
];

export async function GET() {
  try {

    const sorted = mockData.sort((a, b) => b.id - a.id);

    return NextResponse.json(sorted);
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json({ error: 'Mock API error' }, { status: 500 });
  }
}
