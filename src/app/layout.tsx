import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getUser } from "@/lib/auth/get-user";
import "./globals.css";
import Whatsapp from "@/components/layout/Whatsapp";

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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="fixed inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(22,103,116,0.24),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(6,26,31,0.22),transparent_26%),linear-gradient(90deg,#072A31_0%,#0B3F49_45%,#0E4B57_100%)]" />
      <div className="fixed inset-0 opacity-[0.045] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* glows */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_50%,rgba(22,103,116,0.24),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(6,26,31,0.22),transparent_26%),linear-gradient(90deg,#072A31_0%,#0B3F49_45%,#0E4B57_100%)]" />
        <div className="fixed inset-0 -z-10 opacity-[0.045] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[22px_22px]" />

        {/* glows */}
        <div className="fixed -z-10 left-[45%] top-[58%] h-24 w-24 rounded-full bg-[#166774]/25 blur-2xl" />
        <div className="fixed -z-10 right-[7%] top-[44%] h-24 w-24 rounded-full bg-[#1D6C79]/25 blur-xl" />
        <div className="fixed -z-10 bottom-[10%] left-[47%] h-28 w-28 rounded-full bg-[#114E59]/25 blur-xl" />
        <Navbar user={user} />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
