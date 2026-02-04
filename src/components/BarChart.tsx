type Props = {
  title: string;
  values: number[];
  labels: string[];
};

export default function BarChart({ title, values, labels }: Props) {
  const max = Math.max(...values);
  return (
    <div className="card p-4">
      <h3 className="text-sm font-semibold text-ink-800">{title}</h3>
      <div className="mt-4 flex h-40 items-end gap-3">
        {values.map((value, index) => (
          <div key={`${labels[index]}-${value}`} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-32 w-full items-end rounded-lg bg-slateblue-100">
              <div
                className="w-full rounded-lg bg-gradient-to-t from-brand-500 to-emerald-500"
                style={{ height: `${(value / max) * 100}%` }}
              />
            </div>
            <span className="text-[10px] text-slateblue-500">{labels[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
