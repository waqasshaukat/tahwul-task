type Props = {
  title: string;
  value: number;
  subtitle: string;
  color?: string;
};

export default function SemiGaugeCard({
  title,
  value,
  subtitle,
  color = "#DB1F26",
}: Props) {
  const size = 258.09;
  const stroke = 20;
  const radius = (size - stroke) / 2;
  const arcLength = Math.PI * radius;
  const progress = (value / 100) * arcLength;
  const offset = arcLength - progress;

  return (
    <div className="h-[283.45px] w-full rounded-[10px] border border-[#E0E8ED] bg-white p-4">
      <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">
        {title}
      </h3>
      <div className="mt-2 flex flex-1 items-end justify-center">
        <div className="relative h-[170px] w-[258px]">
          <svg
            className="absolute bottom-0 left-0"
            width={size}
            height={size / 2 + stroke / 2}
            viewBox={`0 0 ${size} ${size / 2 + stroke / 2}`}
            fill="none"
          >
            <path
              d={`M${stroke / 2} ${size / 2} A${radius} ${radius} 0 0 1 ${
                size - stroke / 2
              } ${size / 2}`}
              stroke="#F5F8FB"
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
          <div className="absolute bottom-2 left-1/2 w-full -translate-x-1/2 text-center">
            <p className="text-[44px] font-bold leading-[44px] text-[#1D3557]">
              {value}%
            </p>
            <p className="mt-1 text-[14px] font-normal leading-4 text-[#8597A8]">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
