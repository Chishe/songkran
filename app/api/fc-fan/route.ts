import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET() {
  try {
    const client = await pool.connect();
    const res = await client.query(`
      SELECT * FROM public.bz_rc_fan
      ORDER BY id ASC
    `);
    client.release();
    return NextResponse.json(res.rows);
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
