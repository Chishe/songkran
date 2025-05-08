import { NextResponse } from 'next/server';

export async function GET() {
  const mockData = [
    { id: 2, item: "Degreasings Zone 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 3, item: "Degreasings Zone 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 4, item: "Degreasings Zone 3", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 5, item: "Debinders Zone 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 6, item: "Debinders Zone 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 7, item: "Debinders Zone 3", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 8, item: "Heating zone 1", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 9, item: "Heating zone 2", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 10, item: "Heating zone 3", created_at: "2025-04-23T07:59:42.430Z" },
    { id: 11, item: "Heating zone 4", created_at: "2025-04-23T07:59:42.430Z" },
  ];

  return NextResponse.json(mockData);
}
