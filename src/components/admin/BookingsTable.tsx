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
      if (editingId === id) {
        cancelEdit();
      }
    } catch (e: any) {
      setError(e.message ?? "Failed to delete booking");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-3 ">
      {error && <p className="px-4 pt-3 text-sm text-red-600 ">{error}</p>}
      <table className="min-w-full divide-y divide-zinc-200">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white ">
              Date
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white ">
              First name
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white ">
              Last name
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white ">
              Phone
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white ">
              Content type
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white ">
              Account link
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white ">
              Location
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white ">
              Format
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white ">
              Images
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white ">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 ">
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={9}
                className="px-4 py-8 text-center text-sm text-white "
              >
                No bookings yet.
              </td>
            </tr>
          ) : (
            rows.map((b) => {
              const isEditing = b.id === editingId;
              return (
                <tr key={b.id}>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-white ">
                    {new Date(b.created_at).toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-white ">
                    {isEditing ? (
                      <input
                        className="w-full rounded border border-zinc-300 bg-white px-2 py-1 text-sm text-white"
                        value={editValues.first_name ?? ""}
                        onChange={(e) =>
                          handleChange("first_name", e.target.value)
                        }
                      />
                    ) : (
                      (b.first_name ?? "—")
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-white ">
                    {isEditing ? (
                      <input
                        className="w-full rounded border border-zinc-300 bg-white px-2 py-1 text-sm text-white"
                        value={editValues.last_name ?? ""}
                        onChange={(e) =>
                          handleChange("last_name", e.target.value)
                        }
                      />
                    ) : (
                      (b.last_name ?? "—")
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-white ">
                    {isEditing ? (
                      <input
                        className="w-full rounded border border-zinc-300 bg-white px-2 py-1 text-sm text-white"
                        value={editValues.phone ?? ""}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    ) : (
                      (b.phone ?? "—")
                    )}
                  </td>
                  <td className="max-w-40 px-4 py-3 text-sm text-white ">
                    {isEditing ? (
                      <input
                        className="w-full rounded border border-zinc-300 bg-white px-2 py-1 text-sm text-white"
                        value={editValues.content_type ?? ""}
                        onChange={(e) =>
                          handleChange("content_type", e.target.value)
                        }
                      />
                    ) : (
                      <span className="block truncate">
                        {b.content_type ?? "—"}
                      </span>
                    )}
                  </td>
                  <td className="max-w-48 px-4 py-3 text-sm text-white ">
                    {isEditing ? (
                      <input
                        className="w-full rounded border border-zinc-300 bg-white px-2 py-1 text-sm text-white"
                        value={editValues.account_link ?? ""}
                        onChange={(e) =>
                          handleChange("account_link", e.target.value)
                        }
                      />
                    ) : b.account_link ? (
                      <a
                        href={b.account_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block truncate text-violet-600 hover:underline "
                      >
                        {b.account_link}
                      </a>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-white ">
                    {isEditing ? (
                      <select
                        className="w-full rounded border border-zinc-300 bg-white px-2 py-1 text-sm text-white"
                        value={editValues.location ?? ""}
                        onChange={(e) =>
                          handleChange("location", e.target.value)
                        }
                      >
                        <option value="">Select…</option>
                        {LOCATIONS.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    ) : (
                      (b.location ?? "—")
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-white ">
                    {isEditing ? (
                      <select
                        className="w-full rounded border border-zinc-300 bg-white px-2 py-1 text-sm text-white"
                        value={editValues.content_format ?? ""}
                        onChange={(e) =>
                          handleChange("content_format", e.target.value)
                        }
                      >
                        <option value="">Select…</option>
                        {FORMATS.map((fmt) => (
                          <option key={fmt} value={fmt}>
                            {fmt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      (b.content_format ?? "—")
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-white ">
                    <button onClick={() => setSelectedRow(b)}>View</button>
                    {selectedRow && (
                      <div
                        className="fixed flex items-center justify-center top-1/2 left-1/2 z-50 w-full h-full bg-[rgba(0,0,0,.5)] -translate-x-1/2 -translate-y-1/2"
                        onClick={() => setSelectedRow(null)}
                      >
                        <div className="bg-[#f8f6f2] relative p-5 rounded-md shadow-[0_12px_40px_rgba(15,62,71,0.08)] grid items-center justify-center content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                          <span
                            className="absolute text-red-500 font-bold text-2xl bg-white/55 cursor-pointer px-3 py-1 rounded-md -right-10 -top-10"
                            onClick={() => setSelectedRow(null)}
                          >
                            X
                          </span>
                          {selectedRow.images?.map((img, index) => (
                            <Image
                              key={index}
                              width={250}
                              height={250}
                              alt="studio"
                              src={img}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-white ">
                    {isEditing ? (
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleSave(b.id)}
                          disabled={saving}
                          className="rounded bg-emerald-600 px-3 py-1 text-xs font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
                        >
                          {saving ? "Saving…" : "Save"}
                        </button>
                        <button
                          type="button"
                          onClick={cancelEdit}
                          className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-800 hover:bg-zinc-300"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => startEdit(b)}
                          className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-800 hover:bg-zinc-300"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(b.id)}
                          disabled={deletingId === b.id}
                          className="rounded bg-red-600 px-3 py-1 text-xs font-medium text-white hover:bg-red-700 disabled:opacity-60"
                        >
                          {deletingId === b.id ? "Deleting…" : "Delete"}
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
    </div>
  );
}
