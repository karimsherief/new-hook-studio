import { BookingsTable } from "@/components/admin/BookingsTable";
import { getBookings } from "@/lib/db/submissions";

export default async function AdminSubmissionsPage() {
  const bookings = await getBookings();

  return (
    <>
      <h1 className="text-2xl font-semibold text-white ">Bookings</h1>
      <div className="mt-6  rounded-xl border shadow-[0_12px_40px_rgba(15,62,71,0.08)]  border-white/10 bg-white/4  backdrop-blur-2xl">
        <div>
          <BookingsTable bookings={bookings} />
        </div>
      </div>
    </>
  );
}
