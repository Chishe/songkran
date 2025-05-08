
import { NextRequest } from "next/server";

const groupedItems: Record<string, string[]> = {
    "25-35": ["Blast Cooling Right Front 1", "Blast Cooling Left Front 1", "Blast Cooling Right Rear 1", "Blast Cooling Left Rear 1"],
    "50-60": ["Blast Cooling Right Front 2", "Blast Cooling Left Front 2", "Blast Cooling Right Rear 2", "Blast Cooling Left Rear 2",
        "Blast Cooling Right Front 3", "Blast Cooling Left Front 3", "Blast Cooling Right Rear 3", "Blast Cooling Left Rear 3"]
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