import { pool } from '@/lib/db';
import { NextRequest } from 'next/server';

interface Params {
  item: string;
}

export async function GET(_req: NextRequest, { params }: { params: { item: string } }) {
  const { item } = params;
  const query = `
  SELECT itemname, item, time
  FROM temp_line
  WHERE itemname = $1
  ORDER BY created_at DESC
  LIMIT 10;
`;

try {
  const result = await pool.query(query, [item]);
  const data = result.rows;

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
} catch (error) {
  console.error("Error querying the database:", error);
  return new Response(JSON.stringify({ error: "Failed to fetch data from the database" }), {
    status: 500,
  });
}
}