import { LoginForm } from "@/components/auth/LoginForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {


  const { next, error } = await searchParams;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-zinc-900 p-4">
      <div className="w-full max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
        <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Sign in
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Use your email and password.
        </p>
        {error === "auth" && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            Sign in failed. Please try again.
          </p>
        )}
        <LoginForm next={next} />
      </div>
    </div>
  );
}
