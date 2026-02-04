import Link from "next/link";

type Tab = {
  label: string;
  href: string;
  active?: boolean;
};

type Props = {
  tabs: Tab[];
};

export default function SectionTabs({ tabs }: Props) {
  return (
    <div className="inline-flex h-[40px] gap-[6px] rounded-[8px] border border-[#E0E8ED]/50 bg-[#E0E8ED]/50 p-[3px]">
      {tabs.map((tab) => (
        <Link
          key={tab.label}
          href={tab.href}
          className={`flex h-[34px] items-center justify-center rounded-[8px] py-[7px] text-xs font-semibold transition ${
            tab.active
              ? "w-[99px] bg-white px-[15px] text-ink-900"
              : "w-[114px] bg-transparent px-[16px] text-slateblue-500 hover:text-ink-900"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
