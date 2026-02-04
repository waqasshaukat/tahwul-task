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
    <div className="h-[283.45px] w-full rounded-[10px] border border-[#E0E8ED] bg-white p-4">
      <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">
        {title}
      </h3>
      <div className="mt-3 border-t border-[#E0E8ED] divide-y divide-[#E0E8ED]">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3 py-3 text-sm">
            <span className={`mt-1 h-1.5 w-1.5 rounded-full ${badgeMap[item.type]}`} />
            <div className="flex-1">
              <p className="text-[16px] font-medium leading-[22px] text-[#1D3557]">
                {item.title}
              </p>
            </div>
            <span className="text-[12px] font-normal leading-4 text-[#8597A8]">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
