"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export function PublicForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: formData.get("first_name") || null,
        last_name: formData.get("last_name") || null,
        phone: formData.get("phone") || null,
        content_type: formData.get("content_type") || null,
        account_link: formData.get("account_link") || null,
        location: formData.get("location") || null,
        content_format: formData.get("content_format") || null,
      }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error ?? "Failed to submit");
      return;
    }
    setSuccess(true);
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-[#f1f1f1] rounded-md"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col bg-[#ddd] p-5 rounded-md">
          <h2 className="font-bold text-2xl text-[#033C45]">
            Personal Details
          </h2>
          <div>
            <Label htmlFor="first_name">
              First name <span className="text-red-600">*</span>
            </Label>
            <Input
              id="first_name"
              name="first_name"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="last_name">
              Last name <span className="text-red-600">*</span>
            </Label>
            <Input id="last_name" name="last_name" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="phone">
              Phone <span className="text-red-600">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              className="mt-1"
            />
          </div>
        </div>
        <div className="flex flex-col bg-[#ddd] p-5 rounded-md">
          <h2 className="font-bold text-2xl text-[#033C45]">Content Details</h2>
          <div>
            <div>
              <Label htmlFor="content_type">
                Content type <span className="text-red-600">*</span>
              </Label>
              <Input
                id="content_type"
                name="content_type"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="account_link">
                Account link <span className="text-red-600">*</span>
              </Label>
              <Input
                id="account_link"
                name="account_link"
                type="text"
                required
                className="mt-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#ddd] p-5 rounded-md">
        <h2 className="font-bold text-2xl text-[#033C45]">Service Details</h2>
        <div>
          <Label htmlFor="content_format">
            Content format <span className="text-red-600">*</span>
          </Label>
          <select
            id="content_format"
            name="content_format"
            required
            className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 "
          >
            <option value="">Select…</option>
            <option value="reels">Reels</option>
            <option value="podcast">Podcast</option>
            <option value="video editing">Video editing</option>
          </select>
        </div>
        <div>
          <Label htmlFor="location">
            Location <span className="text-red-600">*</span>
          </Label>
          <select
            id="location"
            name="location"
            required
            className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
          >
            <option value="">Select…</option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </select>
        </div>
      </div>
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      {success && (
        <p className="text-sm text-green-600 dark:text-green-400">
          Thank you. Your booking has been submitted.
        </p>
      )}
      <Button type="submit" disabled={loading}>
        {loading ? "Submitting…" : "Submit"}
      </Button>
    </form>
  );
}
