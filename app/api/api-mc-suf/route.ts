import { NextResponse } from 'next/server';

interface GroupedItem {
  item: string;
  min: number;
  max: number;
  color: string;
  created_at: string;
}

const created_at = "2025-04-24T09:19:25.911Z";
const defaultColor = "#93ff93";

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

export async function GET() {
  const allItems: GroupedItem[] = [];

  for (const [rangeKey, items] of Object.entries(groupedItems)) {
    const [min, max] = rangeKey.split('-').map(Number);
    items.forEach(item => {
      allItems.push({ item, min, max, color: defaultColor, created_at });
    });
  }

  return NextResponse.json(allItems);
}
