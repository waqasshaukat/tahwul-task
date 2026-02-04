"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsMdUp(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="flex min-h-screen bg-slateblue-50">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((prev) => !prev)} />
      <div
        className="flex-1 transition-all"
        style={{ marginLeft: isMdUp ? (collapsed ? 72 : 256) : 0 }}
      >
        <TopBar />
        <main className="px-4 pb-12 pt-6 md:px-8">{children}</main>
      </div>
    </div>
  );
}
