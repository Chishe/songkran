"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCircle } from "react-icons/fa";
// import Line from "@/components/Line";
// import ActualGauge from "@/components/ActualGauge";

type mcItem = {
  id: number;
  date: string;
  time: string;
  item: string;
  status: string;
};

export default function Tempcondition() {
  const [mcData, setmcData] = useState<mcItem[]>([]);
  const [statusData, setStatusData] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    axios.get("/api/temp").then((res) => {
      setmcData(res.data);
    });
  }, []);

  // useEffect(() => {
  //     mcData.forEach((item) => {
  //         axios.get(`http://localhost:3000/api/status-actual/${encodeURIComponent(item.item)}`)
  //             .then((res) => {
  //                 setStatusData(prevStatusData => ({
  //                     ...prevStatusData,
  //                     [item.item]: res.data.status,
  //                 }));
  //             })
  //             .catch((error) => {
  //                 console.error(`Error fetching status for ${item.item}:`, error);
  //             });
  //     });
  // }, [mcData]);

  return (
    <div
      className="mt-23 h-[89.9vh] w-full overflow-y-auto
    [&::-webkit-scrollbar]:w-1 
               [&::-webkit-scrollbar-track]:bg-gray-100 
               [&::-webkit-scrollbar-thumb]:bg-gray-300 
               dark:[&::-webkit-scrollbar-track]:bg-[#151c34] 
               dark:[&::-webkit-scrollbar-thumb]:bg-[#aeaeb7]
    "
    >
      <table className="min-w-full table-auto border-collapse border-[#7575d1] mx-auto text-center">
        <thead>
          <tr className="border-3 border-[#7575d1]">
            <th className="py-2 px-4 text-yellow-300">Item</th>
            <th className="py-2 px-4 text-yellow-300">Zone</th>
            <th className="py-2 px-4 text-yellow-300">Graph</th>
            <th className="py-2 px-4 text-yellow-300">Actual</th>
            <th className="py-2 px-4 text-yellow-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {mcData.map((item, index) => (
            <tr key={item.id} className="border-3 border-[#7575d1]">
              {index === 0 && (
                <td
                  className="py-2 px-4 whitespace-nowrap"
                  rowSpan={mcData.length}
                >
                  FURNACE TEMP(°c)
                </td>
              )}
              <td className="py-2 px-4 whitespace-nowrap">{item.item}</td>
              <td className="py-2 px-4 whitespace-nowrap"></td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4 flex justify-center items-center">
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
