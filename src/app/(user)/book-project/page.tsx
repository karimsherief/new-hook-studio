import { PublicForm } from "@/components/user/PublicForm";

export default function FormPage() {
  return (
    <div className="mx-auto max-w-300 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold text-zinc-900 ">
          Book Your Project
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Please fill in the form below. All fields marked with * are required.
          No account needed.
        </p>
      </div>
      <PublicForm />
    </div>
  );
}
