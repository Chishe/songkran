import { NextResponse } from 'next/server';


function getRandomFloat(min: number, max: number): number {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

export async function GET() {
  const now = new Date();
  const date = now.toISOString().split("T")[0];
  const time = now.toTimeString().split(" ")[0];
  const itemList = [
    "Temp. Controller - Acid", "Temp. Controller - Conversion", "Temp. Controller - Hydrophilic station #1",
    "Temp. Controller - Hydrophilic station #2", "Flow meter - Acid", "Flow meter - Conversion", "Flow meter - Hydrophilic station #1",
    "Flow meter - Hydrophilic station #2", "Flow meter - Water rinse #1", "Flow meter - Water rinse #2", "Oven Station #1 Chamber #1",
    "Oven Station #1 Chamber #2", "Oven Station #2 Chamber #1", "Oven Station #2 Chamber #2", "Flow meter - Cooling station #1","Flow meter - Cooling station #2"];
  const randomItems = itemList
    .sort(() => 0.5 - Math.random())
    .slice(0, 15);
  
  const mockData = randomItems.map((item, index) => ({
    id: index + 1,
    item,
    date,
    time,
    created_at: now.toISOString(),
  }));

  return NextResponse.json(mockData);
}

