import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<Record<string, string>> }
) {
  const { itemname } = await context.params;
  const decodedItemname = decodeURIComponent(itemname);

  try {
    const responseData = {
      needle: 0.26,
      actual: [0.18, 0.28],
      rang: [0, 0.5],
      color: "#ffc000",
      created: "2025-04-23T07:59:42.430Z"
    };

    if (!responseData) {
      return new Response(JSON.stringify({ error: "Item not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API Error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
