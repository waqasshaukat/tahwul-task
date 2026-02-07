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
    <div className="rounded-[10px] border border-[#E0E8ED] bg-white p-4 md:h-[129.6px]">
      <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">Leaders</h3>
      <div className="mt-4 flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-4">
        {leaders.map((leader, index) => (
          <div
            key={`${leader.name}-${leader.role}-${index}`}
            className="flex w-full items-center gap-3 rounded-[10px] bg-[#F5F8FA] px-3 py-2 overflow-hidden md:h-[63.11px] md:w-[225px] md:gap-[11px] md:px-[13px] md:py-0"
          >
            {leader.avatar ? (
              <img
                src={leader.avatar}
                alt={leader.name}
                className="h-12 w-12 rounded-full object-cover md:h-[47.11px] md:w-[47.11px]"
              />
            ) : (
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slateblue-200 text-xs font-semibold text-ink-800 md:h-[47.11px] md:w-[47.11px]"
              >
                {leader.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
            )}
            <div className="flex min-w-0 flex-1 flex-col gap-0.5 md:w-[141px] md:flex-none">
              <p className="truncate text-[15px] font-medium leading-[20px] text-[#1D3557] md:text-[16px] md:leading-[22px]">
                {leader.name}
              </p>
              <p className="font-cairo truncate text-[14px] font-medium leading-[20px] text-[#8597A8] md:text-[16px] md:leading-[22px]">
                {leader.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
