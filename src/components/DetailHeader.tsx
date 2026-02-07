type Props = {
  title: string;
  subtitle: string;
  category: string;
  progress: number;
};

export default function DetailHeader({ title, subtitle, category, progress }: Props) {
  return (
    <div className="rounded-[10px] border border-[#E0E8ED] bg-white p-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="inline-flex h-[28px] items-center justify-center gap-[10px] whitespace-nowrap rounded-[30px] border border-[#E0E8ED] bg-white px-[10px] text-[12px] font-medium leading-[22px] text-[#8597A8]">
            {category}
          </span>
          <h1 className="mt-2 text-[16px] font-bold leading-4 text-[#1D3557]">
            {title}
          </h1>
          <p className="mt-2 text-[14px] font-normal leading-4 text-[#8597A8]">
            {subtitle}
          </p>
        </div>
        <div className="flex items-center gap-4 md:justify-end">
          <div className="relative flex items-center justify-center" style={{ width: 80.56, height: 80.56 }}>
            <svg
              width="80.56"
              height="80.56"
              viewBox="0 0 80.56 80.56"
              className="absolute inset-0"
            >
              <circle
                cx="40.28"
                cy="40.28"
                r="34"
                stroke="#E3E9F4"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="40.28"
                cy="40.28"
                r="34"
                stroke="#1EA54E"
                strokeWidth="6"
                fill="none"
                strokeDasharray={2 * Math.PI * 34}
                strokeDashoffset={((100 - progress) / 100) * 2 * Math.PI * 34}
                strokeLinecap="round"
                transform="rotate(-90 40.28 40.28)"
              />
            </svg>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <span className="font-cairo text-[14px] font-bold leading-4 text-[#1D3557]">
                {progress}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
