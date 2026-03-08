export type BookingLocation = "indoor" | "outdoor";
export type BookingContentFormat = "reels" | "podcast" | "video editing";

export interface Booking {
  id: string;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  content_type: string | null;
  account_link: string | null;
  location: BookingLocation | null;
  content_format: BookingContentFormat | null;
  created_at: string;
}
