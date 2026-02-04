type Props = {
  label: string;
  value: string;
};

export default function EvidenceSummaryCard({ label, value }: Props) {
  return (
    <div className="card flex items-center gap-3 px-4 py-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500">
        <span className="text-lg font-semibold">{value}</span>
      </div>
      <div>
        <p className="text-xs font-semibold text-ink-900">{label}</p>
        <p className="text-[11px] text-slateblue-500">Evidence</p>
      </div>
    </div>
  );
}
