import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="border-t border-[#166774] py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex justify-between items-center w-full">
          <div>
            <Image
              src="/logos/3.webp"
              alt="logo"
              width={100}
              height={100}
            />
          </div>

          <nav className="flex items-center gap-1" aria-label="Social links">
            <a
              href="https://www.instagram.com/hookstudio.eg?igsh=MWN0NXk3amI5MnU3Yg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="TikTok"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.28V2h-3.2v13.02a2.89 2.89 0 1 1-2.89-2.89 2.9 2.9 0 0 1 .72.09V8.96a6.1 6.1 0 0 0-.72-.04A6.09 6.09 0 1 0 15.82 15V8.74a8 8 0 0 0 4.68 1.5V7.05a4.8 4.8 0 0 1-.91-.36Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1JBhnqrJpE/?mibextid=wwXIfr"
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
          {t("AllRightsReserved", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
