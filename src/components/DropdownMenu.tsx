"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  options: ReadonlyArray<string>;
  disabled?: boolean;
};

export default function DropdownMenu({
  value,
  options,
  disabled = true,
}: Props) {
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
        className="flex h-[34px] w-[90px] items-center justify-center gap-2 rounded-[10px] border border-[#E0E8ED] bg-white text-xs font-semibold text-slateblue-600"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {value}
        <img src="/icons/down.svg" alt="" className="h-3 w-3" />
      </button>
      <div
        role="menu"
        aria-label="Year"
        aria-hidden={!isOpen}
        className={`absolute right-0 z-10 mt-2 w-[110px] rounded-[10px] border border-[#E0E8ED] bg-white p-1 shadow-sm transition ${
          isOpen
            ? "opacity-100 scale-100"
            : "pointer-events-none opacity-0 scale-95"
        }`}
      >
        {options.map((year) => (
          <button
            key={year}
            type="button"
            role="menuitem"
            disabled={disabled}
            className={`flex w-full items-center justify-center rounded-[8px] px-2 py-2 text-xs font-semibold transition ${
              disabled
                ? "cursor-not-allowed text-[#A7B4C0]"
                : "cursor-pointer text-slateblue-600 hover:bg-[#F1F6FA]"
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}
