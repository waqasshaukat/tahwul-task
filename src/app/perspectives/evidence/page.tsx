import ActivityList from "@/components/ActivityList";
import CommentsPanel from "@/components/CommentsPanel";
import DetailHeader from "@/components/DetailHeader";
import EvidenceSummaryCard from "@/components/EvidenceSummaryCard";
import EvidenceTable from "@/components/EvidenceTable";
import SectionTabs from "@/components/SectionTabs";
import { activities, comments, evidenceRows, evidenceSummary } from "@/data/mock";

export default function PerspectivesEvidencePage() {
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
          { label: "Overview", href: "/perspectives" },
          { label: "Evidence", href: "/perspectives/evidence", active: true },
        ]}
      />

      <EvidenceTable rows={evidenceRows} />

      <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <CommentsPanel comments={comments} />
        <ActivityList title="Recent Activities" items={activities} />
      </div>
    </div>
  );
}
