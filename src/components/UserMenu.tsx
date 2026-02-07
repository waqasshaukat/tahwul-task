"use client";

import { useEffect, useRef, useState } from "react";

type UserMenuItem = {
  label: string;
  detail?: string;
};

type Props = {
  name: string;
  avatarSrc: string;
  items: ReadonlyArray<UserMenuItem>;
};

export default function UserMenu({ name, avatarSrc, items }: Props) {
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
        className="flex h-8 w-[128px] cursor-pointer items-center gap-1 rounded-full bg-[#F9FAFA] px-2 text-[12px] font-semibold text-ink-800 transition hover:bg-[#EFF2F4]"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <img
          src={avatarSrc}
          alt={name}
          className="h-6 w-6 rounded-full object-cover"
        />
        <span className="min-w-0 flex-1 truncate">{name}</span>
        <img src="/icons/down.svg" alt="" className="h-3 w-3 flex-shrink-0" />
      </button>
      <div
        role="menu"
        aria-label="User"
        aria-hidden={!isOpen}
        className={`absolute right-0 z-20 mt-3 w-[190px] rounded-[12px] border border-[#E0E8ED] bg-white p-2 shadow-lg transition ${
          isOpen
            ? "opacity-100 scale-100"
            : "pointer-events-none opacity-0 scale-95"
        }`}
      >
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            role="menuitem"
            className="w-full cursor-pointer rounded-[10px] px-3 py-2 text-left text-[12px] font-semibold text-ink-800 transition hover:bg-[#F1F6FA]"
          >
            <span className="block">{item.label}</span>
            {item.detail ? (
              <span className="mt-0.5 block text-[11px] font-medium text-[#7D8FA0]">
                {item.detail}
              </span>
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}
