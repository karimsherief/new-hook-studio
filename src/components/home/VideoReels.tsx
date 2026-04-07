"use client";

import { PlayCircle } from "lucide-react";

interface VideoReelsProps {
  videos?: Array<{
    id: string;
    src: string;
    title: string;
    thumbnail?: string;
  }>;
}

export default function VideoReels({ videos }: VideoReelsProps) {
  const videoSrc = "/videos/rels 10.mp4";
  const videoTitle = videos?.[0]?.title ?? "Featured Reel";
  const videoPoster = videos?.[0]?.thumbnail;
  return (
    <section className="relative overflow-hidden py-14 text-white md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,194,143,0.10),transparent_38%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E0C28F]/20 bg-[#E0C28F]/8 px-4 py-2 text-sm font-semibold text-[#E0C28F] backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#E0C28F]" />
            Our Work
          </div>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Featured Reels
          </h2>
          <p className="mt-4 text-lg text-white/70 md:text-xl">
            Discover our latest creative productions and client work
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <video
                className="h-[280px] w-full bg-black object-cover sm:h-[380px] md:h-[520px]"
                {...(videoPoster ? { poster: videoPoster } : {})}
                src={videoSrc}
                controls
                playsInline
                preload="auto"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_55%,rgba(0,0,0,0.75)_100%)]" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 sm:p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#E0C28F]">
                    Featured
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white sm:text-2xl">
                    {videoTitle}
                  </h3>
                </div>
                <div className="hidden items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-2 text-sm text-white/90 backdrop-blur-sm sm:flex">
                  <PlayCircle className="h-4 w-4 text-[#E0C28F]" />
                  Play
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-white/65">
          Tap play to preview our latest production.
        </div>
      </div>
    </section>
  );
}
