// import { NextRequest, NextResponse } from "next/server";
// import { pool } from "@/lib/db";

// export async function GET() {
//   try {
//     const client = await pool.connect();
//     const res = await client.query(`
//       SELECT * FROM public.bz_temp
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
    { id: 1, item: "After Burner", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 2, item: "Degreasing Zone 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 3, item: "Degreasing Zone 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 4, item: "Degreasing Zone 3", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 5, item: "Debinder Zone 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 6, item: "Debinder Zone 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 7, item: "Debinder Zone 3", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 8, item: "Front Chamber", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 9, item: "Heating Right ATM Zone 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 10, item: "Heating Left ATM Zone 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 11, item: "Heating Right ATM Zone 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 12, item: "Heating Left ATM Zone 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 13, item: "Heating Right ATM Zone 3", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 14, item: "Heating Left ATM Zone 3", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 15, item: "Heating Right ATM Zone 4", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 16, item: "Heating Left ATM Zone 4", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 17, item: "Keeping Heat chamber", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 18, item: "Exit Chamber", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 19, item: "Conveyer Speed (mm/min)", created_at: "2025-04-23T07:59:42.430Z" }
  ];

  return NextResponse.json(mockData);
}
