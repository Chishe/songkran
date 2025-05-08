import { NextRequest } from "next/server";

const groupedItems: Record<string, string[]> = {
  "530-570": ["After Burner"],
  "255-295": ["Degreasing zone 1"],
  "258-298": ["Degreasing zone 2", "Degreasing zone 3"],
  "350-390": ["Debinderr Zone 1"],
  "370-410": ["Debinderr Zone 2"],
  "375-415": ["Debinderr Zone 3"],
  "455-505": ["Front Chamber"],
  "594-598": ["Heating Right ATM Zone 1", "Heating Left ATM Zone 1"],
  "600-604": ["Heating Right ATM Zone 2", "Heating Left ATM Zone 2"],
  "601-605": ["Heating Right ATM Zone 3", "Heating Left ATM Zone 3"],
  "592-596": ["Heating Right ATM Zone 4", "Heating Left ATM Zone 4"],
  "540-560": ["Keeping Heat chamber"],
  "490-497": ["Exit Chamber"],
  "1925-1945": ["Conveyer Speed (mm/min)"]
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
