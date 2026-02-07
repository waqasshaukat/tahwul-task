"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Filler);

type Props = {
  title: string;
  values: number[];
  labels: string[];
};

export default function BarChart({ title, values, labels }: Props) {
  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: (context: { chart: { ctx: CanvasRenderingContext2D } }) => {
          const { ctx } = context.chart;
          const gradient = ctx.createLinearGradient(0, 0, 0, 220);
          gradient.addColorStop(0, "#0078D7");
          gradient.addColorStop(0.15, "#0078D7");
          gradient.addColorStop(0.65, "#66B5FF");
          gradient.addColorStop(1, "rgba(0, 120, 215, 0)");
          return gradient;
        },
        borderRadius: 4,
        barThickness: 40,
        maxBarThickness: 40,
      },
    ],
  };

  const options: import("chart.js").ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#1D3557",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        displayColors: false,
      },
    },
    layout: {
      padding: { left: 0, right: 0, top: 0, bottom: 0 },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#7D8FA0",
          padding: 0,
          font: { size: 10, weight: "bold" },
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          color: "#8597A8",
          font: { size: 10, weight: "bold" },
        },
        grid: {
          color: "rgba(230, 237, 245, 0.6)",
        },
      },
    },
  } as const;

  return (
    <div className="h-[322.09px] w-full rounded-[10px] border border-[#E0E8ED] bg-white px-4 pt-[24px] pb-0">
      <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">
        {title}
      </h3>
      <div className="mt-6 h-56">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
