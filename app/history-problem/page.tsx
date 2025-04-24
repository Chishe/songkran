'use client';
import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";


type HistoryItem = {
    id: string;
    date: string;
    time: string;
    item: string;
    min: number;
    max: number;
    actual: number;
    status: string;
};


export default function HistoryProblem() {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        fetch('/api/history-problem')
            .then((res) => res.json())
            .then((data: HistoryItem[]) => setHistory(data))
            .catch((err) => console.error("Failed to load history:", err));
    }, []);



    return (
        <div className="p-4 h-[86vh] mt-24">
            <h1 className="text-4xl font-bold mb-4 text-center text-yellow-500">
                FIN FORMING 11.5D NO.6
            </h1>
            <h2 className="text-6xl font-bold mb-4">History:</h2>

            <div className="overflow-y-auto max-h-[80vh]">
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr className="text-2xl text-yellow-300 border-b border-[#CCCCFF]">
                            <th className="py-2 px-4 text-center">Date</th>
                            <th className="py-2 px-4 text-center">Time</th>
                            <th className="py-2 px-4 text-center">Item</th>
                            <th className="py-2 px-4 text-center">Min</th>
                            <th className="py-2 px-4 text-center">Max</th>
                            <th className="py-2 px-4 text-center">Actual</th>
                            <th className="py-2 px-4 text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item, index) => (
                            <tr
                                key={item.id}
                                className={`${index === history.length - 1
                                    ? "border-b border-[#CCCCFF]"
                                    : ""
                                    }`}
                            >
                                <td className="py-2 px-4 text-center">{item.date}</td>
                                <td className="py-2 px-4 text-center">{item.time}</td>
                                <td className="py-2 px-4 text-center">{item.item}</td>
                                <td className="py-2 px-4 text-center">{item.min}</td>
                                <td className="py-2 px-4 text-center">{item.max}</td>
                                <td
                                    className={`py-2 px-4 text-center ${item.actual < item.min || item.actual > item.max ? 'text-red-500' : ''
                                        }`}
                                >
                                    {item.actual}
                                </td>

                                <td className="py-2 px-4 flex justify-center items-center">
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
        </div>
    );
}
