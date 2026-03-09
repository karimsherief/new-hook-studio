import { ServicesHero } from "@/components/services/ServicesHero";
import { SelectStudioForm } from "@/components/services/SelectStudioForm";
import { StudioGrid } from "@/components/services/StudioGrid";
import { ContactCards } from "@/components/services/ContactCards";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ServicesHero />
      <main className="flex-1 bg-white">
        <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <h2 className="text-center text-2xl font-semibold text-zinc-800 sm:text-3xl">
            Select Your Studio
          </h2>
          <SelectStudioForm />
          <StudioGrid />
        </section>
        <ContactCards />
      </main>
    </div>
  );
}
