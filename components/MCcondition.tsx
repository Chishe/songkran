'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCircle } from "react-icons/fa";
import Line from "@/components/Line";
import ActualGauge from "@/components/ActualGauge";

type mcItem = {
    id: number;
    date: string;
    time: string;
    item: string;
    status: string;  // เปลี่ยนเป็น string หรือ number ตามที่คุณต้องการ
};

export default function MCcondition() {
    const [mcData, setmcData] = useState<mcItem[]>([]);
    const [statusData, setStatusData] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        axios.get("/api/con-mc").then((res) => {
            setmcData(res.data);
        });
    }, []);

    useEffect(() => {
        mcData.forEach((item) => {
            axios.get(`http://localhost:3000/api/status-actual/${encodeURIComponent(item.item)}`)
                .then((res) => {
                    setStatusData(prevStatusData => ({
                        ...prevStatusData,
                        [item.item]: res.data.status,
                    }));
                })
                .catch((error) => {
                    console.error(`Error fetching status for ${item.item}:`, error);
                });
        });
    }, [mcData]);

    return (
        <div className="mt-23 h-[71vh] w-full overflow-y-auto
    [&::-webkit-scrollbar]:w-1 
               [&::-webkit-scrollbar-track]:bg-gray-100 
               [&::-webkit-scrollbar-thumb]:bg-gray-300 
               dark:[&::-webkit-scrollbar-track]:bg-[#151c34] 
               dark:[&::-webkit-scrollbar-thumb]:bg-[#aeaeb7]
    ">
            <table className="min-w-full border-[#7575d1] table-auto border-collapse">
                <thead>
                    <tr className="border-3 border-[#7575d1]">
                        <th className="py-2 px-4 text-center text-yellow-300">Date</th>
                        <th className="py-2 px-4 text-center text-yellow-300">Time</th>
                        <th className="py-2 px-4 text-center text-yellow-300">Item</th>
                        <th className="py-2 px-4 text-center text-yellow-300">Graph</th>
                        <th className="py-2 px-4 text-center text-yellow-300">Actual</th>
                        <th className="py-2 px-4 text-center text-yellow-300">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {mcData.map((item) => (
                        <tr key={item.id} className="border-3 border-[#7575d1]">
                            <td className="py-2 px-4 whitespace-nowrap">{item.date}</td>
                            <td className="py-2 px-4 whitespace-nowrap">{item.time}</td>
                            <td className="py-2 px-4 whitespace-nowrap">{item.item}</td>
                            <td className="py-2 px-4 whitespace-nowrap">
                                <Line url={
                                    item.item === "After cut air blow 1" ? "http://localhost:3000/api/after-cut-1" :
                                    item.item === "After cut air blow 2" ? "http://localhost:3000/api/after-cut-2" :
                                    item.item === "Twist cut air blow 1" ? "http://localhost:3000/api/twist-cut-1" :
                                    item.item === "Twist cut air blow 2" ? "http://localhost:3000/api/twist-cut-2" :
                                    item.item === "Tension pressure" ? "http://localhost:3000/api/tension-p" :
                                    item.item === "Tension adjust press" ? "http://localhost:3000/api/tension-ap" : ""
                                } />
                            </td>
                            <td className="py-2 px-4">
                                <ActualGauge url={`http://localhost:3000/api/needle-value/${encodeURIComponent(item.item)}`} />
                            </td>
                            <td className="py-2 px-4">
                                {statusData[item.item] === 1 ? (
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
