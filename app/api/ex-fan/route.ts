// import { NextRequest, NextResponse } from "next/server";
// import { pool } from "@/lib/db";

// export async function GET() {
//   try {
//     const client = await pool.connect();
//     const res = await client.query(`
//       SELECT * FROM public.bz_ex_fan
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
    { id: 1, item: "Blast Cooling 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 2, item: "Blast Cooling 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 3, item: "Blast Cooling 3", created_at: "2025-04-23T07:59:42.430Z" },
  ];

  return NextResponse.json(mockData);
}
