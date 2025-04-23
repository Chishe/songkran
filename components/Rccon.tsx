"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { FaCircle } from "react-icons/fa";
import LineResult from "@/components/LineResult";
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
  const pathname = usePathname();
  const router = useRouter();


  const path = router.pathname || "";
  let currentIndex = 0;

  const match = path.match(/document-record(?:-(\d+))?/);
  if (match && match[1]) {
    currentIndex = parseInt(match[1], 10);
  }

  const maxIndex = 5;
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : 0;
  const nextIndex = currentIndex < maxIndex ? currentIndex + 1 : currentIndex;

  const base = "/document-record"; 
  const prevHref = prevIndex === 0 ? base : `${base}-${prevIndex}`;
  const nextHref = nextIndex === 0 ? base : `${base}-${nextIndex}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mainRes, statusRes] = await Promise.all([
          axios.get(dataUrl),
          axios.get(onoffUrlBase),
        ]);

        setmcData(mainRes.data);

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
  }, [dataUrl, onoffUrlBase]);

  useEffect(() => {
    mcData.forEach((item) => {
      axios
        .get(`${statusUrlBase}${encodeURIComponent(item.item)}`)
        .then((res) => {
          setStatusData((prev) => ({
            ...prev,
            [item.item]: res.data.status,
          }));
        })
        .catch((error) => {
          console.error(`Error fetching status for ${item.item}:`, error);
        });
    });
  }, [mcData, statusUrlBase]);

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
            <th className="py-2 px-4 text-yellow-300">Zone</th>
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
                {index === 0 && (
                  <td
                    className="py-2 px-4 whitespace-nowrap"
                    rowSpan={mcData.length}
                  >
                    FURNACE TEMP(°c)
                  </td>
                )}
                <td className="py-2 px-4 whitespace-nowrap">{item.item}</td>
                <td className="py-2 px-4">
                  <LineResult url={getGraphUrl(item.item)} />
                </td>
                <td className="py-2 px-4">
                  <ActualGauge url={getGaugeUrl(item.item)} />
                </td>
                <td className="py-2 px-4 flex justify-center items-center">
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

      <div className="flex justify-end gap-2 p-2">
        <Link
          href={prevHref}
          className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          <span className="ml-1 font-bold text-lg">Back</span>
        </Link>
        <Link
          href={nextHref}
          className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50"
        >
          <span className="mr-1 font-bold text-lg">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
