"use client";

type Props = {
  value: number;
  subtitle?: string;
  color?: string;
  size?: number;
  stroke?: number;
  trackColor?: string;
  className?: string;
  textClassName?: string;
};

export default function SemiGauge({
  value,
  subtitle,
  color = "#DB1F26",
  size = 258.09,
  stroke = 16,
  trackColor = "#F5F8FB",
  className,
  textClassName,
}: Props) {
  const radius = (size - stroke) / 2;
  const arcLength = Math.PI * radius;
  const progress = (value / 100) * arcLength;
  const offset = arcLength - progress;

  return (
    <div className={className}>
      <svg
        width={size}
        height={size / 2 + stroke / 2}
        viewBox={`0 0 ${size} ${size / 2 + stroke / 2}`}
        fill="none"
      >
        <path
          d={`M${stroke / 2} ${size / 2} A${radius} ${radius} 0 0 1 ${
            size - stroke / 2
          } ${size / 2}`}
          stroke={trackColor}
          strokeWidth={stroke}
          strokeLinecap="round"
        />
        <path
          d={`M${stroke / 2} ${size / 2} A${radius} ${radius} 0 0 1 ${
            size - stroke / 2
          } ${size / 2}`}
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={arcLength}
          strokeDashoffset={offset}
        />
      </svg>
      <div
        className={`absolute bottom-0 left-1/2 w-full -translate-x-1/2 text-center ${
          textClassName ?? ""
        }`}
      >
        <p className="font-cairo text-[44px] font-bold leading-[44px] text-[#1D3557]">
          {value}%
        </p>
        {subtitle ? (
          <p className="mt-5 text-[14px] font-normal leading-4 text-[#8597A8]">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
