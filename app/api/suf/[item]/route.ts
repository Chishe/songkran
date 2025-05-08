import { NextRequest } from "next/server";

interface Params {
  item: string;
}

const ranges: Record<string, string[]> = {
  "0-6": ["Station #1 Hydrophilic film block on Fin", "Station #1 Hydrophilic film block on in louver (Count)", "Station #1 Hydrophilic Total film block", "Station #2 Hydrophilic film block on Fin", "Station #2 Hydrophilic film block on in louver (Count)", "Station #2 Hydrophilic Total film block"],
  "150-165": ["Station #1 Hydrophilic Top", "Station #1 Hydrophilic Center", "Station #1 Hydrophilic Bottom", "Station #1 Hydrophilic Average", "Station #2 Hydrophilic Top", "Station #2 Hydrophilic Center", "Station #2 Hydrophilic Bottom", "Station #2 Hydrophilic Average"],
  "0-20": ["Station #1 Top - V", "Station #1 Bottom - V", "Station #2 Top - V", "Station #2 Bottom - V"],
  "40-300": ["Station #1 Top - Total", "Station #1 Bottom - Total", "Station #2 Top - Total", "Station #2 Bottom - Total"],
  "0-10": ["Station #1 Average contact angle", "Station #2 Average contact angle"],
  "5.4-6.2": ["Brix (%) Station #1", "Brix (%) Station #2"],
  "21-39": ["Action - Chemical Pump (%)", "Chemical Pump (%)"],
  "0-18":["Station #1 Hydrophilic film block on in louver","Station #2 Hydrophilic film block on in louver"],
  "13-16.5": ["Total acid", "TA (ml)"],
  "35-65": ["Action - Water Pump (%)"],
  "79-9.3": ["Reaction Product (ml)"],
  "1.3-2.4": ["Free Acid (ml)"],
  "7.9-9.3": ["RP (ml)"],
  "60-100": ["Zr (ppm)"],
  "220-300": ["V (ppm)"],
  "61-100": ["Ti (ppm)"],
  "3.4-3.8": ["pH"],
  "49-91": ["Water pump (%)"],
  "16-24": ["Turbidity"]
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
  _req: NextRequest,
  { params }: { params: Params }
) {
  const { item } = params;
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
