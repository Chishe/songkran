// import { NextRequest, NextResponse } from 'next/server';
// import { pool } from '@/lib/db';

// export async function GET() {
//   try {
//     const client = await pool.connect();

//     const res = await client.query(`
//       SELECT item,min,max,color,created_at FROM Threshold
//       ORDER BY id DESC 
//     `);

//     client.release();

//     return NextResponse.json(res.rows);
//   } catch (error) {
//     console.error('Database error:', error);
//     return NextResponse.json({ error: 'Database error' }, { status: 500 });
//   }
// }
import { NextResponse } from 'next/server';

export async function GET() {
  const mockData = [
    {
      "item": "Conveyer Speed (mm/min)",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Exit Chamber",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Keeping Heat chamber",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Keeping Zone",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Exit Zone",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Heating zone 4",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Heating zone 3",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Heating zone 2",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Heating zone 1",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Heating Zone 3,4",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Heating Zone 1,2",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Front Chamber (Exit)",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Front Chamber (Entrance)",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Front Chamber",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling Left Rear 3",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling Left Rear 2",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling Left Rear 1",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling Left Front 3",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling Left Front 2",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling Left Front 1",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling Right Rear 3",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling Right Rear 2",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling Right Rear 1",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling Right Front 3",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling Right Front 2",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling Right Front 1",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling 3",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling 2",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Blast Cooling 1",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Heating Left ATM Zone 4",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Heating Right ATM Zone 4",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Heating Left ATM Zone 3",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Heating Right ATM Zone 3",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Heating Left ATM Zone 2",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Heating Right ATM Zone 2",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Heating Left ATM Zone 1",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Heating Right ATM Zone 1",
        "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Debinder Zone 3",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Debinder Zone 2",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Debinder Zone 1",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Degreasing Zone 3",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Degreasing Zone 2",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Degreasing Zone 1",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "After Burner",
      "min": 590,
      "max": 600,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446600-3482",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-1700",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG447610-8901",
      "min": 0.18,
      "max": 0.28,
      "color": "#969696",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-8940",
      "min": 0.18,
      "max": 0.28,
      "color": "#99d266",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446600-3941",
      "min": 0.18,
      "max": 0.28,
      "color": "#00b0ef",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG447610-0791",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffcc",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-6190",
      "min": 0.18,
      "max": 0.28,
      "color": "#ff66cc",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446600-3832",
      "min": 0.18,
      "max": 0.28,
      "color": "#00b0ef",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG447610-1881",
      "min": 0.18,
      "max": 0.28,
      "color": "#7575d1",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG447610-2941",
      "min": 0.18,
      "max": 0.28,
      "color": "#93ff93",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG447610-9250",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffc000",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446600-7511",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG447610-8610",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446600-4431",
      "min": 0.18,
      "max": 0.28,
      "color": "#969696",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-4440",
      "min": 0.18,
      "max": 0.28,
      "color": "#99d266",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446600-4311",
      "min": 0.18,
      "max": 0.28,
      "color": "#00b0ef",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG447610-4780",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffcc",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-0751",
      "min": 0.18,
      "max": 0.28,
      "color": "#ff66cc",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-3520",
      "min": 0.18,
      "max": 0.28,
      "color": "#00b0ef",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-0140",
      "min": 0.18,
      "max": 0.28,
      "color": "#7575d1",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-7530",
      "min": 0.18,
      "max": 0.28,
      "color": "#93ff93",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-1750",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffc000",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446600-7181",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-7560",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-6330",
      "min": 0.18,
      "max": 0.28,
      "color": "#969696",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446600-0582",
      "min": 0.18,
      "max": 0.28,
      "color": "#99d266",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-6530",
      "min": 0.18,
      "max": 0.28,
      "color": "#00b0ef",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-0600",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffcc",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-0620",
      "min": 0.18,
      "max": 0.28,
      "color": "#ff66cc",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG447610-8601",
      "min": 0.18,
      "max": 0.28,
      "color": "#00b0ef",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG447610-9650",
      "min": 0.18,
      "max": 0.28,
      "color": "#7575d1",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-4000",
      "min": 0.18,
      "max": 0.28,
      "color": "#93ff93",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-9880",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffc000",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-4630",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-4450",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-3930",
      "min": 0.18,
      "max": 0.28,
      "color": "#969696",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-6770",
      "min": 0.18,
      "max": 0.28,
      "color": "#99d266",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG447610-4850",
      "min": 0.18,
      "max": 0.28,
      "color": "#00b0ef",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-2020",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffcc",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-6840",
      "min": 0.18,
      "max": 0.28,
      "color": "#ff66cc",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-6800",
      "min": 0.18,
      "max": 0.28,
      "color": "#00b0ef",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-0050",
      "min": 0.18,
      "max": 0.28,
      "color": "#7575d1",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-8170",
      "min": 0.18,
      "max": 0.28,
      "color": "#93ff93",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-1050",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffc000",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-4410",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446620-2320",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffff",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG447610-6740",
      "min": 0.18,
      "max": 0.28,
      "color": "#969696",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-6090",
      "min": 0.18,
      "max": 0.28,
      "color": "#99d266",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG447610-9220",
      "min": 0.18,
      "max": 0.28,
      "color": "#00b0ef",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG447610-9201",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffcc",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "TG446610-4961",
      "min": 0.18,
      "max": 0.28,
      "color": "#ff66cc",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Tension adjust press",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffffcc",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Tension pressure",
      "min": 0.18,
      "max": 0.28,
      "color": "#ff66cc",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Twist cut air blow 2",
      "min": 0.18,
      "max": 0.28,
      "color": "#00b0ef",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "Twist cut air blow 1",
      "min": 0.18,
      "max": 0.28,
      "color": "#7575d1",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "After cut air blow 2",
      "min": 0.18,
      "max": 0.28,
      "color": "#93ff93",
      "created_at": "2025-04-24T09:19:25.911Z"
  },
  {
      "item": "After cut air blow 1",
      "min": 0.18,
      "max": 0.28,
      "color": "#ffc000",
      "created_at": "2025-04-24T09:19:25.911Z"
  }
  ];

  return NextResponse.json(mockData);
}
