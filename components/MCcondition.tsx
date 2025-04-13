'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCircle } from "react-icons/fa";
import Line from "@/components/Line";
import Gauge from "@/components/Gauge";

type mcItem = {
    id: number;
    date: string;
    time: string;
    item: string;
    status: string;
};

export default function MCcondition() {
    const [mcData, setmcData] = useState<mcItem[]>([]);

    useEffect(() => {
        axios.get("/api/con-mc").then((res) => {
            setmcData(res.data);
        });
    }, []);

    return (
        <div className="mt-23 h-[50vh] w-full overflow-y-auto
    [&::-webkit-scrollbar]:w-1 
               [&::-webkit-scrollbar-track]:bg-gray-100 
               [&::-webkit-scrollbar-thumb]:bg-gray-300 
               dark:[&::-webkit-scrollbar-track]:bg-[#151c34] 
               dark:[&::-webkit-scrollbar-thumb]:bg-[#aeaeb7]
    ">
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr className="text-yellow-300 border-2">
                        <th className="py-2 px-4 text-center">Date</th>
                        <th className="py-2 px-4 text-center">Time</th>
                        <th className="py-2 px-4 text-center">Item</th>
                        <th className="py-2 px-4 text-center">Graph</th>
                        <th className="py-2 px-4 text-center">Actual</th>
                        <th className="py-2 px-4 text-center">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {mcData.map((item) => (
                        <tr key={item.id} className="border-2">
                            <td className="py-2 px-4">{item.date}</td>
                            <td className="py-2 px-4">{item.time}</td>
                            <td className="py-2 px-4">{item.item}</td>
                            <td className="py-2 px-4"> <Line url={
                                item.item === "After cut air blow 1" ? "http://localhost:3000/api/after-cut-1" :
                                    item.item === "After cut air blow 2" ? "http://localhost:3000/api/after-cut-2" :
                                        item.item === "Twist cut air blow 1" ? "http://localhost:3000/api/twist-cut-1" :
                                            item.item === "Twist cut air blow 2" ? "http://localhost:3000/api/twist-cut-2" :
                                                item.item === "Tension pressure" ? "http://localhost:3000/api/tension-p" :
                                                    item.item === "Tension adjust press" ? "http://localhost:3000/api/tension-ap" :
                                                        ""
                            } /></td>
                            <td className="py-2 px-4"><Gauge /></td>
                            <td className="py-2 px-4">
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
