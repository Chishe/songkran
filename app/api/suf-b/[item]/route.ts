import { NextRequest } from "next/server";

interface Params {
  item: string;
}

const ranges: Record<string, string[]> = {
  "160-170": ["Oven Station #1 Chamber #1", "Oven Station #1 Chamber #2", "Oven Station #2 Chamber #1", "Oven Station #2 Chamber #2"],
  "40-45": ["Flow meter - Hydrophilic station #1", "Flow meter - Hydrophilic station #2"],
  "10-40": ["Temp. Controller - Hydrophilic station #1", "Temp. Controller - Hydrophilic station #2"],
  "15-25": ["Flow meter - Water rinse #1", "Flow meter - Water rinse #2"],
  "250-255": ["Flow meter - Acid", "Flow meter - Conversion"],
  "30-35": ["Flow meter - Cooling station #1", "Flow meter - Cooling station #2"],
  "41-43": ["Temp. Controller - Acid"],
  "64-66": ["Temp. Controller - Conversion"],
};

function getRandomInRange(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

function findMinMax(itemname: string): [number, number] | null {
  for (const rangeKey in ranges) {
    if (ranges[rangeKey].includes(itemname)) {
      const [minStr, maxStr] = rangeKey.split("-");
      const min = parseFloat(minStr);
      const max = parseFloat(maxStr);
      return [Math.min(min, max), Math.max(min, max)];
    }
  }
  return null;
}

function generateTime(index: number): string {
  const hour = 11 + Math.floor(index / 2);
  const minute = (index * 5) % 60;
  const hh = hour.toString().padStart(2, '0');
  const mm = minute.toString().padStart(2, '0');
  return `${hh}:${mm}`;
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<Record<string, string>> }
) {
  const { item } = await params;
  const minMax = findMinMax(item);

  if (!minMax) {
    return new Response(JSON.stringify({ error: "Item not found" }), { status: 404 });
  }

  const [min, max] = minMax;

  const result = Array.from({ length: 10 }, (_, i) => ({
    itemname: item,
    time: generateTime(i),
    item: getRandomInRange(min, max),
  }));

  return new Response(JSON.stringify(result), { status: 200, headers: { "Content-Type": "application/json" } });
}
