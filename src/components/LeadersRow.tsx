type Leader = {
  name: string;
  role: string;
  avatar?: string;
};

type Props = {
  leaders: Leader[];
};

export default function LeadersRow({ leaders }: Props) {
  return (
    <div className="h-[129.6px] rounded-[10px] border border-[#E0E8ED] bg-white p-4">
      <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">Leaders</h3>
      <div className="mt-4 flex flex-wrap gap-4">
        {leaders.map((leader, index) => (
          <div
            key={`${leader.name}-${leader.role}-${index}`}
            className="flex h-[63.11px] w-[225px] items-center gap-[11px] rounded-[10px] bg-[#F5F8FA] px-[13px] overflow-hidden"
          >
            {leader.avatar ? (
              <img
                src={leader.avatar}
                alt={leader.name}
                className="rounded-full object-cover"
                style={{ width: 47.11, height: 47.11 }}
              />
            ) : (
              <div
                className="flex items-center justify-center rounded-full bg-slateblue-200 text-xs font-semibold text-ink-800"
                style={{ width: 47.11, height: 47.11 }}
              >
                {leader.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
            )}
            <div className="flex w-[141px] flex-col gap-0.5">
              <p className="truncate text-[16px] font-medium leading-[22px] text-[#1D3557]">
                {leader.name}
              </p>
              <p className="font-cairo whitespace-nowrap text-[16px] font-medium leading-[22px] text-[#8597A8]">
                {leader.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
