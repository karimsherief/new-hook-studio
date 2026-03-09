"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export function SelectStudioForm() {
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
        first_name: formData.get("first_name") ?? null,
        last_name: formData.get("last_name") ?? null,
        phone: formData.get("phone") ?? null,
        content_type: formData.get("contact_type") ?? null,
        account_link: formData.get("account_link") ?? null,
        content_format: formData.get("service") ?? null,
        location: formData.get("location") ?? null,
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
    <form onSubmit={handleSubmit} className="mt-10 space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-zinc-800">
            Personal Information
          </h3>
          <div>
            <Label htmlFor="first_name" className="text-zinc-600">
              First Name
            </Label>
            <Input
              id="first_name"
              name="first_name"
              placeholder="Enter First Name"
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="last_name" className="text-zinc-600">
              Last Name
            </Label>
            <Input
              id="last_name"
              name="last_name"
              placeholder="Enter Last Name"
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-zinc-600">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="mt-1.5 border-[#033C45] bg-emerald-50/50 focus:border-[#033C45] focus:ring-[#033C45]"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-zinc-800">
            Account Details
          </h3>
          <div>
            <Label htmlFor="contact_type" className="text-zinc-600">
              Contact Type
            </Label>
            <select
              id="contact_type"
              name="contact_type"
              className="mt-1.5 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
            >
              <option value="">Contact Type</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>
          <div>
            <Label htmlFor="account_link" className="text-zinc-600">
              Account Link
            </Label>
            <Input
              id="account_link"
              name="account_link"
              type="url"
              placeholder="https://"
              className="mt-1.5"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4 border-t border-zinc-200 pt-8">
        <h3 className="text-lg font-medium text-zinc-800">Services</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="service" className="text-zinc-600">
              Select A Service
            </Label>
            <div className="relative mt-1.5">
              <select
                id="service"
                name="service"
                className="block w-full appearance-none rounded-lg border border-zinc-300 bg-white px-3 py-2 pr-10 text-zinc-900 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
              >
                <option value="">Choose from available services</option>
                <option value="reels">Reels</option>
                <option value="podcast">Podcast</option>
                <option value="video-editing">Video editing</option>
                <option value="photo-shoot">Photo shoot</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <Label htmlFor="location" className="text-zinc-600">
              Location
            </Label>
            <div className="relative mt-1.5">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <Input
                id="location"
                name="location"
                placeholder="City, Country"
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      {success && (
        <p className="text-sm text-emerald-600">
          Thank you. Your booking has been submitted.
        </p>
      )}

      <div className="flex justify-center pt-4">
        <Button
          type="submit"
          disabled={loading}
          className="min-w-[140px] bg-[#033C45] text-white hover:bg-[#022a31] focus:ring-[#033C45]"
        >
          {loading ? "Submitting…" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
