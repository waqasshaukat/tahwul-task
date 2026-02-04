type Props = {
  title: string;
  subtitle: string;
  category: string;
  progress: number;
};

export default function DetailHeader({ title, subtitle, category, progress }: Props) {
  return (
    <div className="card p-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="rounded-full bg-slateblue-100 px-3 py-1 text-xs font-semibold text-slateblue-600">
            {category}
          </span>
          <h1 className="mt-2 font-display text-lg font-semibold text-ink-900">{title}</h1>
          <p className="mt-1 text-xs text-slateblue-500">{subtitle}</p>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full"
            style={{
              background: `conic-gradient(#18B76A ${progress * 3.6}deg, #E3E9F4 0deg)`,
            }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xs font-semibold text-ink-900">
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
