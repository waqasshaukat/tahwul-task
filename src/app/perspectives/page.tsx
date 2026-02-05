"use client";

import { useState } from "react";
import DetailHeader from "@/components/DetailHeader";
import EvidenceSummaryCard from "@/components/EvidenceSummaryCard";
import SectionTabs from "@/components/SectionTabs";
import LeadersRow from "@/components/LeadersRow";
import EvidenceTable from "@/components/EvidenceTable";
import CommentsPanel from "@/components/CommentsPanel";
import ActivityList from "@/components/ActivityList";
import { activities, comments, evidenceRows, evidenceSummary, objectiveSections } from "@/data/mock";

export default function PerspectivesOverviewPage() {
  const [activeTab, setActiveTab] = useState<"Overview" | "Evidence">("Overview");
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <img src="/icons/left_arrow.svg" alt="" className="h-4 w-4" />
        <span className="text-[16px] font-bold leading-4 text-[#1D3557]">
          Digital Transformation Strategic Planning
        </span>
      </div>

      <div className="mt-[75px]">
        <DetailHeader
          title="Digital Transformation Strategic Planning"
          subtitle="Develop comprehensive strategic plans for digital transformation aligned with organizational goals"
          category="Strategy & Planning"
          progress={100}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {evidenceSummary.map((item) => (
          <EvidenceSummaryCard key={item.label} {...item} />
        ))}
      </div>

      <SectionTabs
        tabs={[
          { label: "Overview", active: activeTab === "Overview" },
          { label: "Evidence", active: activeTab === "Evidence" },
        ]}
        onChange={(label) => setActiveTab(label as "Overview" | "Evidence")}
      />

      {activeTab === "Overview" ? (
        <div className="relative mt-[18.9px] rounded-[10px] border border-[#E0E8ED] bg-white pt-[18.9px] pb-[19.92px]">
          <div className="absolute bottom-0 top-0 left-[180px] w-px bg-[#E0E8ED]" />
          <div className="flex flex-col">
            {objectiveSections.map((section, index) => {
              const rowGap =
                index === 0
                  ? 16.43
                  : index === 1
                  ? 16.41
                  : index === 2
                  ? 16.42
                  : index === 3
                  ? 12.48
                  : 0;
              return (
              <div key={section.title} className="grid grid-cols-[180px_1fr]" style={{ marginBottom: rowGap }}>
                <div
                  className={`flex h-full px-3 pl-[24.87px] ${
                    index === 4 ? "items-center" : "items-start"
                  }`}
                >
                  <div
                    className={`w-[148.42px] rounded-[10px] px-3 py-3 text-left font-cairo text-[16px] font-normal leading-4 text-[#1D3557] ${
                      index === 0
                        ? "bg-[#1D3557]/5"
                        : "bg-[#1D3557]/5 hover:bg-[#1D3557]/10"
                    } ${index === 4 || index === 3 ? "flex items-center" : ""}`}
                    style={
                      index === 1
                        ? { height: 181.69 }
                        : index === 2
                        ? { height: 71.95 }
                        : index === 3
                        ? { height: 71.95 }
                        : index === 4
                        ? { height: 71.95 }
                        : undefined
                    }
                  >
                    {section.title}
                  </div>
                </div>
                <div
                  className={`flex px-3 pr-[26.78px] ${
                    index === 4 ? "items-center" : "items-center"
                  }`}
                >
                  <div
                    className={`ml-0 w-full rounded-[10px] bg-[#F5F8FA] px-4 ${
                      index === 4 || index === 3 ? "py-0 flex items-center" : "py-2"
                    }`}
                    style={
                      index === 1
                        ? { minHeight: 181.69 }
                        : index === 2
                        ? { minHeight: 71.95 }
                        : index === 3
                        ? { minHeight: 71.95 }
                        : index === 4
                        ? { minHeight: 71.95 }
                        : { minHeight: 40 }
                    }
                  >
                    <p className="whitespace-pre-line text-[16px] font-normal leading-[24px] text-[#1D3557]">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="mt-4">
            <EvidenceTable rows={evidenceRows} />
          </div>
          <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
            <CommentsPanel comments={comments} />
            <ActivityList title="Recent Activities" items={activities} />
          </div>
        </div>
      )}

      <div className="mt-[16.5px]">
        <LeadersRow
          leaders={[
            { name: "Ahmed Al-Ali", role: "Strategy Perspective", avatar: "/icons/ahmad.png" },
            { name: "Ahmed Al-Ali", role: "Strategy Perspective", avatar: "/icons/ahmad.png" },
          ]}
        />
      </div>
    </div>
  );
}
