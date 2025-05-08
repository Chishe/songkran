import { NextRequest } from "next/server";

const groupedItems: Record<string, string[]> = {
  "160-170": ["Oven Station #1 Chamber #1", "Oven Station #1 Chamber #2", "Oven Station #2 Chamber #1", "Oven Station #2 Chamber #2"],
  "40-45": ["Flow meter - Hydrophilic station #1", "Flow meter - Hydrophilic station #2"],
  "10-40": ["Temp. Controller - Hydrophilic station #1", "Temp. Controller - Hydrophilic station #2"],
  "15-25": ["Flow meter - Water rinse #1", "Flow meter - Water rinse #2"],
  "250-255": ["Flow meter - Acid", "Flow meter - Conversion"],
  "30-35": ["Flow meter - Cooling station #1", "Flow meter - Cooling station #2"],
  "41-43": ["Temp. Controller - Acid"],
  "64-66": ["Temp. Controller - Conversion"],
};

function findMinMax(itemname: string): [number, number] | null {
  for (const [rangeKey, itemList] of Object.entries(groupedItems)) {
    if (itemList.includes(itemname)) {
      const [min, max] = rangeKey.split("-").map(Number);
      return [min, max];
    }
  }
  return null;
}

function getRandomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { itemname: string } }
) {
  const decodedItemname = decodeURIComponent(params.itemname);

  try {
    const minMax = findMinMax(decodedItemname);

    if (!minMax) {
      return new Response(JSON.stringify({ error: "Item not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const [min, max] = minMax;

    const responseData = {
      needle: Number(getRandomInRange(min, max).toFixed(2)),  // ปัดเศษทศนิยม 2 ตำแหน่ง
      actual: [min, max],
      rang: [min - 1, max + 1],
      color: "#ffc000",
      created: "2025-04-23T07:59:42.430Z",
    };

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
