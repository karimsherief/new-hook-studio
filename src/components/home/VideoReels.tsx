"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface VideoReelsProps {
  videos: Array<{
    id: string;
    src: string;
    title: string;
    thumbnail?: string;
  }>;
}

export default function VideoReels({ videos }: VideoReelsProps) {
  const swiperRef = useRef<any>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Handle video end - advance to next slide
  const handleVideoEnded = () => {
    if (!isUserInteracting) {
      swiperRef.current?.slideNext();
    }
  };

  // Track user interaction
  const handleUserInteraction = () => {
    setIsUserInteracting(true);
    setTimeout(() => setIsUserInteracting(false), 1000);
  };

  // Manage video playback when slide changes
  useEffect(() => {
    const activeVideoId = videos[currentSlideIndex]?.id;

    // Pause all videos first
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (video && id !== activeVideoId) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Play active video
    if (activeVideoId && videoRefs.current[activeVideoId]) {
      const activeVideo = videoRefs.current[activeVideoId];
      // Use timeout to ensure video is ready
      setTimeout(() => {
        activeVideo?.play().catch(() => {
          // Handle autoplay policy restriction gracefully
          console.debug("Autoplay policy prevented video playback");
        });
      }, 100);
    }
  }, [currentSlideIndex, videos]);

  const togglePlay = (id: string) => {
    handleUserInteraction();
    const video = videoRefs.current[id];
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className="relative overflow-hidden py-16 text-white md:py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
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

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrentSlideIndex(swiper.realIndex);
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={1}
            slidesPerView={2.4}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.1,
                spaceBetween: 1,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 1,
              },
              1280: {
                slidesPerView: 3.2,
                spaceBetween: 1,
              },
            }}
            className="pb-16"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div
                  className="group relative aspect-9/16 h-96 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.30)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_80px_rgba(0,0,0,0.40)]"
                  onClick={() => togglePlay(video.id)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[video.id] = el;
                    }}
                    className="h-full w-full object-cover"
                    {...(video.thumbnail && { poster: video.thumbnail })}
                    preload="auto"
                    controls
                    playsInline
                    loop={false}
                    onLoadedMetadata={(e) => {
                      e.currentTarget.volume = 1.0;
                    }}
                    onEnded={handleVideoEnded}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Play Button Overlay */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-white/20 p-4 backdrop-blur-md">
                      <div className="h-8 w-8 rounded-full bg-white/30 flex items-center justify-center">
                        <div className="h-0 w-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-semibold text-white drop-shadow-lg">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-custom absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-110 md:left-8"
            onClick={() => handleUserInteraction()}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="swiper-button-next-custom absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-110 md:right-8"
            onClick={() => handleUserInteraction()}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-[#E0C28F]/30 bg-[#E0C28F]/10 px-8 py-3 text-sm font-semibold text-[#E0C28F] transition-all duration-300 hover:bg-[#E0C28F]/20 hover:scale-105">
            View All Work
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
