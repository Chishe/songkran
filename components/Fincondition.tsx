'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCircle } from "react-icons/fa";
import LineResult from "@/components/LineResult";

type finItem = {
    id: number;
    date: string;
    time: string;
    item: string;
    ots: string;
    mcs: string;
    status: string;
};

export default function Fincondition() {
    const [finData, setfinData] = useState<finItem[]>([]);

    useEffect(() => {
        axios.get("/api/con-fr").then((res) => {
            setfinData(res.data);
        });
    }, []);

    return (
        <div className="mt-23 h-[90vh] w-full overflow-y-auto
    [&::-webkit-scrollbar]:w-1 
               [&::-webkit-scrollbar-track]:bg-gray-100 
               [&::-webkit-scrollbar-thumb]:bg-gray-300 
               dark:[&::-webkit-scrollbar-track]:bg-[#151c34] 
               dark:[&::-webkit-scrollbar-thumb]:bg-[#aeaeb7]
    ">
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr className="border-2">
                        <th className="py-2 px-4 text-center">Date</th>
                        <th className="py-2 px-4 text-center">Time</th>
                        <th className="py-2 px-4 text-center">Item</th>
                        <th className="py-2 px-4 text-center">Graph</th>
                        <th className="py-2 px-4 text-center" colSpan={2}>Latest</th>
                        <th className="py-2 px-4 text-center">Status</th>
                    </tr>
                    <tr className="border-2">
                        <th colSpan={4}></th>
                        <th className="py-2 px-4 text-center">Operation side</th>
                        <th className="py-2 px-4 text-center">Machine side</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {finData.map((item) => {
                        const getApiUrl = (itemName) => `http://localhost:3000/api/fin/${encodeURIComponent(itemName)}`;
                        return (
                            <tr key={item.id} className="border-2">
                                <td className="py-2 px-4">{item.date}</td>
                                <td className="py-2 px-4">{item.time}</td>
                                <td className="py-2 px-4">{item.item}</td>
                                <td className="py-2 px-4">
                                    <LineResult url={getApiUrl(item.item)} />
                                </td>
                                <td className="py-2 px-4">{item.ots}</td>
                                <td className="py-2 px-4">{item.mcs}</td>
                                <td className="py-2 px-4 text-center">
                                    {item.status === "NG" ? (
                                        <FaCircle className="text-red-500" />
                                    ) : (
                                        <FaCircle className="text-green-500" />
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    );
}
