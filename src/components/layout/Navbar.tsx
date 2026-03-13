"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar(user: { user: any }) {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));
  const handleSignout = async () => {
    await fetch("/api/auth/signout", {
      method: "POST",
    });
    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0F3E47]/10 bg-[#F8F6F2]/95 backdrop-blur supports-backdrop-filter:bg-[#F8F6F2]/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* LOGO */}
        <Link
          href="/"
          className="flex shrink-0 items-center transition hover:opacity-90"
        >
          <Image
            src="/images/logo.webp"
            alt="Hook Studio Logo"
            priority
            width={200}
            height={50}
            objectFit="cover"
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-4 md:gap-8">
          <Link
            href="/"
            className={`relative pb-1 text-sm font-medium transition md:text-base ${
              isActive("/")
                ? "text-[#0F3E47]"
                : "text-[#0F3E47]/70 hover:text-[#0F3E47]"
            }`}
          >
            Home
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-full bg-[#EAD8B7] transition-transform duration-300 ${
                isActive("/") ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </Link>

          <Link
            href="/book-studio"
            className="rounded-full bg-[#0F3E47] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0c333a]"
          >
            Book Studio
          </Link>
          {user.user && (
            <button
              className="underline cursor-pointer"
              onClick={handleSignout}
            >
              Sign Out
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
