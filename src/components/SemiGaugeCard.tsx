"use client";

type Props = {
  title: string;
  value: number;
  subtitle: string;
  color?: string;
};

import { useEffect, useState } from "react";
import SemiGauge from "./SemiGauge";

export default function SemiGaugeCard({
  title,
  value,
  subtitle,
  color = "#DB1F26",
}: Props) {
  const [isXlUp, setIsXlUp] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const update = () => setIsXlUp(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const size = isXlUp ? 258.09 : 220;
  const stroke = 16;
  const gaugeHeight = isXlUp ? 170 : 150;

  return (
    <div className="h-[283.45px] w-full rounded-[10px] border border-[#E0E8ED] bg-white p-4">
      <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">
        {title}
      </h3>
      <div className="mt-[25px] flex flex-1 items-end justify-center">
        <div
          className="relative"
          style={{ width: size, height: gaugeHeight }}
        >
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
