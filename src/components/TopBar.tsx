import Link from "next/link";

import NotificationMenu from "./NotificationMenu";
import UserMenu from "./UserMenu";
import { notifications, userMenuItems } from "../data/mock";

export default function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-10 border-b border-[#E0E8ED] bg-white">
      <div className="flex flex-col gap-2 px-4 py-2 md:h-[60px] md:flex-row md:items-center md:justify-between md:gap-4 md:py-0 md:pl-14 md:pr-8">
        <div className="flex items-center justify-between gap-3 md:hidden">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onMenuClick}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E0E8ED] bg-white"
              aria-label="Open navigation"
            >
              <span className="flex h-4 w-4 flex-col items-center justify-between py-0.5">
                <span className="block h-0.5 w-4 rounded-full bg-[#1D3557]" />
                <span className="block h-0.5 w-4 rounded-full bg-[#1D3557]" />
                <span className="block h-0.5 w-4 rounded-full bg-[#1D3557]" />
              </span>
            </button>
            <img
              src="/tahawul-logo.svg"
              alt="Tahawul"
              className="h-8 w-[80px]"
            />
          </div>
          <div className="flex items-center gap-2">
            <NotificationMenu items={notifications} />
            <UserMenu
              name="Mohamed"
              avatarSrc="/icons/man.png"
              items={userMenuItems}
              compact
            />
          </div>
        </div>
        <div className="flex w-full items-center md:flex-1 md:justify-start">
          <div className="relative w-full max-w-none md:max-w-[318px]">
            <img
              src="/icons/watch_glass.svg"
              alt=""
              className="absolute left-[16px] top-[9px] h-4 w-4"
            />
            <input
              className="h-[34px] w-full rounded-lg border border-[#E0E8ED] bg-[#F5F8FA] pl-[40px] pr-4 text-sm text-ink-800 outline-none focus:border-[#B9C6D1] focus:ring-2 focus:ring-[#E6EEF5]"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <NotificationMenu items={notifications} />
          <UserMenu
            name="Mohamed"
            avatarSrc="/icons/man.png"
            items={userMenuItems}
          />
        </div>
      </div>
    </header>
  );
}
