type Item = {
  label: string;
  date: string;
  status: "done" | "next" | "pending" | string;
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
          <div className="absolute left-0 top-0 h-[14px] w-[307px] rounded-[10px] bg-[#1EA54E]" />
          {items.map((item, index) => {
            const leftPadding = 47;
            const rightPadding = 46.97;
            const spacing = `calc((100% - ${leftPadding}px - ${rightPadding}px) / ${items.length - 1})`;
            const leftOffset =
              index === items.length - 1
                ? `calc(100% - ${rightPadding}px)`
                : `calc(${leftPadding}px + ${index} * ${spacing})`;
            return (
              <span
                key={item.label}
                className={`absolute top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
                  item.status === "done"
                    ? "bg-white"
                    : "bg-[#DB1F26]"
                }`}
                style={{ left: leftOffset }}
              />
            );
          })}
        </div>
        <div className="relative mt-4 h-[44px]">
          {items.map((item, index) => {
            const leftPadding = 47;
            const rightPadding = 46.97;
            const spacing = `calc((100% - ${leftPadding}px - ${rightPadding}px) / ${items.length - 1})`;
            const leftOffset =
              index === items.length - 1
                ? `calc(100% - ${rightPadding}px)`
                : `calc(${leftPadding}px + ${index} * ${spacing})`;
            const isLast = index === items.length - 1;
            return (
              <div
                key={item.label}
                className="absolute top-0 -translate-x-1/2 text-center"
                style={{
                  left: isLast ? `calc(${leftOffset} - 6px)` : leftOffset,
                }}
              >
                <span className="block text-[14px] font-normal leading-4 text-[#8597A8]">
                  {item.date}
                </span>
                <span
                  className={`mt-[6px] block text-[14px] font-medium leading-4 text-[#1D3557] ${
                    isLast ? "whitespace-nowrap" : ""
                  }`}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
