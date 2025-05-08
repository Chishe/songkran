'use client';

import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

type Props = {
  url: string;
};

const ActualGauge = ({ url }: Props) => {
  const [needleValue, setNeedleValue] = useState(0);
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(1);
  const [actualRange, setActualRange] = useState<[number, number]>([0, 0]);
  const [color, setColor] = useState('#4BC0C0');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
  
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
  
        const data = await res.json();
        console.log('Fetched Data:', data);
  
        const min = data.rang?.[0] ?? 0;
        const max = data.rang?.[1] ?? 1;
        setRangeMin(min);
        setRangeMax(max);
  
        if (Array.isArray(data.actual) && data.actual.length === 2) {
          setActualRange([data.actual[0], data.actual[1]]);
        }
  
        const needle = typeof data.needle === 'number' ? data.needle : 0;
        setNeedleValue(Math.min(max, Math.max(min, needle)));
  
        setColor(data.color || '#4BC0C0');
      } catch (error) {
        console.error('Error fetching gauge data:', error);
        setError('Error loading data');
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [url]);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  const highlightStart = actualRange[0];
  const highlightEnd = actualRange[1];

  const data = {
    datasets: [
      {
        data: [
          highlightStart - rangeMin,
          highlightEnd - highlightStart + 1,
          rangeMax - highlightEnd,
        ],
        backgroundColor: ['#E0E0E0', color, '#E0E0E0'],
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


  const angle = Math.PI * (1 - (needleValue - rangeMin) / (rangeMax - rangeMin));
  const needleLength = 60;
  const centerX = 80;
  const centerY = 100;
  const x2 = centerX + needleLength * Math.cos(angle);
  const y2 = centerY - needleLength * Math.sin(angle);

  return (
    <div className="relative w-full max-w-[160px] aspect-[2/1]">
      <Doughnut data={data} options={options} />

   
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <line x1={centerX} y1={centerY} x2={x2} y2={y2} stroke="red" strokeWidth="4" />
        <circle cx={centerX} cy={centerY} r="4" fill="red" />
      </svg>

   
      <div className="absolute top-[77%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-base font-bold">
        {needleValue.toFixed(2)}
      </div>
      {/* <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-white">L/min</div> */}
 
      <div className="absolute bottom-2 left-4 text-sm text-white">{rangeMin}</div>
      <div className="absolute bottom-2 right-4 text-sm text-white">{rangeMax}</div>
    </div>
  );
};

export default ActualGauge;
