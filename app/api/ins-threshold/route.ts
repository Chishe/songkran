import { pool } from '@/lib/db';
import { NextResponse } from 'next/server';

const groupedItems: Record<string, string[]> = {
    "530-570": ["After Burner"],
    "255-295": ["Degreasing zone 1"],
    "258-298": ["Degreasing zone 2", "Degreasing zone 3"],
    "350-390": ["Debinderr zone 1"],
    "370-410": ["Debinderr zone 2"],
    "375-415": ["Debinderr zone 3"],
    "455-505": ["Front Chamber"],
    "594-598": ["Heating Right ATM Zone 1", "Heating Left ATM Zone 1"],
    "600-604": ["Heating Right ATM Zone 2", "Heating Left ATM Zone 2"],
    "601-605": ["Heating Right ATM Zone 3", "Heating Left ATM Zone 3"],
    "592-596": ["Heating Right ATM Zone 4", "Heating Left ATM Zone 4"],
    "540-560": ["Keeping Heat chamber"],
    "490-497": ["Exit Chamber"],
    "1925-1945": ["Conveyer Speed (mm/min)"],
    "59-61": ["Degreasings Zone 1", "Degreasings Zone 2", "Degreasings Zone 3"],
    "55-60": ["Debinders Zone 1"],
    "20-25": ["Debinders Zone 2"],
    "15-20": ["Debinders Zone 3"],
    "23-28": ["Heating zone 1"],
    "40-45": ["Heating zone 2", "Heating zone 3"],
    "54-60": ["Heating zone 4"],
    "53-60": ["Blast Cooling 1", "Blast Cooling 2", "Blast Cooling 3"],
    "25-35": ["Blast Cooling Right Front 1", "Blast Cooling Left Front 1", "Blast Cooling Right Rear 1", "Blast Cooling Left Rear 1"],
    "50-60": ["Blast Cooling Right Front 2", "Blast Cooling Left Front 2", "Blast Cooling Right Rear 2", "Blast Cooling Left Rear 2",
      "Blast Cooling Right Front 3", "Blast Cooling Left Front 3", "Blast Cooling Right Rear 3", "Blast Cooling Left Rear 3"],
    "0-20": ["Front Chamber (Entrance)", "Front Chamber (Exit)", "Heating zone 1,2", "Heating Zone 3,4"],
    "130-170": ["Keeping Zone"],
    "1-101": ["Heatingx zone 1",
      "Heatingx zone 2",
      "Heatingx zone 3",
      "Heatingx zone 4",
      "Keepingx Zone",
      "Exit Zone", "Keeping Zones", "Exit Zone"
    ],
    "0.18-0.28": [
      "TG446600-3482", "TG446620-1700", "TG447610-8901", "TG446620-8940",
      "TG446600-3941", "TG447610-0791", "TG446610-6190", "TG446600-3832",
      "TG447610-1881", "TG447610-2941", "TG447610-9250", "TG446600-7511",
      "TG447610-8610", "TG446600-4431", "TG446610-4440", "TG446600-4311",
      "TG447610-4780", "TG446610-0751", "TG446620-3520", "TG446620-0140",
      "TG446620-7530", "TG446620-1750", "TG446600-7181", "TG446620-7560",
      "TG446610-6330", "TG446600-0582", "TG446620-6530", "TG446620-0600",
      "TG446620-0620", "TG447610-8601", "TG447610-9650", "TG446610-4000",
      "TG446610-9880", "TG446610-4630", "TG446610-4450", "TG446610-3930",
      "TG446610-6770", "TG447610-4850", "TG446620-2020", "TG446620-6840",
      "TG446610-6800", "TG446620-0050", "TG446610-8170", "TG446610-1050",
      "TG446620-4410", "TG446620-2320", "TG447610-6740", "TG446610-6090",
      "TG447610-9220", "TG447610-9201", "TG446610-4961", "Tension adjust press",
      "Tension pressure", "Twist cut air blow 2", "Twist cut air blow 1",
      "After cut air blow 2", "After cut air blow 1"
    ]
};
const defaultColor = "#93ff93";

export async function POST() {
  const client = await pool.connect();

  try {
    for (const [rangeKey, items] of Object.entries(groupedItems)) {
      const [min, max] = rangeKey.split('-').map(Number);

      for (const item of items) {
        await client.query(
          `INSERT INTO threshold (item, min, max, color)
           VALUES ($1, $2, $3, $4)
           ON CONFLICT (item) DO NOTHING`,
          [item, min, max, defaultColor]
        );
      }
    }

    return NextResponse.json({ message: 'Seeded successfully' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to seed data' }, { status: 500 });
  } finally {
    client.release();
  }
}