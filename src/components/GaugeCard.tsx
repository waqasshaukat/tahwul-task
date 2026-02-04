type Props = {
  title: string;
  value: number;
  subtitle: string;
  meta?: { label: string; value: string }[];
};

export default function GaugeCard({ title, value, subtitle, meta }: Props) {
  return (
    <div className="card p-4">
      <h3 className="text-sm font-semibold text-ink-800">{title}</h3>
      <div className="mt-4 flex flex-col items-center gap-3">
        <div
          className="flex h-28 w-28 items-center justify-center rounded-full"
          style={{
            background: `conic-gradient(#18B76A ${value * 3.6}deg, #E3E9F4 0deg)`,
          }}
        >
          <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white shadow-subtle">
            <span className="text-2xl font-semibold text-ink-900">{value}%</span>
            <span className="text-[10px] text-slateblue-500">{subtitle}</span>
          </div>
        </div>
        {meta && (
          <div className="grid w-full grid-cols-2 gap-3 text-center text-xs">
            {meta.map((item) => (
              <div key={item.label}>
                <p className="text-ink-900 font-semibold">{item.value}</p>
                <p className="text-slateblue-500">{item.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
