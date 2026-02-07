import Link from "next/link";

import NotificationMenu from "./NotificationMenu";
import UserMenu from "./UserMenu";
import { notifications, userMenuItems } from "../data/mock";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-[#E0E8ED] bg-white">
      <div className="flex h-[60px] items-center justify-between gap-4 px-4 md:pl-14 md:pr-8">
        <div className="flex items-center gap-3 md:hidden">
          <img
            src="/tahawul-logo.svg"
            alt="Tahawul"
            className="h-8 w-[80px]"
          />
        </div>
        <div className="flex flex-1 items-center justify-center md:justify-start">
          <div className="relative w-full max-w-[318px]">
            <img
              src="/icons/watch_glass.svg"
              alt=""
              className="absolute left-[16px] top-[9px] h-4 w-4"
            />
            <input
              className="h-[34px] w-full rounded-lg border border-[#E0E8ED] bg-[#F5F8FA] pl-[40px] pr-4 text-sm text-ink-800 outline-none focus:border-brand-500"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
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
