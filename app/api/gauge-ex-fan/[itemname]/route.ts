import { NextRequest } from "next/server";
import { pool } from "@/lib/db";

export async function GET(
  req: NextRequest,
  context: { params: Promise<Record<string, string>> }
) {
  const { itemname } = await context.params;
  const decodedItemname = decodeURIComponent(itemname);


  try {
    const result = await pool.query(
      `
        SELECT 
          t.item, 
          t.created_at, 
          th.min, 
          th.max, 
          tl.item AS latest_value
        FROM 
          threshold th
        LEFT JOIN 
          ex_fan_line tl ON th.item = tl.itemname
        LEFT JOIN 
          ex_fan t ON th.item = t.item
        WHERE 
          th.item = $1
        ORDER BY 
          tl.created_at DESC 
        LIMIT 1
      `,
      [decodedItemname]
    );

    if (result.rows.length === 0) {
      return new Response(
        JSON.stringify({ error: "Item not found or no data available" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    const { min, max, latest_value } = result.rows[0];

    const needle = latest_value || ((min + max) / 2);

    const responseData = {
      needle,
      actual: [min, max],
      rang: [min - 10, max + 10],
      color: "#ffc000",
      created: new Date().toISOString(),
    };

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API Error:", err);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
