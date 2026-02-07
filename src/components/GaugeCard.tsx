type Props = {
  title: string;
  value: number;
  subtitle: string;
  meta?: { label: string; value: string }[];
};

import SemiGauge from "./SemiGauge";

export default function GaugeCard({ title, value, subtitle, meta }: Props) {
  const size = 258.09;
  const stroke = 16;

  return (
    <div className="h-[322.09px] w-full rounded-[10px] border border-[#E0E8ED] bg-white p-4">
      <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">
        {title}
      </h3>
      <div className="mt-2 flex flex-1 items-center justify-center">
        <div className="relative h-[170px] w-[258.09px] -translate-y-4">
          <SemiGauge
            value={value}
            subtitle={subtitle}
            color="#1EA54E"
            size={size}
            stroke={stroke}
            className="absolute bottom-0 left-0"
          />
        </div>
      </div>
      {meta && (
        <div className="mt-auto border-t border-[#E0E8ED] pt-[32.76px] pb-[24.84px]">
          <div className="grid grid-cols-2 text-center">
            {meta.map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <p className="text-[24px] font-bold leading-4 text-[#1D3557]">
                  {item.value}
                </p>
                <p className="mt-[10.98px] text-[14px] font-normal leading-4 text-[#8597A8]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
