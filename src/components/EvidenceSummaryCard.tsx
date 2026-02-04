type Props = {
  label: string;
  value: string;
  icon?: string;
};

export default function EvidenceSummaryCard({ label, value, icon }: Props) {
  return (
    <div className="flex h-[80px] w-[272px] items-center gap-4 rounded-[10px] border border-[#E0E8ED] bg-white px-4">
      <div className="flex h-6 w-6 items-center justify-center">
        <img src={icon ?? "/icons/doc.svg"} alt="" className="h-6 w-6" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-cairo text-[24px] font-bold leading-4 text-[#1D3557]">
          {value}
        </p>
        <p className="text-[14px] font-normal leading-4 text-[#8597A8]">
          {label}
        </p>
      </div>
    </div>
  );
}
