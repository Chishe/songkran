'use client';

import { Line } from 'react-chartjs-2';
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

export default function FlowRateChart() {
    const Item = [0.26, 0.24, 0.22, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2];
    const timeStamps = ['11.01', '11.02', '11.03', '11.04', '11.05', '11.06', '11.07', '11.08', '11.09', '11.10'];
    const paddedItem = [...Item, ...Array(timeStamps.length - Item.length).fill(null)];

    const minThreshold = 0.18;
    const maxThreshold = 0.28;

    const data = {
        labels: timeStamps,
        datasets: [
            {
                data: paddedItem,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 2,
                tension: 0.3,
                fill: false,
                pointBackgroundColor: '#00f2fe',
                pointBorderColor: '#00f2fe',
                pointRadius: 5,
                pointHoverRadius: 7
            },
            {
                label: 'Max Threshold',
                data: Array(timeStamps.length).fill(maxThreshold),
                borderColor: '#ff0000',
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                borderWidth: 2,
                pointRadius: 0,
                fill: false
            },

            {
                label: 'Min Threshold',
                data: Array(timeStamps.length).fill(minThreshold),
                borderColor: '#ff0000',
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
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
                    label: function (context) {
                        if (context.datasetIndex === 0) {
                            return context.parsed.y !== null ? `${context.parsed.y.toFixed(2)} l/min` : 'No data';
                        }
                        return null;
                    }
                }
            },
            annotation: {
                annotations: {
                    maxLine: {
                        type: 'line',
                        yMin: maxThreshold,
                        yMax: maxThreshold,
                        borderColor: 'red',
                        borderWidth: 1,
                        borderDash: [5, 5],
                        label: {
                            content: `Max: ${maxThreshold}`,
                            enabled: true,
                            position: 'right'
                        }
                    },
                    minLine: {
                        type: 'line',
                        yMin: minThreshold,
                        yMax: minThreshold,
                        borderColor: 'red',
                        borderWidth: 1,
                        borderDash: [5, 5],
                        label: {
                            content: `Min: ${minThreshold}`,
                            enabled: true,
                            position: 'right'
                        }
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
                    color: 'white',
                },
                grid: {
                    color: 'white',
                },
                title: {
                    display: false,
                }
            },
            x: {
                ticks: {
                    color: 'white',
                },
                grid: {
                    color: 'white',
                },
                title: {
                    display: false,
                }
            }
        },
        maintainAspectRatio: false
    };


    return (
        <div style={{ height: '400px', width: '100%' }}>
            <Line data={data} options={options} />
        </div>
    );
}