import { BookStudioHero } from "@/components/book-studio/BookStudioHero";
import { ContactCards } from "@/components/book-studio/ContactCards";
import { SelectStudioForm } from "@/components/book-studio/SelectStudioForm";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <BookStudioHero />
      <main className="flex-1 bg-[#F7F4EE]">
        <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <SelectStudioForm />
        </section>
        <ContactCards />
      </main>
    </div>
  );
}
