"use client";

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
  const videoPoster = videos?.[0]?.thumbnail;
  return (
    <section className="relative overflow-hidden py-10 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(224,194,143,0.12),transparent_36%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(13,169,179,0.16),transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.04] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-3">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <video
                className="h-[300px] w-full bg-black object-cover sm:h-[430px] md:h-[580px]"
                {...(videoPoster ? { poster: videoPoster } : {})}
                src={videoSrc}
                controls
                playsInline
                preload="auto"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0.50)_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
