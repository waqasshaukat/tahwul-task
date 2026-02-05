type Activity = {
  title: string;
  time: string;
  type: "doc" | "task" | "alert";
};

const badgeMap = {
  doc: "bg-[#DB1F26]",
  task: "bg-[#DB1F26]",
  alert: "bg-[#DB1F26]",
};

type Props = {
  title: string;
  items: Activity[];
};

export default function ActivityList({ title, items }: Props) {
  return (
    <div className="h-[294px] w-full rounded-[10px] border border-[#E0E8ED] bg-white p-[24px]">
      <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">
        {title}
      </h3>
      <div className="mt-[14px] border-t border-[#E0E8ED] divide-y divide-[#E0E8ED]">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-start justify-between gap-3 pb-3 pt-[14px] text-sm"
          >
            <span className={`mt-1 h-1.5 w-1.5 rounded-full ${badgeMap[item.type]}`} />
            <div className="flex-1">
              <p className="h-[44px] w-[244px] text-[16px] font-medium leading-[22px] text-[#1D3557]">
                {item.title}
              </p>
            </div>
            <span className="ml-[11px] w-[64px] whitespace-nowrap text-right text-[12px] font-normal leading-[16px] text-[#8597A8]">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
