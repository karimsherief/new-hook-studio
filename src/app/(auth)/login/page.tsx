import { LoginForm } from "@/components/auth/LoginForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const { next, error } = await searchParams;
  return (
    <div className="flex min-h-screen items-center justify-center b-[#f8f6f2] p-4">
      <div className="w-full max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,62,71,0.08)]">
        <h1 className="text-xl font-semibold text-zinc-900 ">Sign in</h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Use your email and password.
        </p>
        {error === "auth" && (
          <p className="mt-2 text-sm text-red-600 ">
            Sign in failed. Please try again.
          </p>
        )}
        <LoginForm next={next} />
      </div>
    </div>
  );
}
