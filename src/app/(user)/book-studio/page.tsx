import { BookStudioHero } from "@/components/book-studio/BookStudioHero";
import { SelectStudioForm } from "@/components/book-studio/SelectStudioForm";
import { ContactCards } from "@/components/book-studio/ContactCards";

export default function BookStudio() {
  return (
    <div className="flex min-h-screen flex-col">
      <BookStudioHero />
      <main className="flex-1 bg-white">
        <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <h2 className="text-center text-2xl font-semibold text-zinc-800 sm:text-3xl">
            Select Your Studio
          </h2>
          <SelectStudioForm />
        </section>
        <ContactCards />
      </main>
    </div>
  );
}
