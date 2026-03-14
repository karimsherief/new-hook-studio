"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { User } from "@/types/database";
import {
  Clapperboard,
  House,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Navbar({ user }: { user: User | null }) {
  const pathname = usePathname();
  const [isAsideOpen, setAsideOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  const handleSignout = async () => {
    await fetch("/api/auth/signout", {
      method: "POST",
    });
    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0F3E47]/10 bg-[#F8F6F2]/95 backdrop-blur supports-backdrop-filter:bg-[#F8F6F2]/80 ">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* LOGO */}
        <Link
          href="/"
          className="flex shrink-0 items-center transition hover:opacity-90"
        >
          <Image
            src="/images/logo/1.webp"
            alt="Hook Studio Logo"
            priority
            width={200}
            height={50}
            objectFit="cover"
            className="max-md:hidden"
          />
          <Image
            src="/images/logo/5.webp"
            alt="Hook Studio Logo"
            priority
            width={50}
            height={50}
            objectFit="cover"
            className="md:hidden"
          />
        </Link>

        {/* NAVIGATION */}
        <nav>
          <div className="flex items-center gap-4 md:gap-8 max-md:hidden">
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
            {user != null && (
              <>
                <Link
                  href="/admin"
                  className={`relative pb-1 text-sm font-medium transition md:text-base ${
                    isActive("/")
                      ? "text-[#0F3E47]"
                      : "text-[#0F3E47]/70 hover:text-[#0F3E47]"
                  }`}
                >
                  Dashboard
                </Link>

                <button
                  className="underline cursor-pointer"
                  onClick={handleSignout}
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
          <button
            className="cursor-pointer md:hidden"
            onClick={() => setAsideOpen(true)}
          >
            <Menu />
          </button>
        </nav>
        {isAsideOpen && (
          <div
            className="fixed h-screen inset-0 bg-black/50 z-10"
            onClick={() => setAsideOpen(false)}
          />
        )}

        <aside
          className={`fixed bg-white transition duration-300 p-5 w-50 right-0 top-0 h-screen z-20 flex flex-col
          ${isAsideOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          <div className="self-end">
            <button
              onClick={() => setAsideOpen(false)}
              className="text-red-500 font-bold cursor-pointer"
            >
              <X />
            </button>
          </div>
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col">
              <Link
                href="/"
                className={`pb-1 text-sm flex items-center gap-2 font-medium transition md:text-base ${
                  isActive("/")
                    ? "text-[#0F3E47]"
                    : "text-[#0F3E47]/70 hover:text-[#0f3e47]"
                }`}
              >
                <House /> Home
              </Link>

              <Link
                href="/book-studio"
                className={`pb-1 text-sm flex items-center gap-2 font-medium transition md:text-base ${
                  isActive("/book-studio")
                    ? "text-[#0F3E47]"
                    : "text-[#0F3E47]/70 hover:text-[#0f3e47]"
                }`}
              >
                <Clapperboard /> Book Studio
              </Link>
              {user != null && (
                <Link
                  href="/admin"
                  className={`pb-1 text-sm flex items-center gap-2 font-medium transition md:text-base ${
                    isActive("/admin")
                      ? "text-[#0F3E47]"
                      : "text-[#0F3E47]/70 hover:text-[#0f3e47]"
                  }`}
                >
                  <LayoutDashboard /> Dashboard
                </Link>
              )}
            </div>
            {user != null && (
              <button
                className="flex items-center gap-2 cursor-pointer bg-[#0F3E47] py-2 px-1 rounded-md shadow-lg text-white text-left"
                onClick={handleSignout}
              >
                <LogOut />
                Logout
              </button>
            )}
          </div>
        </aside>
      </div>
    </header>
  );
}
