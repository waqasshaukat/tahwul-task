import ActivityList from "@/components/ActivityList";
import BarChart from "@/components/BarChart";
import GaugeCard from "@/components/GaugeCard";
import LeaderList from "@/components/LeaderList";
import ProgressMatrix from "@/components/ProgressMatrix";
import SemiGaugeCard from "@/components/SemiGaugeCard";
import StatCard from "@/components/StatCard";
import Timeline from "@/components/Timeline";
import {
  activities,
  auditReadiness,
  leaders,
  overallComplianceScore,
  progressColumns,
  statCards,
  timeline,
  twelveMonthPerformance,
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

      <div className="grid gap-4 lg:grid-cols-3">
        <SemiGaugeCard
          title={overallComplianceScore.title}
          value={overallComplianceScore.value}
          subtitle={overallComplianceScore.subtitle}
          color={overallComplianceScore.color}
        />
        <LeaderList title="Top Performing Perspective Leaders" leaders={leaders} />
        <ActivityList title="Recent Activities" items={activities} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <BarChart
            title="12-Month Performance"
            values={twelveMonthPerformance.map((item) => item.value)}
            labels={twelveMonthPerformance.map((item) => item.label)}
          />
        </div>
        <GaugeCard
          title={auditReadiness.title}
          value={auditReadiness.value}
          subtitle={auditReadiness.subtitle}
          meta={auditReadiness.meta}
        />
      </div>
    </div>
  );
}
