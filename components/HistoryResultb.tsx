'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCircle } from "react-icons/fa";

type HistoryItem = {
    id: number;
    date: string;
    time: string;
    item: string;
    status: string;
};

export default function HistoryResultb() {
    const [historyData, setHistoryData] = useState<HistoryItem[]>([]);

    useEffect(() => {
        axios.get("/api/history-a").then((res) => {
            setHistoryData(res.data);
        });
    }, []);

    return (
        <div className="mt-23 p-4 border-3 border-[#0070C0]">
            <h2 className="text-xl font-bold mb-4">History:</h2>
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr className="text-yellow-300">
                        <th className="py-2 px-4 text-center whitespace-nowrap">Date</th>
                        <th className="py-2 px-4 text-center whitespace-nowrap">Time</th>
                        <th className="py-2 px-4 text-center whitespace-nowrap">Item</th>
                        <th className="py-2 px-4 text-center whitespace-nowrap">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {historyData.map((item) => (
                        <tr key={item.id}>
                            <td className="py-2 px-4 whitespace-nowrap">{item.date}</td>
                            <td className="py-2 px-4 whitespace-nowrap">{item.time}</td>
                            <td className="py-2 px-4 whitespace-nowrap">{item.item}</td>
                            <td className="py-2 px-4 whitespace-nowrap">
                                {item.status === "NG" ? (
                                    <FaCircle className="text-red-500" />
                                ) : (
                                    <FaCircle className="text-green-500" />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}
