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

type Props = {
  url: string;
};

export default function History({ url }: Props) {
  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setHistoryData(res.data);
    });
  }, [url]);

  return (
    <div className="mt-23 p-4 border-3 border-[#0070C0] text-xs h-[89.9vh]">
      <h2 className="text-xl font-bold mb-4">History:</h2>
      <table className="w-full table-auto border-collapse text-center">
        <thead>
          <tr className="text-yellow-300">
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Time</th>
            <th className="py-2 px-4">Item</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4">{item.date}</td>
              <td className="py-2 px-4">{item.time}</td>
              <td className="py-2 px-4">{item.item}</td>
              <td className="py-2 px-4">
                <div className="flex justify-center items-center">
                  {item.status === "NG" ? (
                    <FaCircle className="text-red-500" />
                  ) : (
                    <FaCircle className="text-green-500" />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
