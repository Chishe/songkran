// import { NextRequest, NextResponse } from "next/server";
// import { pool } from "@/lib/db";

// export async function GET() {
//   try {
//     const client = await pool.connect();
//     const res = await client.query(`
//       SELECT * FROM bz_rc_fan
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
    { id: 2, item: "Degreasing Zone 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 3, item: "Degreasing Zone 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 4, item: "Degreasing Zone 3", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 5, item: "Debinder zone 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 6, item: "Debinder zone 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 7, item: "Debinder zone 3", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 8, item: "Heating zone 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 9, item: "Heating zone 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 10, item: "Heating zone 3", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 11, item: "Heating zone 4", created_at: "2025-04-23T07:59:42.430Z" },
  ];

  return NextResponse.json(mockData);
}
