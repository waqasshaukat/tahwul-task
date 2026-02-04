type Activity = {
  title: string;
  by: string;
  time: string;
  type: "doc" | "task" | "alert";
};

const badgeMap = {
  doc: "bg-brand-500",
  task: "bg-amber-500",
  alert: "bg-rose-500",
};

type Props = {
  title: string;
  items: Activity[];
};

export default function ActivityList({ title, items }: Props) {
  return (
    <div className="card p-4">
      <h3 className="text-sm font-semibold text-ink-800">{title}</h3>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3 text-sm">
            <span className={`mt-1 h-2 w-2 rounded-full ${badgeMap[item.type]}`} />
            <div className="flex-1">
              <p className="text-ink-900">{item.title}</p>
              <p className="text-xs text-slateblue-500">
                By {item.by}
              </p>
            </div>
            <span className="text-xs text-slateblue-400">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
