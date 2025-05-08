'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCircle } from "react-icons/fa";
import LineSuf from "@/components/LineSuf";

type FinItem = {
    id: number;
    date: string;
    time: string;
    item: string;
    status?: number;
};

export default function Surfacecondition() {
    const [finData, setFinData] = useState<FinItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [mainRes, statusRes] = await Promise.all([
                    axios.get("/api/con-suf"),
                    axios.get("/api/status-result"),
                ]);

                const merged = mainRes.data.map((item: FinItem) => {
                    const statusItem = statusRes.data.find(
                        (s: any) => s.itemname === item.item
                    );
                    return {
                        ...item,
                        status: statusItem?.status ?? 0,
                    };
                });

                setFinData(merged);
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };

        fetchData();
    }, []);

    const getApiUrl = (itemName: string) =>
        `/api/suf/${encodeURIComponent(itemName)}`;

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="mt-23 h-[90vh] w-full overflow-y-auto
      [&::-webkit-scrollbar]:w-1 
      [&::-webkit-scrollbar-track]:bg-gray-100 
      [&::-webkit-scrollbar-thumb]:bg-gray-300 
      dark:[&::-webkit-scrollbar-track]:bg-[#151c34] 
      dark:[&::-webkit-scrollbar-thumb]:bg-[#aeaeb7] max-w-[95%]"
            >
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr className="border-2">
                            <th className="py-2 px-4 text-center text-yellow-300">Date</th>
                            <th className="py-2 px-4 text-center text-yellow-300">Time</th>
                            <th className="py-2 px-4 text-center text-yellow-300">Item</th>
                            <th className="py-2 px-4 text-center text-yellow-300">Graph</th>
                            <th className="py-2 px-4 text-center text-yellow-300">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finData.map((item) => {
                            const isNG = item.status === 1;
                            const textColorClass = isNG ? "text-red-500" : "text-white";

                            return (
                                <tr key={item.id} className="border-2">
                                    <td className="py-2 px-4 text-center">{item.date}</td>
                                    <td className="py-2 px-4 text-center">{item.time}</td>
                                    <td className="py-2 px-4 text-center">{item.item}</td>
                                    <td className="py-2 px-4 text-center">
                                        <LineSuf url={getApiUrl(item.item)} />
                                    </td>
                                    <td className="pl-6 px-4 text-center text-4xl">
                                        <FaCircle className={isNG ? "text-red-500" : "text-green-500"} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
