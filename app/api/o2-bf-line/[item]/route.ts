// import { NextRequest } from 'next/server';
// import { pool } from '@/lib/db';

// interface Params {
//   item: string;
// }

// export async function GET(req: NextRequest, { params }: { params: Params }) {
//   const { item } = params;
//   const decodedItem = decodeURIComponent(item);

//   try {
//     const result = await pool.query(
//       `SELECT itemname,time,item FROM o2_bf_line WHERE itemname = $1 ORDER BY time DESC LIMIT 10`,
//       [decodedItem]
//     );

//     if (result.rows.length === 0) {
//       return new Response(JSON.stringify({ error: `No data found for item: ${decodedItem}` }), {
//         status: 404,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     }

//     const data = result.rows.map((row: any) => ({
//       itemname: row.itemname,
//       time: row.time,
//       item: row.item,
//     }));

//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (err) {
//     console.error('Database error:', err);
//     return new Response(JSON.stringify({ error: 'Internal server error' }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }
import { NextRequest } from 'next/server';

interface Params {
  item: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { item } = params;
  const decodedItem = decodeURIComponent(item);

  const getRandomItemValue = () => {
    return parseFloat((591 + Math.random() * 4).toFixed(2)); // ค่าสุ่มระหว่าง 591 - 595
  };

  const mockData = Array.from({ length: 10 }, (_, i) => ({
    itemname: decodedItem,
    time: `11.${(i + 1).toString().padStart(2, '0')}`,
    item: getRandomItemValue(),
  }));

  return new Response(JSON.stringify(mockData), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
