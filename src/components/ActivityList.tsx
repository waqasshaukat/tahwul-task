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
    <div className="flex h-[283.45px] w-full flex-col rounded-[10px] border border-[#E0E8ED] bg-white px-4 pt-4 pb-4">
      <h3 className="text-[16px] font-bold leading-5 text-[#1D3557]">
        {title}
      </h3>
      <div className="mt-[14px] grid flex-1 grid-rows-[72px_76px_1fr] border-t border-[#E0E8ED] divide-y divide-[#E0E8ED] overflow-hidden">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex h-full items-start justify-between gap-3 pt-[16px] pb-3 text-sm"
          >
            <span
              className={`mt-[4px] h-2 w-2 rounded-full ${badgeMap[item.type]}`}
            />
            <div className="flex-1">
              <p className="max-h-[40px] overflow-hidden text-[16px] font-medium leading-[20px] text-[#1D3557]">
                {item.title}
              </p>
            </div>
            <span className="ml-[6px] self-start pt-[2px] whitespace-nowrap text-right text-[12px] font-normal leading-[18px] text-[#8597A8]">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
