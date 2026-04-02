import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getUser } from "@/lib/auth/get-user";
import "./globals.css";
import Whatsapp from "@/components/layout/Whatsapp";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hook Studio",
  description: "User data and admin dashboard",
  icons: {
    icon: "/icons/favicon.ico",
  },
};
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const user = await getUser();
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_50%,rgba(22,103,116,0.24),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(6,26,31,0.22),transparent_26%),linear-gradient(90deg,#072A31_0%,#0B3F49_45%,#0E4B57_100%)]" />
        <div className="fixed inset-0 -z-10 opacity-[0.045] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[22px_22px]" />

        <div className="fixed -z-10 left-[45%] top-[58%] h-24 w-24 rounded-full bg-[#166774]/25 blur-2xl" />
        <div className="fixed -z-10 right-[7%] top-[44%] h-24 w-24 rounded-full bg-[#1D6C79]/25 blur-xl" />
        <div className="fixed -z-10 bottom-[10%] left-[47%] h-28 w-28 rounded-full bg-[#114E59]/25 blur-xl" />
        <NextIntlClientProvider messages={messages}>
          <Navbar user={user} />
          {children}
          <Footer />
          <Whatsapp />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
