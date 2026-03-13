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
  images: string[] | null
  created_at: string;
}


export interface User {
  id: string,
  email: string,
  user_metadata: {
    display_name: string
  }
}