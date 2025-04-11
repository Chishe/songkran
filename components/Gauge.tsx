'use client';

import { useEffect, useRef } from 'react';
import gaugeConfig from './gaugeConfig.json';

export default function Gauge() {
  const needleRef = useRef<HTMLDivElement>(null);
  const ItemRate = gaugeConfig.initialValue;
  const maxItem = gaugeConfig.maxValue;

  const percentage = Math.min(Math.max(ItemRate / maxItem, 0), 1);
  const angle = percentage * 180 - 90;

  useEffect(() => {
    if (needleRef.current) {
      needleRef.current.style.transform = `rotate(${angle}deg)`;
    }
  }, [angle]);

  return (
    <div className="relative mx-auto" style={{ width: gaugeConfig.size.width, height: gaugeConfig.size.height }}>
      <svg width="100%" height="100%" viewBox="0 0 200 100">
        <path
          d="M10 100 A90 90 0 0 1 190 100"
          fill="none"
          stroke={gaugeConfig.trackColor}
          strokeWidth={gaugeConfig.gaugeWidth}
        />
        <path
          d="M10 100 A90 90 0 0 1 190 100"
          fill="none"
          stroke={gaugeConfig.color}
          strokeWidth={gaugeConfig.gaugeWidth}
          strokeDasharray="180"
          strokeDashoffset={180 - 180 * percentage}
        />
      </svg>

      <div
        ref={needleRef}
        className="absolute left-1/2 bottom-0 origin-bottom"
        style={{
          width: '4px',
          height: '112px',
          backgroundColor: gaugeConfig.needleColor,
          transform: `rotate(${angle}deg)`,
          transition: `transform ${gaugeConfig.animation.duration}ms ${gaugeConfig.animation.ease}`
        }}
      ></div>

      <div className="absolute left-1/2 bottom-0 w-4 h-4 bg-black rounded-full -translate-x-1/2 translate-y-1/2 z-10" />

      <div className="absolute left-0 bottom-0 text-sm text-gray-600">{gaugeConfig.minValue}</div>
      <div className="absolute right-0 bottom-0 text-sm text-gray-600">{maxItem.toFixed(1)}</div>
      <div className="text-center mt-4 text-xl font-bold">{ItemRate.toFixed(2)} l/min</div>
    </div>
  );
}
