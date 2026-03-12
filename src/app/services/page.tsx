import { ServicesHero } from "@/components/services/ServicesHero";
import { SelectStudioForm } from "@/components/services/SelectStudioForm";
import { ContactCards } from "@/components/services/ContactCards";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ServicesHero />
      <main className="flex-1 bg-[#F7F4EE]">
        <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          
          <SelectStudioForm />
        </section>
        <ContactCards />
      </main>
    </div>
  );
}
