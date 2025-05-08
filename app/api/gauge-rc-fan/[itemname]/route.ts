import { NextRequest } from "next/server";

const groupedItems: Record<string, string[]> = {
  "59-61": ["Degreasings Zone 1", "Degreasings Zone 2", "Degreasings Zone 3"],
  "55-60": ["Debinders Zone 1"],
  "20-25": ["Debinders Zone 2"],
  "15-20": ["Debinders Zone 3"],
  "23-28": ["Heating zone 1"],
  "40-45": ["Heating zone 2", "Heating zone 3"],
  "54-60": ["Heating zone 4"]
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

    let needle: number;
    if (decodedItemname === "After Burner") {
      needle = 560;
    } else if (decodedItemname === "Degreasing zone 1") {
      needle = 270;
    } else {
      needle = Number(((min + max) / 2).toFixed(2));
    }

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
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
