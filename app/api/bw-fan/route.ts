// import { NextRequest, NextResponse } from "next/server";
// import { pool } from "@/lib/db";

// export async function GET() {
//   try {
//     const client = await pool.connect();
//     const res = await client.query(`
//       SELECT * FROM public.bz_bw_fan
//       ORDER BY id ASC
//     `);
//     client.release();
//     return NextResponse.json(res.rows);
//   } catch (error) {
//     return NextResponse.json({ error: "Database error" }, { status: 500 });
//   }
// }
import { NextResponse } from 'next/server';

export async function GET() {
  const mockData = [
    { id: 1, item: "Blast Cooling Right Front 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 2, item: "Blast Cooling Left Front 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 3, item: "Blast Cooling Right Rear 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 4, item: "Blast Cooling Left Rear 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 5, item: "Blast Cooling Right Front 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 6, item: "Blast Cooling Left Front 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 7, item: "Blast Cooling Right Rear 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 8, item: "Blast Cooling Left Rear 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 9, item: "Blast Cooling Right Front 3", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 10, item: "Blast Cooling Left Front 3", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 11, item: "Blast Cooling Right Rear 3", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 12, item: "Blast Cooling Left Rear 3", created_at: "2025-04-23T07:59:42.430Z" },
  ];

  return NextResponse.json(mockData);
}
