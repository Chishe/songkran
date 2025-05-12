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

  const [minThreshold, setMinThreshold] = useState<number | null>(null);
  const [maxThreshold, setMaxThreshold] = useState<number | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const reversed = [...data].reverse();
        setItemValues(reversed.map((d: any) => parseFloat(d.item)));
        setTimeStamps(reversed.map((d: any) => d.time));
        const currentItem = reversed[0]?.itemname || '';
        setItemName(currentItem);
        fetch('/api/api-qty-suf')
          .then(res => res.json())
          .then(thresholds => {
            const threshold = thresholds.find(
              (t: any) => t.item.trim().toLowerCase() === currentItem.trim().toLowerCase()
            );
            if (threshold) {
              setPointColor(threshold.color);
              setMinThreshold(threshold.min);
              setMaxThreshold(threshold.max);
              console.log('Min Threshold:', threshold.min);
              console.log('Max Threshold:', threshold.max);
            } else {
              console.warn('Threshold not found for:', currentItem);
            }
          })
          .catch(err => {
            console.error('Failed to fetch thresholds:', err);
          });
      })
      .catch(err => {
        console.error('Failed to fetch data:', err);
      });
  }, [url]);

  const pointCount = timeStamps.length;

  const labels = pointCount === 1
    ? [timeStamps[0], timeStamps[0] + ' ']
    : timeStamps;

  const data = {
    labels,
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
      ...(maxThreshold !== undefined && maxThreshold !== null
        ? [{
            label: 'Max Threshold',
            data: pointCount === 1
              ? [maxThreshold, maxThreshold]
              : Array(pointCount).fill(maxThreshold),
            borderColor: '#ff0000',
            borderWidth: 2,
            pointRadius: 0,
            fill: false
          }]
        : []),
      ...(minThreshold !== undefined && minThreshold !== null
        ? [{
            label: 'Min Threshold',
            data: pointCount === 1
              ? [minThreshold, minThreshold]
              : Array(pointCount).fill(minThreshold),
            borderColor: '#ff0000',
            borderWidth: 2,
            pointRadius: 0,
            fill: false
          }]
        : [])
    ]
  };

  const getStepSize = () => {
    if (minThreshold !== null && maxThreshold !== null) {
      const range = maxThreshold - minThreshold;
      const stepSize = range / 6;
      return stepSize;
    }
    return 1; // default step size if thresholds are not available
  };

  const stepSize = getStepSize();

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
        // Make sure min and max are numbers, provide a fallback if null
        min: minThreshold ?? 0,
        max: maxThreshold ?? 100,
        ticks: {
          stepSize: stepSize,
          callback: (value: string | number) => {
            if (typeof value === 'number') {
              return value.toFixed(2);
            }
            return value; // If string, return it as-is
          },
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
