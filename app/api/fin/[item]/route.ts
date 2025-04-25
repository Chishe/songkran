import { NextRequest } from 'next/server';

interface Params {
  item: string;
}

const itemList = [
  "TG446610-4961", "TG447610-9201", "TG447610-9220", "TG446610-6090",
  "TG447610-6740", "TG446620-2320", "TG446620-4410", "TG446610-1050",
  "TG446610-8170", "TG446620-0050", "TG446610-6800", "TG446620-6840",
  "TG446620-2020", "TG447610-4850", "TG446610-6770", "TG446610-3930",
  "TG446610-4450", "TG446610-4630", "TG446610-9880", "TG446610-4000",
  "TG447610-9650", "TG447610-8601", "TG446620-0620", "TG446620-0600",
  "TG446620-6530", "TG446600-0582", "TG446610-6330", "TG446620-7560",
  "TG446600-7181", "TG446620-1750", "TG446620-7530", "TG446620-0140",
  "TG446620-3520", "TG446610-0751", "TG447610-4780", "TG446600-4311",
  "TG446610-4440", "TG446600-4431", "TG447610-8610", "TG446600-7511",
  "TG447610-9250", "TG447610-2941", "TG447610-1881", "TG446600-3832",
  "TG446610-6190", "TG447610-0791", "TG446600-3941", "TG446620-8940",
  "TG447610-8901", "TG446620-1700", "TG446600-3482",
];

function getRandomItemValue(): number {
  return parseFloat((Math.random() * (0.26 - 0.2) + 0.2).toFixed(2));
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Params }
) {
  const { item } = params;

  if (!itemList.includes(item)) {
    return new Response(
      JSON.stringify({ error: `Item "${item}" not found in itemList` }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const mockData = Array.from({ length: 10 }, () => ({
    itemname: item,
    time: "11.10",
    item: getRandomItemValue(),
  }));

  return new Response(JSON.stringify(mockData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
