import Link from "next/link";

const SERVICES = [
  {
    title: "Reels & short-form",
    description:
      "High-impact reels and short-form content for social platforms. Script to publish, we handle production and editing.",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Podcast production",
    description:
      "Full podcast production: recording, editing, mixing, and publishing. Indoor or outdoor setups to match your style.",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    title: "Video editing",
    description:
      "Professional video editing for ads, vlogs, and long-form content. Color grading, sound design, and delivery in your format.",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-white md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-[#033C45] md:text-4xl">
          Our services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600 dark:text-zinc-400">
          From reels to podcasts and full video edits—we cover the full spectrum
          of content production.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border-2 border-[#DDCEB1] bg-[#DDCEB1] p-6 shadow-lg"
            >
              <div className="text-[#033C45]">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-[#033C45]">
                {service.title}
              </h3>
              <p className="mt-2 text-zinc-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/book-project"
            className="inline-flex items-center rounded-lg bg-[#DDCEB1] text-[#033C45] font-bold px-5 py-2.5 text-sm hover:bg-[#e0d7c5]"
          >
            Book a project
          </Link>
        </div>
      </div>
    </section>
  );
}
