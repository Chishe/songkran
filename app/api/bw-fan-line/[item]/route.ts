import { NextRequest } from "next/server";

interface Params {
  item: string;
}

const ranges: Record<string, string[]> = {
    "25-35": ["Blast Cooling Right Front 1", "Blast Cooling Left Front 1", "Blast Cooling Right Rear 1", "Blast Cooling Left Rear 1"],
    "50-60": ["Blast Cooling Right Front 2", "Blast Cooling Left Front 2", "Blast Cooling Right Rear 2", "Blast Cooling Left Rear 2",
        "Blast Cooling Right Front 3", "Blast Cooling Left Front 3", "Blast Cooling Right Rear 3", "Blast Cooling Left Rear 3"]
};

// ฟังก์ชันสุ่มค่าในช่วงที่กำหนด
function getRandomInRange(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

// ค้นหาขอบเขตของค่า item ที่ได้รับ
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

function generateFixedTimes(): string[] {
  return [
    "14:30", "13:54", "13:06", "12:18", "11:30",
    "10:42", "09:54", "09:06", "08:18", "07:30"
  ];
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

  const result = generateFixedTimes().map(time => ({
    itemname: item,
    time: time,
    item: getRandomInRange(min, max),
  }));

  return new Response(JSON.stringify(result), { status: 200, headers: { "Content-Type": "application/json" } });
}