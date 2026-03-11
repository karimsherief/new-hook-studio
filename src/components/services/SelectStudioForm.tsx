"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { StudioGrid } from "./StudioGrid";

export function SelectStudioForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [selectedService, setSelectedService] = useState("");
  const [selectedStudios, setSelectedStudios] = useState<number[]>([]);
  const [locationType, setLocationType] = useState("");

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
    setSelectedService("");
    setLocationType("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-8">

      {/* PERSONAL INFO */}
      <div className="grid gap-8 sm:grid-cols-2">

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-zinc-800">
            Personal Information
          </h3>

          <div>
            <Label htmlFor="first_name">First Name</Label>
            <Input id="first_name" name="first_name" placeholder="Enter First Name" />
          </div>

          <div>
            <Label htmlFor="last_name">Last Name</Label>
            <Input id="last_name" name="last_name" placeholder="Enter Last Name" />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>

            <Input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Phone Number"
              maxLength={11}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              className="mt-1.5 border-[#033C45] bg-emerald-50/50"
            />
          </div>

        </div>

        {/* ACCOUNT DETAILS */}
        <div className="space-y-4">

          <h3 className="text-lg font-medium text-zinc-800">
            Account Details
          </h3>

          <div>
            <Label htmlFor="contact_type">Content Type</Label>

            <select
              id="contact_type"
              name="contact_type"
              className="mt-1.5 block w-full rounded-lg border border-zinc-300 px-3 py-2"
            >
              <option value="">Content Type</option>
              <option value="products">Products</option>
              <option value="education">Education</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <Label htmlFor="account_link">Account Link</Label>

            <Input
              id="account_link"
              name="account_link"
              type="url"
              placeholder="https://"
            />
          </div>

        </div>

      </div>

      {/* LOCATION TYPE */}
      <div className="space-y-4 border-t border-zinc-200 pt-8">

        <h3 className="text-lg font-medium text-zinc-800">
          Location
        </h3>

        <div>

          <Label htmlFor="location">Location Type</Label>

          <select
            id="location"
            name="location"
            onChange={(e) => setLocationType(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-zinc-300 px-3 py-2"
          >
            <option value="">Select location type</option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </select>

        </div>

      </div>

      {/* SERVICE (SHOW ONLY IF INDOOR) */}
      {locationType === "indoor" && (

        <div className="space-y-4">

          <Label htmlFor="service">Select A Service</Label>

          <select
            id="service"
            name="service"
            onChange={(e) => setSelectedService(e.target.value)}
            className="block w-full rounded-lg border border-zinc-300 px-3 py-2"
          >
            <option value="">Choose from available services</option>
            <option value="reels">Reels</option>
            <option value="podcast">Podcast</option>
            <option value="video-editing">Video editing</option>
            <option value="photo-shoot">Photo shoot</option>
          </select>

        </div>

      )}

      {/* STUDIO GRID */}
      {locationType === "indoor" &&
        (selectedService === "reels" || selectedService === "podcast") && (

          <StudioGrid
            service={selectedService}
            selectedStudios={selectedStudios}
            setSelectedStudios={setSelectedStudios}
          />

        )}

      {/* ERROR */}
      {error && <p className="text-red-600 text-sm">{error}</p>}

      {/* SUCCESS */}
      {success && (
        <p className="text-emerald-600 text-sm">
          Thank you. Your booking has been submitted.
        </p>
      )}

      {/* SUBMIT */}
      <div className="flex justify-center pt-4">

        <Button
          type="submit"
          disabled={loading}
          className="min-w-[140px] bg-[#033C45] text-white hover:bg-[#022a31]"
        >
          {loading ? "Submitting…" : "Submit"}
        </Button>

      </div>

    </form>
  );
}