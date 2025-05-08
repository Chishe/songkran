import { NextResponse } from 'next/server';


function getRandomFloat(min: number, max: number): number {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

export async function GET() {
  const now = new Date();
  const date = now.toISOString().split("T")[0];
  const time = now.toTimeString().split(" ")[0];
  const itemList = [
    "Total acid", "Action - Chemical Pump (%)", "Action - Water Pump (%)", "Reaction Product (ml)",
    "Free Acid (ml)", "TA (ml)", "RP (ml)", "Zr (ppm)",
    "V (ppm)", "Ti (ppm)", "pH", "Chemical Pump (%)",
    "Water pump (%)", "Turbidity", "Brix (%) Station #1",
    "Brix (%) Station #2", "Station #1 Top - V", "Station #1 Top - Total", "Station #1 Bottom - V",
    "Station #1 Bottom - Total", "Station #2 Top - V", "Station #2 Top - Total", "Station #2 Bottom - V",
    "Station #2 Bottom - Total", "Station #1 Hydrophilic Top", "Station #1 Hydrophilic Center", "Station #1 Hydrophilic Bottom",
    "Station #1 Hydrophilic Average", "Station #1 Hydrophilic film block on Fin", "Station #1 Hydrophilic film block on in louver", "Station #1 Hydrophilic film block on in louver (Count)",
    "Station #2 Hydrophilic Average", "Station #2 Hydrophilic Top", "Station #2 Hydrophilic Center", "Station #2 Hydrophilic Bottom",
    "Station #1 Average contact angle", "Station #2 Average contact angle", "Station #1 Hydrophilic Total film block", "Station #2 Hydrophilic film block on Fin",
    "Station #2 Hydrophilic film block on in louver", "Station #2 Hydrophilic film block on in louver (Count)", "Station #2 Hydrophilic Total film block",
  ];
  const randomItems = itemList
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);
  
  const mockData = randomItems.map((item, index) => ({
    id: index + 1,
    item,
    date,
    time,
    created_at: now.toISOString(),
  }));

  return NextResponse.json(mockData);
}

