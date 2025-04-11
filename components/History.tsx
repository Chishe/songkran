import React from "react";
import { FaCircle } from "react-icons/fa";

const historyData = [
  {
    id: 1,
    date: "08/07/23",
    time: "11:15",
    item: "After cut air blow 1",
    status: "NG",
  },
  {
    id: 2,
    date: "08/07/23",
    time: "12:15",
    item: "Twist cut air blow 1",
    status: "OK",
  },
];

export default function History() {
  return (
    <div className="p-4 border-4 border-[#0070C0] h-full">
      <h2 className="text-xl font-bold mb-4">History:</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="text-yellow-300">
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Time</th>
            <th className="py-2 px-4 text-left">Item</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2 px-4">{item.date}</td>
              <td className="py-2 px-4">{item.time}</td>
              <td className="py-2 px-4">{item.item}</td>
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
