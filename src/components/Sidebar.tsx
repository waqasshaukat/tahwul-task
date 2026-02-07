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
  isAnimating,
  mobileOpen,
  onCloseMobile,
  onToggle,
}: {
  collapsed: boolean;
  isAnimating: boolean;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  onToggle: () => void;
}) {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black/30 transition md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onCloseMobile}
        aria-hidden={!mobileOpen}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[256px] flex-col border-r border-[#F1F2F3] bg-[#1D3557] text-white transition-transform md:fixed md:z-20 md:translate-x-0 md:overflow-visible md:transition-all ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: collapsed ? 72 : 256 }}
      >
        <div className="relative flex h-16 items-center px-6 overflow-visible">
          <img
            src="/tahawul-logo.svg"
            alt="Tahawul"
            className={`h-10 transition-all ${
              collapsed ? "w-0 opacity-0" : "w-[100px] opacity-100"
            }`}
          />
          {!isAnimating && (
            <button
              className="absolute top-[14px] z-50 hidden h-8 w-8 items-center justify-center rounded-full border border-slateblue-100 bg-white md:flex"
              style={{
                left: collapsed ? 52 : 240,
                boxShadow: "0 0 2px rgba(0,0,0,0.1)",
              }}
              aria-label="Collapse sidebar"
              onClick={onToggle}
            >
              <img
                src="/icons/arrow.svg"
                alt=""
                className={`h-3 w-3 ${collapsed ? "rotate-180" : ""}`}
              />
            </button>
          )}
          <button
            type="button"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
            aria-label="Close navigation"
            onClick={onCloseMobile}
          >
            ✕
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
                  onClick={onCloseMobile}
                  className={`flex items-center gap-2.5 rounded-lg px-4 py-2 text-[14px] font-medium leading-4 transition ${
                    isActive
                      ? collapsed
                        ? "text-white"
                        : "bg-white/10 text-white"
                      : "text-[#7B9FC3] hover:text-white"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg ${
                      isActive ? "bg-white/10" : "bg-transparent"
                    }`}
                  >
                    <img
                      src={item.icon ?? "/icons/dashboard.svg"}
                      alt=""
                      className={`h-[14px] w-[14px] min-h-[14px] min-w-[14px] flex-shrink-0 ${
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
        <div className="px-6 pb-6 text-xs text-white/50"></div>
      </aside>
    </>
  );
}
