import { NextRequest } from "next/server";

interface Params {
  item: string;
}

const ranges: Record<string, string[]> = {
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

const fixedValues: Record<string, number> = {
  "After Burner": 560,
  "Degreasing zone 1": 278,
  "Degreasing zone 2": 278,
  "Degreasing zone 3": 370,
  "Debinderr Zone 1": 390,
  "Debinderr Zone 2": 395,
  "Debinderr Zone 3": 480,
  "Front Chamber": 596,
  "Heating Right ATM Zone 1": 596,
  "Heating Left ATM Zone 1": 602,
  "Heating Right ATM Zone 2": 602,
  "Heating Left ATM Zone 2": 603,
  "Heating Right ATM Zone 3": 603,
  "Heating Left ATM Zone 3": 594,
  "Heating Right ATM Zone 4": 594,
  "Heating Left ATM Zone 4": 594,
  "Keeping Heat chamber": 550,
  "Exit Chamber": 493.5,
  "Conveyer Speed (mm/min)": 1935,
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
  const times = generateFixedTimes();

  const result = times.map((time, index) => {
    const isLast = index === times.length - 1;
    let value: number;

    if (isLast && fixedValues[item] !== undefined) {
      value = fixedValues[item];
    } else {
      const adjustedMin = min + 5;
      const adjustedMax = max - 5;
      value = getRandomInRange(adjustedMin, adjustedMax);
    }

    return {
      itemname: item,
      time: time,
      item: value,
    };
  });

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
