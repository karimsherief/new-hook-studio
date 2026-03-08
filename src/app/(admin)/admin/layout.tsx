import { requireAdmin } from "@/lib/auth/require-admin";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      {/* <aside className="fixed left-0 top-14 z-10 h-[calc(100vh-3.5rem)] w-56 border-r border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
        <div className="p-4">
          <Link
            href="/admin"
            className="text-lg font-semibold text-zinc-900 dark:text-zinc-50"
          >
            Admin
          </Link>
        </div>
        <nav className="space-y-0.5 px-2">
          <Link
            href="/admin"
            className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/submissions"
            className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            Submissions
          </Link>
        </nav>
      </aside> */}
      <main className="p-6">{children}</main>
    </div>
  );
}
