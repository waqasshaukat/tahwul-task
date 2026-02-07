type Props = {
  title: string;
  value: number;
  subtitle: string;
  color?: string;
};

import SemiGauge from "./SemiGauge";

export default function SemiGaugeCard({
  title,
  value,
  subtitle,
  color = "#DB1F26",
}: Props) {
  const size = 258.09;
  const stroke = 16;

  return (
    <div className="h-[283.45px] w-full rounded-[10px] border border-[#E0E8ED] bg-white p-4">
      <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">
        {title}
      </h3>
      <div className="mt-2 flex flex-1 items-end justify-center">
        <div className="relative h-[170px] w-[258px]">
          <SemiGauge
            value={value}
            subtitle={subtitle}
            color={color}
            size={size}
            stroke={stroke}
            className="absolute bottom-0 left-0"
          />
        </div>
      </div>
    </div>
  );
}
