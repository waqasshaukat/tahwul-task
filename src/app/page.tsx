import ActivityList from "@/components/ActivityList";
import BarChart from "@/components/BarChart";
import GaugeCard from "@/components/GaugeCard";
import LeaderList from "@/components/LeaderList";
import ProgressMatrix from "@/components/ProgressMatrix";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import Timeline from "@/components/Timeline";
import {
  activities,
  leaders,
  progressColumns,
  statCards,
  timeline,
} from "@/data/mock";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Timeline items={timeline} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {statCards.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </div>

      <ProgressMatrix columns={progressColumns} />

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2 space-y-4">
          <SectionHeader title="Overall Compliance Score" />
          <div className="grid gap-4 md:grid-cols-2">
            <GaugeCard
              title="Overall Compliance Score"
              value={65}
              subtitle="Basic Standards 2025"
            />
            <LeaderList title="Top Performing Perspective Leaders" leaders={leaders} />
          </div>
          <BarChart
            title="12-Month Performance"
            values={[72, 66, 69, 42, 74, 55, 38, 71, 52, 64, 78, 70]}
            labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]}
          />
        </div>
        <div className="space-y-4">
          <ActivityList title="Recent Activities" items={activities} />
          <GaugeCard
            title="Audit Readiness"
            value={80}
            subtitle="Readiness Level"
            meta={[
              { label: "Overdue Sets", value: "12" },
              { label: "Missing Evidence", value: "5" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
