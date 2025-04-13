'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCircle } from "react-icons/fa";
import LineResult from "@/components/LineResult";

type FinItem = {
  id: number;
  date: string;
  time: string;
  item: string;
  ots: string;
  mcs: string;
  status?: number; // <-- เพิ่มไว้ใช้จาก status-result
};

export default function Fincondition() {
  const [finData, setFinData] = useState<FinItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mainRes, statusRes] = await Promise.all([
          axios.get("/api/con-fr"),
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
    `http://localhost:3000/api/fin/${encodeURIComponent(itemName)}`;

  return (
    <div className="mt-23 h-[90vh] w-full overflow-y-auto
      [&::-webkit-scrollbar]:w-1 
      [&::-webkit-scrollbar-track]:bg-gray-100 
      [&::-webkit-scrollbar-thumb]:bg-gray-300 
      dark:[&::-webkit-scrollbar-track]:bg-[#151c34] 
      dark:[&::-webkit-scrollbar-thumb]:bg-[#aeaeb7]"
    >
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
            const isNG = item.status === 1;
            const textColorClass = isNG ? "text-red-500" : "text-white";

            return (
              <tr key={item.id} className="border-2">
                <td className="py-2 px-4 text-center">{item.date}</td>
                <td className="py-2 px-4 text-center">{item.time}</td>
                <td className="py-2 px-4 text-center">{item.item}</td>
                <td className="py-2 px-4 text-center">
                  <LineResult url={getApiUrl(item.item)} />
                </td>
                <td className={`py-2 px-4 text-center ${textColorClass}`}>
                  {item.ots}
                </td>
                <td className={`py-2 px-4 text-center ${textColorClass}`}>
                  {item.mcs}
                </td>
                <td className="py-2 px-4 text-center">
                  <FaCircle className={isNG ? "text-red-500" : "text-green-500"} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
