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
  "0-6": ["Station #1 Hydrophilic film block on Fin", "Station #1 Hydrophilic film block on in louver (Count)", "Station #1 Hydrophilic Total film block", "Station #2 Hydrophilic film block on Fin", "Station #2 Hydrophilic film block on in louver (Count)", "Station #2 Hydrophilic Total film block"],
  "0-18": ["Station #1 Hydrophilic film block on in louver","Station #2 Hydrophilic film block on in louver"],
  "150-165": ["Station #1 Hydrophilic Top", "Station #1 Hydrophilic Center", "Station #1 Hydrophilic Bottom", "Station #1 Hydrophilic Average", "Station #2 Hydrophilic Top", "Station #2 Hydrophilic Center", "Station #2 Hydrophilic Bottom", "Station #2 Hydrophilic Average"],
  "0-20": ["Station #1 Top - V", "Station #1 Bottom - V", "Station #2 Top - V", "Station #2 Bottom - V"],
  "40-300": ["Station #1 Top - Total", "Station #1 Bottom - Total", "Station #2 Top - Total", "Station #2 Bottom - Total"],
  "0-10": ["Station #1 Average contact angle", "Station #2 Average contact angle"],
  "5.4-6.2": ["Brix (%) Station #1", "Brix (%) Station #2"],
  "21-39": ["Action - Chemical Pump (%)", "Chemical Pump (%)"],
  "13-16.5": ["Total acid", "TA (ml)"],
  "35-65": ["Action - Water Pump (%)"],
  "79-9.3": ["Reaction Product (ml)"],
  "1.3-2.4": ["Free Acid (ml)"],
  "7.9-9.3": ["RP (ml)"],
  "60-100": ["Zr (ppm)"],
  "220-300": ["V (ppm)"],
  "6-100": ["Ti (ppm)"],
  "3.4-3.8": ["pH"],
  "49-91": ["Water pump (%)"],
  "16-24": ["Turbidity"],
  "0-12": ["Action - Chemical Pump (%)"],
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
