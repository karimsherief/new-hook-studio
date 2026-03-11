const CARDS = [
  {
    title: "Call Us",
    value: "0115847984",
    description:
      "Flexible booking options, indoor and outdoor settings, and a comfortable environment for your creative projects.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    className: "bg-slate-100 text-zinc-800",
  },
  {
    title: "Working Hours",
    value: "0115847984",
    description:
      "Flexible booking options, indoor and outdoor settings, and a tailored experience for all.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    className: "bg-[#033C45] text-white",
  },
  {
    title: "Email Us",
    value: "01114967266",
    description:
      "Flexible booking options, indoor and outdoor settings, and a luxurious atmosphere.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    className: "bg-[#033C45] text-white",
  },
];

export function ContactCards() {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50/50 py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-6 sm:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`rounded-xl p-6 ${card.className}`}
            >
              <div
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${
                  card.className.includes("033C45")
                    ? "bg-white/20"
                    : "bg-[#033C45]/10 text-[#033C45]"
                }`}
              >
                {card.icon}
              </div>
              <h3 className="font-semibold">{card.title}</h3>
              <p className="mt-1 text-lg font-medium opacity-90">{card.value}</p>
              <p className="mt-2 text-sm opacity-90">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
