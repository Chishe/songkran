'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCircle } from 'react-icons/fa';

// Define the type for the row data
interface RowData {
  date: string;
  time: string;
  item_name: string;
  items: number[]; // Array of weights that this row contains
}

const WeightTable = () => {
  const weightValues = [200, 400, 800, 1100, 1600, 2200, 2800];

  // Set rowData state to be of type RowData[]
  const [rowData, setRowData] = useState<RowData[]>([]);

  useEffect(() => {
    axios.get('/api/weights')
      .then(response => {
        setRowData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="mt-3 overflow-x-auto">
      <table className="border-collapse border-3 border-[#7575d1] h-full w-full text-sm text-left">
        <tbody>
          {rowData.map((row, i) => (
            <React.Fragment key={i}>
              <tr>
                <td className="border-3 border-[#7575d1] p-2 align-middle" rowSpan={2}>
                  {row.date}
                </td>
                <td className="border-3 border-[#7575d1] p-2 align-middle" rowSpan={2}>
                  {row.time}
                </td>
                <td className="border-3 border-[#7575d1] p-2 align-middle" rowSpan={2}>
                  {row.item_name}
                </td>
                {weightValues.map((weight, j) => (
                  <td key={j} className="border-3 border-[#7575d1] p-2 text-center h-10">
                    {row.items.includes(weight) && (
                      <FaCircle className="text-green-500 inline-block" />
                    )}
                  </td>
                ))}
              </tr>

              <tr>
                {weightValues.map((weight, j) => (
                  <td key={j} className="border-3 border-[#7575d1] p-2 text-center font-semibold text-yellow-500">
                    {weight}g
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeightTable;
