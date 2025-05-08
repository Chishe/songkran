// import { NextRequest, NextResponse } from 'next/server';
// import { pool } from '@/lib/db';

// export async function GET(req: NextRequest) {
//   try {
//     const query = `
//             SELECT 
//         f.id,
//         f.itemname,
//         f.item,
//         t.min,
//         t.max,
//         CASE 
//           WHEN f.item >= t.min AND f.item <= t.max THEN 0
//           ELSE 1
//         END AS status
//       FROM 
//         temp_line f
//       JOIN 
//         threshold t 
//       ON 
//         f.itemname = t.item
//       ORDER BY 
//         f.id ASC;
//     `;

//     const result = await pool.query(query);
//     return NextResponse.json(result.rows);
//   } catch (err) {
//     console.error('Error in /api/line-status:', err);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }
// app/api/line-status/route.ts
import { NextRequest, NextResponse } from 'next/server';

const getRandomItemValue = () => {
  return parseFloat((541 + Math.random() * 6).toFixed(2));
};

const mockData = [
  { id: 1, itemname: "After Burner", min: 540, max: 560 },
  { id: 2, itemname: "Degreasing Zone 1", min: 540, max: 560 },
  { id: 3, itemname: "Degreasing Zone 2", min: 540, max: 560 },
  { id: 4, itemname: "Degreasing Zone 3", min: 540, max: 560 },
  { id: 5, itemname: "Debinder Zone 1", min: 540, max: 560 },
  { id: 6, itemname: "Debinder Zone 2", min: 540, max: 560 },
  { id: 7, itemname: "Debinder Zone 3", min: 540, max: 560 },
  { id: 8, itemname: "Front Chamber", min: 540, max: 560 },
  { id: 9, itemname: "Heating Right ATM Zone 1", min: 540, max: 560 },
  { id: 10, itemname: "Heating Right ATM Zone 2", min: 540, max: 560 },
  { id: 11, itemname: "Heating Right ATM Zone 3", min: 540, max: 560 },
  { id: 12, itemname: "Heating Right ATM Zone 4", min: 540, max: 560 },
  { id: 13, itemname: "Heating Left ATM Zone 1", min: 540, max: 560 },
  { id: 14, itemname: "Heating Left ATM Zone 2", min: 540, max: 560 },
  { id: 15, itemname: "Heating Left ATM Zone 3", min: 540, max: 560 },
  { id: 16, itemname: "Heating Left ATM Zone 4", min: 540, max: 560 },
  { id: 17, itemname: "Keeping Heat chamber", min: 540, max: 560 },
  { id: 18, itemname: "Exit Chamber", min: 540, max: 560 },
  { id: 19, itemname: "Conveyer Speed (mm/min)", min: 540, max: 560 },
];

export async function GET(req: NextRequest) {
  const dataWithStatus = mockData.map((entry) => {
    const item = getRandomItemValue();
    const status = item >= entry.min && item <= entry.max ? 0 : 1;
    return {
      ...entry,
      item,
      status,
    };
  });

  return NextResponse.json(dataWithStatus);
}
