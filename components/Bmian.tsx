"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCircle } from "react-icons/fa";
import LineB from "@/components/LineB";
import ActualGauge from "@/components/ActualGauge";

type mcItem = {
  id: number;
  date: string;
  time: string;
  item: string;
  status: string;
};

type FinItem = {
  id: number;
  item: string;
  status?: number;
};

type Props = {
  dataUrl: string;
  statusUrlBase: string;
  graphUrlBase: string;
  gaugeUrlBase: string;
  onoffUrlBase: string;
};

export default function Amain({
  dataUrl,
  statusUrlBase,
  graphUrlBase,
  gaugeUrlBase,
  onoffUrlBase,
}: Props) {
  const [mcData, setmcData] = useState<mcItem[]>([]);
  const [statusData, setStatusData] = useState<{ [key: string]: number }>({});
  const [finData, setFinData] = useState<FinItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mainRes, statusRes] = await Promise.all([
          axios.get(dataUrl),
          axios.get(onoffUrlBase),
        ]);

        setmcData(mainRes.data);
        const statusMap = statusRes.data.reduce((acc: any, curr: any) => {
          acc[curr.itemname] = curr.status;
          return acc;
        }, {});
        setStatusData(statusMap);

        const merged = mainRes.data.map((item: FinItem) => ({
          ...item,
          status: statusMap[item.item] ?? 0,
        }));

        setFinData(merged);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, [dataUrl, onoffUrlBase]);

  const getGraphUrl = (itemName: string) =>
    `${graphUrlBase}${encodeURIComponent(itemName)}`;
  const getGaugeUrl = (itemName: string) =>
    `${gaugeUrlBase}${encodeURIComponent(itemName)}`;

  return (
    <div
      className="mt-23 h-[89.9vh] w-full overflow-y-auto
        [&::-webkit-scrollbar]:w-1 
        [&::-webkit-scrollbar-track]:bg-gray-100 
        [&::-webkit-scrollbar-thumb]:bg-gray-300 
        dark:[&::-webkit-scrollbar-track]:bg-[#151c34] 
        dark:[&::-webkit-scrollbar-thumb]:bg-[#aeaeb7]"
    >
      <table className="min-w-full table-auto border-collapse border-[#7575d1] mx-auto text-center">
        <thead>
          <tr className="border-3 border-[#7575d1]">
            <th className="py-2 px-4 text-yellow-300">Item</th>
            <th className="py-2 px-4 text-yellow-300">Graph</th>
            <th className="py-2 px-4 text-yellow-300">Actual</th>
            <th className="py-2 px-4 text-yellow-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {mcData.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-10">
                No data available
              </td>
            </tr>
          ) : (
            mcData.map((item, index) => (
              <tr key={item.id} className="border-3 border-[#7575d1]">
                <td className="py-2 px-4 whitespace-nowrap">{item.item}</td>
                <td className="py-2 px-4">
                  <LineB url={getGraphUrl(item.item)} />
                </td>
                <td className="py-2 px-4">
                  <ActualGauge url={getGaugeUrl(item.item)} />
                </td>
                <td className="py-2 px-4 flex justify-center items-center text-4xl">
                  {statusData[item.item] === 1 ? (
                    <FaCircle className="text-red-500" />
                  ) : (
                    <FaCircle className="text-green-500" />
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
