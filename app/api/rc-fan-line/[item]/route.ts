import { NextRequest } from "next/server";

interface Params {
  item: string;
}

const ranges: Record<string, string[]> = {
    "59-61": ["Degreasings Zone 1", "Degreasings Zone 2", "Degreasings Zone 3"],
    "55-60": ["Debinders Zone 1"],
    "20-25": ["Debinders Zone 2"],
    "15-20": ["Debinders Zone 3"],
    "23-28": ["Heating zone 1"],
    "40-45": ["Heating zone 2", "Heating zone 3"],
    "54-60": ["Heating zone 4"]
};


const fixedValues: Record<string, number> = {
  "Degreasings Zone 1": 60,
  "Degreasings Zone 2": 60,
  "Degreasings Zone 3": 60,
  "Debinders 1": 57.50,
  "Debinders 2": 22.50,
  "Debinders 3": 17.50,
  "Heating zone 1": 25.50,
  "Heating zone 2": 42.50,
  "Heating zone 3": 42.50,
  "Heating zone 4": 57,
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
      const adjustedMin = min-0.1;
      const adjustedMax = max+0.1;
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