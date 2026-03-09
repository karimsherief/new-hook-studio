"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(path + "/"));
  const linkClass = (path: string) =>
    isActive(path)
      ? "text-zinc-50 text-sm font-medium"
      : "text-sm font-medium text-zinc-400 hover:text-zinc-50";

  return (
    <header className="sticky top-0 z-50 border-b border-b-white shadow-lg bg-[#033C45]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold text-zinc-50">
          Hook Studio
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/services" className={linkClass("/services")}>
            Services
          </Link>
          <Link href="/book-project" className={linkClass("/book-project")}>
            Book Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
