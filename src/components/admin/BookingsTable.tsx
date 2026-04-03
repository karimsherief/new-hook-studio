"use client";

import { useState } from "react";
import type { Booking } from "@/types/database";
import Image from "next/image";

const LOCATIONS = ["indoor", "outdoor"] as const;
const FORMATS = ["reels", "podcast", "video editing"] as const;

export function BookingsTable({ bookings }: { bookings: Booking[] }) {
  const [rows, setRows] = useState(bookings);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Partial<Booking>>({});
  const [selectedRow, setSelectedRow] = useState<Booking | null>(null);

  const startEdit = (booking: Booking) => {
    setEditingId(booking.id);
    setError(null);
    setEditValues({
      first_name: booking.first_name,
      last_name: booking.last_name,
      phone: booking.phone,
      content_type: booking.content_type,
      account_link: booking.account_link,
      location: booking.location,
      content_format: booking.content_format,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValues({});
    setError(null);
  };

  const handleChange = (field: keyof Booking, value: string) => {
    setEditValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async (id: string) => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: editValues.first_name,
          last_name: editValues.last_name,
          phone: editValues.phone,
          content_type: editValues.content_type,
          account_link: editValues.account_link,
          location: editValues.location,
          content_format: editValues.content_format,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Failed to update booking");
      }

      const updated = await res.json();
      setRows((prev) =>
        prev.map((b) => (b.id === id ? { ...b, ...updated } : b)),
      );
      setEditingId(null);
      setEditValues({});
    } catch (e: any) {
      setError(e.message ?? "Failed to update booking");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this booking?")) return;
    setDeletingId(id);
    setError(null);

    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Failed to delete booking");
      }

      setRows((prev) => prev.filter((b) => b.id !== id));
      if (editingId === id) cancelEdit();
    } catch (e: any) {
      setError(e.message ?? "Failed to delete booking");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="overflow-x-auto">
      {error && <p className="px-4 pt-3 text-sm text-red-600">{error}</p>}

      <table className="min-w-full divide-y divide-zinc-200">
        <thead>
          <tr>
            {[
              "Date",
              "First name",
              "Last name",
              "Phone",
              "Content type",
              "Account link",
              "Location",
              "Format",
              "Images",
              "Actions",
            ].map((h) => (
              <th key={h} className="px-4 py-3 text-left text-xs text-white">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-zinc-200">
          {rows.length === 0 ? (
            <tr>
              <td colSpan={10} className="px-4 py-8 text-center text-white">
                No bookings yet.
              </td>
            </tr>
          ) : (
            rows.map((b) => {
              const isEditing = b.id === editingId;

              return (
                <tr key={b.id}>
                  <td className="px-4 py-3 text-white">
                    {new Date(b.created_at).toLocaleString()}
                  </td>

                  <td className="px-4 py-3 text-white">
                    {isEditing ? (
                      <input
                        className="w-full rounded border px-2 py-1 text-black"
                        value={editValues.first_name ?? ""}
                        onChange={(e) =>
                          handleChange("first_name", e.target.value)
                        }
                      />
                    ) : (
                      (b.first_name ?? "—")
                    )}
                  </td>

                  <td className="px-4 py-3 text-white">
                    {isEditing ? (
                      <input
                        className="w-full rounded border px-2 py-1 text-black"
                        value={editValues.last_name ?? ""}
                        onChange={(e) =>
                          handleChange("last_name", e.target.value)
                        }
                      />
                    ) : (
                      (b.last_name ?? "—")
                    )}
                  </td>

                  <td className="px-4 py-3 text-white">
                    {isEditing ? (
                      <input
                        className="w-full rounded border px-2 py-1 text-black"
                        value={editValues.phone ?? ""}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    ) : (
                      (b.phone ?? "—")
                    )}
                  </td>

                  <td className="px-4 py-3 text-white">
                    {b.content_type ?? "—"}
                  </td>

                  <td className="px-4 py-3 text-white">
                    {b.account_link ? (
                      <a
                        href={b.account_link}
                        target="_blank"
                        className="text-blue-400 underline"
                      >
                        Link
                      </a>
                    ) : (
                      "—"
                    )}
                  </td>

                  <td className="px-4 py-3 text-white">{b.location ?? "—"}</td>

                  <td className="px-4 py-3 text-white">
                    {b.content_format ?? "—"}
                  </td>

                  <td className="px-4 py-3">
                    <button
                      onClick={() => setSelectedRow(b)}
                      className="text-blue-400 underline"
                    >
                      View
                    </button>
                  </td>

                  <td className="px-4 py-3">
                    {isEditing ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleSave(b.id)}
                          className="bg-emerald-600 px-3 py-1 text-white rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="bg-gray-300 px-3 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <button onClick={() => startEdit(b)}>Edit</button>
                        <button onClick={() => handleDelete(b.id)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {/* ✅ Modal */}
      {selectedRow && (
        <>
          {/* <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setSelectedRow(null)}
          /> */}
          <div
            className="fixed bg-[#f8f6f2]  rounded-xl shadow-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-3 -right-3 bg-white text-red-500 rounded-full w-8 h-8 flex items-center justify-center shadow"
              onClick={() => setSelectedRow(null)}
            >
              ✕
            </button>

            {selectedRow.images && selectedRow.images.length > 0 ? (
              selectedRow.images.map((img, index) => (
                <div key={index} className="relative w-full h-[200px]">
                  <Image
                    src={img}
                    alt="studio"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No images available
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
