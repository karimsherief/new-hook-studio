import { redirect } from "next/navigation";
import { getUser } from "./get-user";

export async function requireAdmin() {
  const user = await getUser();

  // In this project there is only a single admin account in Supabase.
  // Any logged-in user is treated as the admin.
  if (!user) {
    redirect("/login");
  }

  return user;
}
