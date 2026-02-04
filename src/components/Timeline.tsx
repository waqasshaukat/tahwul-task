type Item = {
  label: string;
  date: string;
  status: "done" | "next" | "pending";
};

type Props = {
  items: Item[];
};

export default function Timeline({ items }: Props) {
  return (
    <div className="rounded-[10px] border border-[#E0E8ED] bg-white p-4 h-[159px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">
          Project Timeline
        </h3>
        <span className="flex h-[34px] w-[90px] items-center justify-center gap-2 rounded-[10px] border border-[#E0E8ED] bg-white text-xs font-semibold text-slateblue-600">
          2026
          <img src="/icons/down.svg" alt="" className="h-3 w-3" />
        </span>
      </div>
      <div className="mt-4">
        <div className="relative h-[14px] w-full rounded-[10px] bg-[#F5F8FB]">
          <div className="h-[14px] w-1/3 rounded-[10px] bg-emerald-500" />
          {items.map((item, index) => {
            const position = (index / (items.length - 1)) * 100;
            return (
              <span
                key={item.label}
                className={`absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                  item.status === "done"
                    ? "bg-emerald-500"
                    : item.status === "next"
                    ? "bg-amber-500"
                    : "bg-slateblue-300"
                }`}
                style={{ left: `${position}%` }}
              />
            );
          })}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-4 text-xs text-slateblue-600 md:grid-cols-6">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="font-semibold text-ink-800">{item.date}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
