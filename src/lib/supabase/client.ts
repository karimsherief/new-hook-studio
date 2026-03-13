import { createBrowserClient } from "@supabase/ssr";

// Lightweight wrapper around the Supabase browser client.
// If the required environment variables are missing, we return a
// stubbed client so that the app keeps working without Supabase.
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.warn(
      "Supabase is disabled: NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are not set.",
    );

    return {
      auth: {
        async signInWithPassword() {
          return {
            data: { user: null, session: null },
            error: { message: "Authentication is disabled in this deployment." },
          } as any;
        },
      },
    } as any;
  }

  return createBrowserClient(url, key);
}
