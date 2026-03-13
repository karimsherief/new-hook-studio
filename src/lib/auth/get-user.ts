import { createClient } from "@/lib/supabase/server";

// Returns the currently logged-in Supabase user (or null if not logged in).
export async function getUser() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }
  
  return user;
}

