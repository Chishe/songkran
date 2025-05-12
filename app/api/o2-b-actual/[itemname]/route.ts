import { NextRequest } from 'next/server';

interface Params {
  item: string;
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<Record<string, string>> }
) {
  const { itemname } = await context.params;
  const decodedItem = decodeURIComponent(itemname);
  const getRandomItemValue = () => {
    return parseFloat((591 + Math.random() * 4).toFixed(2));
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
