import { NextResponse } from 'next/server';

const mockData = [
  {
    id: 3,
    date: "2023-07-07",
    time: "10:22:00",
    item: "Flow meter - Water rinse #1",
    status: "NG"
  },
  {
    id: 2,
    date: "2023-07-07",
    time: "10:47:00",
    item: "Oven Station #1 Chamber #2",
    status: "NG"
  },
  {
    id: 1,
    date: "2023-07-07",
    time: "11:02:00",
    item: "Oven Station #2 Chamber #2",
    status: "NG"
  }
];

export async function GET() {
  try {

    const sorted = mockData.sort((a, b) => b.id - a.id);

    return NextResponse.json(sorted);
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json({ error: 'Mock API error' }, { status: 500 });
  }
}
