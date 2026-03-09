export function ServicesHero() {
  return (
    <section
      className="relative flex min-h-[220px] items-center justify-center bg-zinc-800 bg-cover bg-center bg-no-repeat sm:min-h-[280px]"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80")`,
      }}
    >
      <div className="absolute inset-0 bg-zinc-900/60" />
      <h1 className="relative z-10 text-4xl font-light tracking-wide text-zinc-200 sm:text-5xl md:text-6xl">
        Services
      </h1>
    </section>
  );
}
