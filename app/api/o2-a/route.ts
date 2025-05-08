import { NextResponse } from 'next/server';

export async function GET() {
  const mockData = [
    { id: 1, item: "Heatingx zone 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 2, item: "Heatingx zone 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 3, item: "Keeping Zones", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 4, item: "Exit Zone", created_at: "2025-04-23T07:59:42.430Z" },
  ];

  return NextResponse.json(mockData);
}
