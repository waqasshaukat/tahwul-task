import DetailHeader from "@/components/DetailHeader";
import EvidenceSummaryCard from "@/components/EvidenceSummaryCard";
import SectionTabs from "@/components/SectionTabs";
import LeadersRow from "@/components/LeadersRow";
import { evidenceSummary, objectiveSections } from "@/data/mock";

export default function PerspectivesOverviewPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs text-slateblue-500">
        <span className="rounded-full bg-slateblue-100 px-2 py-1 font-semibold text-ink-800">
          ←
        </span>
        Digital Transformation Strategic Planning
      </div>

      <DetailHeader
        title="Digital Transformation Strategic Planning"
        subtitle="Develop comprehensive strategic plans for digital transformation aligned with organizational goals"
        category="Strategy & Planning"
        progress={100}
      />

      <div className="grid gap-4 md:grid-cols-4">
        {evidenceSummary.map((item) => (
          <EvidenceSummaryCard key={item.label} {...item} />
        ))}
      </div>

      <SectionTabs
        tabs={[
          { label: "Overview", href: "/perspectives", active: true },
          { label: "Evidence", href: "/perspectives/evidence" },
        ]}
      />

      <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
        <div className="card p-3">
          <nav className="space-y-2 text-xs">
            {objectiveSections.map((section, index) => (
              <button
                key={section.title}
                className={`w-full rounded-xl px-3 py-2 text-left font-semibold ${
                  index === 0
                    ? "bg-slateblue-100 text-ink-900"
                    : "text-slateblue-500 hover:bg-slateblue-50"
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
        <div className="space-y-3">
          {objectiveSections.map((section) => (
            <div key={section.title} className="card px-4 py-3">
              <h3 className="text-sm font-semibold text-ink-900">{section.title}</h3>
              <p className="mt-2 text-xs text-slateblue-600">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      <LeadersRow
        leaders={[
          { name: "Ahmed Al-Ali", role: "Strategy Perspective" },
          { name: "Ahmed Al-Ali", role: "Strategy Perspective" },
        ]}
      />
    </div>
  );
}
