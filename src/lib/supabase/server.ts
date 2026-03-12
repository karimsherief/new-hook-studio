import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Server-side Supabase helper. When Supabase env vars are missing,
// this returns a stubbed client so the rest of the app can run.
export async function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.warn(
      "Supabase is disabled: NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are not set.",
    );

    return {
      auth: {
        async getUser() {
          return { data: { user: null }, error: null } as any;
        },
        async exchangeCodeForSession() {
          return {
            data: null,
            error: { message: "Auth is disabled in this deployment." },
          } as any;
        },
      },
      from() {
        return {
          select() {
            return { data: [], error: null } as any;
          },
          order() {
            return { data: [], error: null } as any;
          },
          insert() {
            return {
              data: null,
              error: { message: "Database is disabled in this deployment." },
            } as any;
          },
        };
      },
    } as any;
  }

  const cookieStore = await cookies();

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          // Ignored when called from Server Component
        }
      },
    },
  });
}
