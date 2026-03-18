import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getUser } from "@/lib/auth/get-user";
import "./globals.css";

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
        <div className="fixed inset-0 bg-[linear-gradient(180deg,#031114_0%,#06191d_45%,#082126_100%)] -z-10" />
        <div className="fixed inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[22px_22px] -z-10" />
        <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[72px_72px] opacity-[0.05] -z-10" />
        <Navbar user={user} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
