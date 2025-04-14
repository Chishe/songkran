'use client';

import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

type Props = {
  url: string;
};

const ActualGauge = ({ url }: Props) => {
  const [value, setValue] = useState(0);
  const [needleValue, setNeedleValue] = useState(0);
  const [color, setColor] = useState('#4BC0C0');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setValue(Math.min(1, Math.max(0, data.actual)));
        setNeedleValue(Math.min(1, Math.max(0, data.needle)));
        setColor(data.color || '#4BC0C0');
      } catch (error) {
        console.error('Error fetching gauge data:', error);
      }
    };

    fetchData();

    // Optional: refresh every 5 seconds
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [url]);

  const angleDeg = 180 * needleValue;
  const angleRad = (angleDeg * Math.PI) / 180;

  const needleLength = 60;
  const centerX = 80;
  const centerY = 100;

  const needleX = centerX + needleLength * Math.cos(Math.PI - angleRad);
  const needleY = centerY - needleLength * Math.sin(Math.PI - angleRad);

  const data = {
    datasets: [
      {
        data: [value, 1 - value],
        backgroundColor: [color, '#E0E0E0'],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '80%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="relative w-full max-w-[160px] aspect-[2/1]">
      <Doughnut data={data} options={options} />

      {/* เข็ม */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <line
          x1={centerX}
          y1={centerY}
          x2={needleX}
          y2={needleY}
          stroke="red"
          strokeWidth="4"
        />
        <circle cx={centerX} cy={centerY} r="4" fill="red" />
      </svg>

      {/* ตัวเลข */}
      <div className="absolute top-[77%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-base font-bold">
        {value.toFixed(2)}
      </div>

      {/* หน่วย */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-white">
        L/min
      </div>
    </div>
  );
};

export default ActualGauge;
