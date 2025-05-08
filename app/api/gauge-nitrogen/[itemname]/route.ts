
import { NextRequest } from "next/server";

const groupedItems: Record<string, string[]> = {
    "0-20": ["Front Chamber (Entrance)","Front Chamber (Exit)","Heating zone 1,2","Heating Zone 3,4"],
    "130-170": ["Keeping Zone"]
};

function findMinMax(itemname: string): [number, number] | null {
    for (const [rangeKey, itemList] of Object.entries(groupedItems)) {
        if (itemList.includes(itemname)) {
            const [min, max] = rangeKey.split("-").map(Number);
            return [min, max];
        }
    }
    return null;
}

function getRandomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export async function GET(
    req: NextRequest,
    { params }: { params: { itemname: string } }
) {
    const decodedItemname = decodeURIComponent(params.itemname);

    try {
        const minMax = findMinMax(decodedItemname);

        if (!minMax) {
            return new Response(JSON.stringify({ error: "Item not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        const [min, max] = minMax;

        const responseData = {
            needle: Number(getRandomInRange(min, max).toFixed(2)),
            actual: [min, max],
            rang: [min - 1, max + 1],
            color: "#ffc000",
            created: "2025-04-23T07:59:42.430Z",
        };

        return new Response(JSON.stringify(responseData), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error("API Error:", err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}