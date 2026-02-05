type Tab = {
  label: string;
  active?: boolean;
};

type Props = {
  tabs: Tab[];
  onChange?: (label: string) => void;
};

export default function SectionTabs({ tabs, onChange }: Props) {
  return (
    <div className="inline-flex h-[40px] items-center gap-[6px] rounded-[8px] border border-[#E0E8ED]/50 bg-[#E0E8ED]/50 p-[3px]">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          className={`flex h-[34px] items-center justify-center rounded-[8px] text-xs font-semibold transition ${
            tab.active
              ? "w-[99px] bg-white px-[15px] text-ink-900"
              : "w-[114px] bg-transparent px-[16px] text-slateblue-500 hover:text-ink-900"
          }`}
          onClick={() => onChange?.(tab.label)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
