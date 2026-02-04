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
    <div className="flex gap-2 rounded-xl border border-slateblue-100 bg-white p-1 shadow-subtle">
      {tabs.map((tab) => (
        <Link
          key={tab.label}
          href={tab.href}
          className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
            tab.active
              ? "bg-slateblue-100 text-ink-900"
              : "text-slateblue-500 hover:text-ink-900"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
