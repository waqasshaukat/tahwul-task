type Leader = {
  name: string;
  role: string;
  score: string;
  avatar?: string;
};

type Props = {
  title: string;
  leaders: Leader[];
};

export default function LeaderList({ title, leaders }: Props) {
  return (
    <div className="h-[283.45px] w-full rounded-[10px] border border-[#E0E8ED] bg-white p-4">
      <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">
        {title}
      </h3>
      <div className="mt-3 divide-y divide-[#E0E8ED]">
        {leaders.map((leader) => (
          <div key={leader.name} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              {leader.avatar ? (
                <img
                  src={leader.avatar}
                  alt={leader.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slateblue-200 text-xs font-semibold text-ink-800">
                  {leader.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
              )}
              <div className="flex w-[141px] flex-col gap-0.5">
                <p className="whitespace-nowrap text-[16px] font-medium leading-[22px] text-[#1D3557]">
                  {leader.name}
                </p>
                <p className="whitespace-nowrap text-[16px] font-medium leading-[22px] text-[#8597A8]">
                  {leader.role}
                </p>
              </div>
            </div>
            <span className="text-[16px] font-bold leading-[22px] text-[#1D3557]">
              {leader.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
