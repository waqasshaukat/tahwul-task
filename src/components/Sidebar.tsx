 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/data/mock";

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: "/icons/dashboard.svg" },
  { label: "Perspectives", href: "/perspectives", icon: "/icons/perspective.svg" },
  { label: "Tasks", href: "#", icon: "/icons/task.svg" },
  { label: "Documents", href: "#", icon: "/icons/documents.svg" },
  { label: "Reports", href: "#", icon: "/icons/reports.svg" },
  { label: "Users & Roles", href: "#", icon: "/icons/users.svg" },
];

export default function Sidebar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  const pathname = usePathname();
  return (
    <aside
      className="hidden flex-col border-r border-[#F1F2F3] bg-[#1D3557] text-white transition-all md:fixed md:inset-y-0 md:flex"
      style={{ width: collapsed ? 72 : 256 }}
    >
      <div className="relative flex h-16 items-center px-6">
        <img
          src="/tahawul-logo.svg"
          alt="Tahawul"
          className={`h-10 transition-all ${
            collapsed ? "w-10" : "w-[100px]"
          }`}
        />
        <button
          className="absolute top-[14px] z-30 flex h-8 w-8 items-center justify-center rounded-full border border-slateblue-100 bg-white"
          style={{ left: collapsed ? 56 : 240, boxShadow: "0 0 2px rgba(0,0,0,0.1)" }}
          aria-label="Collapse sidebar"
          onClick={onToggle}
        >
          <img
            src="/icons/arrow.svg"
            alt=""
            className={`h-3 w-3 transition-transform ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <nav className="flex-1 px-4 py-4">
        <div className="space-y-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2.5 rounded-lg px-4 py-2 text-[14px] font-medium leading-4 transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-[#7B9FC3] hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="flex h-7 w-7 items-center justify-center">
                  <img
                    src={item.icon ?? "/icons/dashboard.svg"}
                    alt=""
                    className={`h-[14px] w-[14px] ${
                      isActive ? "brightness-200" : "opacity-80"
                    }`}
                  />
                </span>
                {!collapsed && item.label}
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="px-6 pb-6 text-xs text-white/50">
        v1.0 • Riyadh
      </div>
    </aside>
  );
}
