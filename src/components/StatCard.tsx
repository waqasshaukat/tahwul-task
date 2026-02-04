type Props = {
  label: string;
  value: string;
  icon?: string;
};

export default function StatCard({ label, value, icon }: Props) {
  return (
    <div className="flex h-[80px] w-full items-start justify-between rounded-[10px] border border-[#E0E8ED] bg-white px-4 py-3">
      <div className="pt-1">
        <p className="text-[24px] font-bold leading-4 text-[#1D3557]">
          {value}
        </p>
        <p className="mt-4 whitespace-nowrap text-[13px] font-normal leading-4 text-[#8597A8] md:text-[14px]">
          {label}
        </p>
      </div>
      {icon ? (
        <img src={icon} alt="" className="mt-1 h-5 w-5" />
      ) : (
        <div className="mt-1 h-6 w-6 rounded-full bg-slateblue-100" />
      )}
    </div>
  );
}
