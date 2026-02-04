type Props = {
  title: string;
  values: number[];
  labels: string[];
};

export default function BarChart({ title, values, labels }: Props) {
  const max = Math.max(...values);
  return (
    <div className="h-[322.09px] w-full rounded-[10px] border border-[#E0E8ED] bg-white p-4">
      <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">{title}</h3>
      <div className="relative mt-6 flex h-56 items-end gap-3 pl-10">
        <div className="pointer-events-none absolute left-0 top-0 bottom-[22px] w-10 text-[10px] text-[#8597A8]">
          <span className="absolute right-2 top-0 bottom-0 w-px bg-[#E6EDF5]" />
          {[100, 80, 60, 40, 20, 0].map((tick, idx) => (
            <div
              key={tick}
              className="absolute left-0"
              style={{ top: `${(idx / 5) * 100}%` }}
            >
              {tick}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 z-0 left-10">
          {[0, 1, 2, 3].map((line) => (
            <span
              key={line}
              className="absolute left-0 right-0 h-px"
              style={{
                top: `${(line / 4) * 100}%`,
                background: "rgba(230, 237, 245, 0.3)",
              }}
            />
          ))}
        </div>
        {values.map((value, index) => (
          <div key={`${labels[index]}-${value}`} className="relative z-10 flex flex-1 flex-col items-center gap-2">
            <div className="flex h-44 w-[40.42px] items-end justify-center rounded-lg bg-transparent">
              <div
                className="w-[40.42px] rounded-t-[4px] bg-gradient-to-t from-transparent via-[#66B5FF] to-[#0078D7]"
                style={{ height: `${(value / max) * 100}%` }}
              />
            </div>
            <span className="text-[10px] text-slateblue-500">
              {labels[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
