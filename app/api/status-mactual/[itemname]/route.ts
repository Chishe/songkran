import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET(
  req: NextRequest,
  context: { params: Record<string, string> }
) {
  const itemname = decodeURIComponent(context.params.itemname);
  console.log("Requesting status for:", itemname);

  try {
    const result = await pool.query(
      `
SELECT 
    combined.id,
    combined.itemname,
    combined.item,
    t.min,
    t.max,
    CASE 
        WHEN combined.item >= t.min AND combined.item <= t.max THEN 0
        ELSE 1
    END AS status
FROM (
    SELECT id, itemname, item, created_at FROM after_cut_1
    UNION ALL
    SELECT id, itemname, item, created_at FROM after_cut_2
    UNION ALL
    SELECT id, itemname, item, created_at FROM twist_cut_1
    UNION ALL
    SELECT id, itemname, item, created_at FROM twist_cut_2
    UNION ALL
    SELECT id, itemname, item, created_at FROM tension_p
    UNION ALL
    SELECT id, itemname, item, created_at FROM tension_ap
) AS combined
JOIN threshold t 
    ON combined.itemname = t.item
WHERE combined.itemname = $1
ORDER BY combined.itemname, combined.created_at DESC
LIMIT 1;

      `,
      [itemname]
    );

    if (result.rows.length === 0) {
      console.warn(`No data found for item: ${itemname}`);
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    const { item, min, max, status } = result.rows[0];

    return NextResponse.json({
      itemname,
      item,
      min,
      max,
      status,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
