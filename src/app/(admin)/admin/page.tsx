import { BookingsTable } from "@/components/admin/BookingsTable";
import { getBookings } from "@/lib/db/submissions";

export default async function AdminSubmissionsPage() {
  const bookings = await getBookings();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Bookings
      </h1>
      <p className="mt-1 text-zinc-600 dark:text-zinc-400">
        {/* Public form submissions (no account required). */}
      </p>
      <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
        <div className="overflow-x-auto">
          <BookingsTable bookings={bookings} />
        </div>
      </div>
    </div>
  );
}
