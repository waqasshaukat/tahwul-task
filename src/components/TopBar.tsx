import Link from "next/link";

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
            <input
              className="h-[34px] w-full rounded-lg border border-[#E0E8ED] bg-[#F5F8FA] px-4 text-sm text-ink-800 outline-none focus:border-brand-500"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white">
            <img src="/icons/notifications.svg" alt="" className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
          </button>
          <Link
            href="/perspectives"
            className="flex h-8 w-[128px] items-center gap-1 rounded-full bg-[#F9FAFA] px-2 text-[12px] font-semibold text-ink-800"
          >
            <img
              src="/icons/man.png"
              alt="Mohamed"
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="min-w-0 flex-1 truncate">Mohamed</span>
            <img src="/icons/down.svg" alt="" className="h-3 w-3 flex-shrink-0" />
          </Link>
        </div>
      </div>
    </header>
  );
}
