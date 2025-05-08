// import { NextRequest, NextResponse } from 'next/server';
// import { pool } from '@/lib/db';

// export async function GET(
//   req: NextRequest,
//   context: { params: Record<string, string> }
// ) {
//   const itemname = decodeURIComponent(context.params.itemname);
//   console.log('Requesting status for:', itemname);

//   try {
//     const result = await pool.query(
//       `
//       SELECT 
//         n.id,
//         n.itemname,
//         n.item,
//         t.min,
//         t.max,
//         CASE 
//           WHEN n.item >= t.min AND n.item <= t.max THEN 0
//           ELSE 1
//         END AS status
//       FROM 
//         o2_bf_line n
//       JOIN 
//         threshold t 
//       ON 
//         n.itemname = t.item
//       WHERE 
//         n.itemname = $1
//       ORDER BY 
//         n.id DESC
//       LIMIT 1;
//       `,
//       [itemname]
//     );

//     if (result.rows.length === 0) {
//       return NextResponse.json({ error: 'Item not found' }, { status: 404 });
//     }

//     const { needle, min, max, status } = result.rows[0];

//     return NextResponse.json({
//       itemname,
//       needle,
//       min,
//       max,
//       status
//     });
//   } catch (error) {
//     console.error('Error in GET request:', error);
//     return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
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
