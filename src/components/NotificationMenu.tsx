"use client";

import { useEffect, useRef, useState } from "react";

type NotificationItem = {
  title: string;
  detail: string;
  time: string;
};

type Props = {
  items: ReadonlyArray<NotificationItem>;
};

export default function NotificationMenu({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current) return;
      if (containerRef.current.contains(event.target as Node)) return;
      setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <img src="/icons/notifications.svg" alt="" className="h-4 w-4" />
        <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
      </button>
      <div
        role="menu"
        aria-label="Notifications"
        aria-hidden={!isOpen}
        className={`absolute right-0 z-20 mt-3 w-[280px] rounded-[12px] border border-[#E0E8ED] bg-white p-3 shadow-lg transition ${
          isOpen
            ? "opacity-100 scale-100"
            : "pointer-events-none opacity-0 scale-95"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#EAEFF4] pb-2">
          <span className="text-[12px] font-semibold text-ink-800">
            Notifications
          </span>
          <span className="text-[11px] font-medium text-[#A7B4C0]">
            {items.length} new
          </span>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {items.map((item) => (
            <button
              key={`${item.title}-${item.time}`}
              type="button"
              className="w-full cursor-pointer rounded-[10px] border border-[#EEF3F7] bg-[#F9FBFD] p-2 text-left transition hover:bg-[#F1F6FA]"
              role="menuitem"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[12px] font-semibold text-ink-800">
                  {item.title}
                </span>
                <span className="text-[10px] font-medium text-[#A7B4C0]">
                  {item.time}
                </span>
              </div>
              <span className="mt-1 block text-[11px] text-[#6B7C8F]">
                {item.detail}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
