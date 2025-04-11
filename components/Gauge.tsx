"use client";
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Gauge() {
  const flowRate = 0.22;
  const maxFlow = 0.5;
  const percentage = (flowRate / maxFlow) * 100;

  const options = {
    chart: {
      type: 'radialBar',
      height: 300,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: '70%',
        },
        track: {
          background: '#e0e0e0',
          strokeWidth: '97%',
          margin: 5,
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#333',
            offsetY: -10,
          },
          value: {
            offsetY: 0,
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#333',
            formatter: function(val) {
              return val === 100 ? maxFlow.toFixed(2) + ' l/min' : flowRate.toFixed(2) + ' l/min';
            },
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: [
          {
            offset: 0,
            color: '#4facfe', // Light blue
            opacity: 1
          },
          {
            offset: 100,
            color: '#00f2fe', // Teal
            opacity: 1
          }
        ]
      },
    },
    series: [percentage],
    labels: ['Flow Rate'],
    stroke: {
      lineCap: 'round'
    },
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', position: 'relative' }}>
      <ApexCharts 
        options={options} 
        series={options.series} 
        type="radialBar" 
        height={300} 
      />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 30px',
        marginTop: '-40px',
        fontSize: '14px',
        color: '#666'
      }}>
        <span>0 l/min</span>
        <span>{maxFlow.toFixed(1)} l/min</span>
      </div>
    </div>
  );
}