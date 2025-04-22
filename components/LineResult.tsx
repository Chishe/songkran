'use client';

import { useEffect, useState } from 'react';
import { Line as ChartLine } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Line({ url }: { url: string }) {
  const [itemValues, setItemValues] = useState<number[]>([]);
  const [timeStamps, setTimeStamps] = useState<string[]>([]);
  const [itemName, setItemName] = useState<string>('');
  const [pointColor, setPointColor] = useState<string>('#00f2fe');

  const minThreshold = 0.18;
  const maxThreshold = 0.28;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const reversed = [...data].reverse();
        setItemValues(reversed.map((d: any) => parseFloat(d.item)));
        setTimeStamps(reversed.map((d: any) => d.time));
        const currentItem = reversed[0]?.itemname || '';
        setItemName(currentItem);

        fetch('/api/threshold')
          .then(res => res.json())
          .then(thresholds => {
            const threshold = thresholds.find((t: any) => t.item === currentItem);
            if (threshold) {
              setPointColor(threshold.color);
            }
          })
          .catch(err => {
            console.error('Failed to fetch thresholds:', err);
          });
      });
  }, [url]);

  const data = {
    labels: timeStamps,
    datasets: [
      {
        label: itemName,
        data: itemValues,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 2,
        tension: 0.3,
        fill: false,
        pointBackgroundColor: pointColor,
        pointBorderColor: pointColor,
        pointRadius: 5,
        pointHoverRadius: 7
      },
      {
        label: 'Max Threshold',
        data: Array(timeStamps.length).fill(maxThreshold),
        borderColor: '#ff0000',
        borderWidth: 2,
        pointRadius: 0,
        fill: false
      },
      {
        label: 'Min Threshold',
        data: Array(timeStamps.length).fill(minThreshold),
        borderColor: '#ff0000',
        borderWidth: 2,
        pointRadius: 0,
        fill: false
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return context.parsed.y !== null ? `${context.parsed.y.toFixed(2)} l/min` : 'No data';
          }
        }
      }
    },
    scales: {
      y: {
        min: 0.15,
        max: 0.3,
        ticks: {
          stepSize: 0.02,
          callback: (value: number) => value.toFixed(2),
          color: 'white'
        },
        grid: { color: 'white' }
      },
      x: {
        ticks: { color: 'white' },
        grid: { color: 'white' }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <ChartLine data={data} options={options} />
    </div>
  );
}
