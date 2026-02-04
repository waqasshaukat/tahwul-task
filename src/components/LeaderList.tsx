type Leader = {
  name: string;
  role: string;
  score: string;
};

type Props = {
  title: string;
  leaders: Leader[];
};

export default function LeaderList({ title, leaders }: Props) {
  return (
    <div className="card p-4">
      <h3 className="text-sm font-semibold text-ink-800">{title}</h3>
      <div className="mt-4 space-y-3">
        {leaders.map((leader) => (
          <div key={leader.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slateblue-200 text-xs font-semibold text-ink-800">
                {leader.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">{leader.name}</p>
                <p className="text-xs text-slateblue-500">{leader.role}</p>
              </div>
            </div>
            <span className="text-sm font-semibold text-ink-900">{leader.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
