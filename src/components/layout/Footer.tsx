import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t  py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex justify-between items-center w-full">
          <div>
            <Image
              src="/images/logo/3.webp"
              alt="logo"
              width={100}
              height={100}
            />
          </div>

          <nav className="flex items-center gap-1" aria-label="Social links">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
          </nav>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/20 px-4 pt-8">
        <p className="text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Hook Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
