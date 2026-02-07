"use client";

import { useLayoutEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";

const yearOptions = ["2025", "2024", "2023"] as const;

type Item = {
  label: string;
  date: string;
  status: "done" | "next" | "pending" | string;
};

type Props = {
  items: ReadonlyArray<Item>;
};

export default function Timeline({ items }: Props) {
  const labelRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [labelWidths, setLabelWidths] = useState<number[]>([]);
  const leftPadding = 47;
  const rightPadding = 46.97;
  const spacing =
    items.length > 1
      ? `calc((100% - ${leftPadding}px - ${rightPadding}px) / ${
          items.length - 1
        })`
      : "0px";
  const getLeftOffset = (index: number) =>
    index === items.length - 1
      ? `calc(100% - ${rightPadding}px)`
      : `calc(${leftPadding}px + ${index} * ${spacing})`;
  const getLabelCenterOffset = (index: number) =>
    index === items.length - 1
      ? `calc(${getLeftOffset(index)} - 6px)`
      : getLeftOffset(index);
  const lastDoneIndex = items.reduce(
    (acc, item, index) => (item.status === "done" ? index : acc),
    -1
  );
  const labelHalfWidth =
    lastDoneIndex >= 0 ? (labelWidths[lastDoneIndex] ?? 0) / 2 : 0;
  const progressWidth =
    lastDoneIndex >= 0
      ? `calc(${getLabelCenterOffset(lastDoneIndex)} + ${labelHalfWidth}px)`
      : "0px";

  useLayoutEffect(() => {
    const widths = labelRefs.current.map((el) =>
      el ? el.getBoundingClientRect().width : 0
    );
    setLabelWidths(widths);
  }, [items]);

  return (
    <div className="rounded-[10px] border border-[#E0E8ED] bg-white p-4 lg:h-[159px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">
          Project Timeline
        </h3>
        <DropdownMenu value="2026" options={yearOptions} disabled={false} />
      </div>
      <div className="mt-4">
        <div className="relative h-[14px] w-full rounded-[10px] bg-[#F5F8FB]">
          <div
            className="absolute left-0 top-0 h-[14px] rounded-[10px] bg-[#1EA54E]"
            style={{ width: progressWidth }}
          />
          {items.map((item, index) => {
            const leftOffset = getLeftOffset(index);
            return (
              <span
                key={item.label}
                className={`absolute top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
                  item.status === "done"
                    ? "bg-white"
                    : "bg-[#DB1F26]"
                }`}
                style={{ left: leftOffset }}
              />
            );
          })}
        </div>
        <div className="relative mt-4 h-[44px] hidden lg:block">
          {items.map((item, index) => {
            const leftOffset = getLeftOffset(index);
            const isLast = index === items.length - 1;
            return (
              <div
                key={item.label}
                className="absolute top-0 -translate-x-1/2 text-center"
                style={{
                  left: isLast ? `calc(${leftOffset} - 6px)` : leftOffset,
                }}
              >
                <span className="block text-[14px] font-normal leading-4 text-[#8597A8]">
                  {item.date}
                </span>
                <span
                  ref={(el) => {
                    labelRefs.current[index] = el;
                  }}
                  className={`mt-[6px] block text-[14px] font-medium leading-4 text-[#1D3557] ${
                    isLast ? "whitespace-nowrap" : ""
                  }`}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex flex-col gap-3 lg:hidden">
          {items.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span
                className={`mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full ${
                  item.status === "done" ? "bg-[#1EA54E]" : "bg-[#DB1F26]"
                }`}
              />
              <div>
                <span className="block text-[12px] font-normal leading-4 text-[#8597A8]">
                  {item.date}
                </span>
                <span className="mt-0.5 block text-[13px] font-medium leading-4 text-[#1D3557]">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
