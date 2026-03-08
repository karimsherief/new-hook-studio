import { createClient } from "@/lib/supabase/server";
import type { Booking } from "@/types/database";

export async function getBookings(): Promise<Booking[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("booking")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) return [];
  return (data ?? []) as Booking[];
}
