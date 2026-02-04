type Leader = {
  name: string;
  role: string;
};

type Props = {
  leaders: Leader[];
};

export default function LeadersRow({ leaders }: Props) {
  return (
    <div className="card p-4">
      <h3 className="text-sm font-semibold text-ink-800">Leaders</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="flex items-center gap-3 rounded-xl border border-slateblue-100 bg-white px-4 py-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slateblue-200 text-xs font-semibold text-ink-800">
              {leader.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>
            <div>
              <p className="text-xs font-semibold text-ink-900">{leader.name}</p>
              <p className="text-[11px] text-slateblue-500">{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
