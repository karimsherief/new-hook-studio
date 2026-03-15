"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { StudioGrid } from "./StudioGrid";
import { createClient } from "@/lib/supabase/client";

export function SelectStudioForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedStudios, setSelectedStudios] = useState<string[]>([]);
  const [locationType, setLocationType] = useState("");

  // const getImages = async () => {
  //   const supabase = createClient();
  //   const { data, error: reelsError } = await supabase.storage
  //     .from("booking-images")
  //     .list("podcast");

    

  //   return [];
  // };

  // const media = getImages();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!locationType) {
      setError("Please select a location type.");
      return;
    }

    if (locationType === "indoor" && !selectedService) {
      setError("Please select a service.");
      return;
    }

    if (
      locationType === "indoor" &&
      (selectedService === "reels" || selectedService === "podcast") &&
      selectedStudios.length === 0
    ) {
      setError("Please select at least one studio.");
      return;
    }

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const imageUrls = await handleImages(selectedStudios);

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
        images: imageUrls ?? null,
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
    setSelectedStudios([]);
    setSelectedService("");
    setLocationType("");
  };

  const handleImages = async (files: string[]) => {
    const urls = [];
    const supabase = createClient();

    for (const file of files) {
      const { data: publicUrl } = supabase.storage
        .from("booking-images")
        .getPublicUrl(file);
      urls.push(publicUrl.publicUrl);
    }

    return urls;
  };

  const shellClass =
    "rounded-[32px] border border-[#0F3E47]/8 bg-white/95 shadow-[0_20px_60px_rgba(15,62,71,0.08)]";
  const sectionClass =
    "rounded-[24px] border border-[#0F3E47]/8 bg-[#FCFBF8] p-5 md:p-6";
  const inputClass =
    "h-12 w-full rounded-[16px] border border-[#0F3E47]/10 bg-white px-4 text-sm text-[#0F3E47] outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-[#0F3E47]/25 focus:ring-4 focus:ring-[#EAD8B7]/25";
  const badgeClass =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0F3E47] text-[11px] font-semibold text-white";
  const stepClass = "rounded-[18px] border border-[#0F3E47]/8 bg-white p-4";

  return (
    <section className="bg-[#F7F4EE] py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#0F3E47]/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A66B]">
            Studio Booking
          </span>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#0F3E47] md:text-5xl">
            Select Your Studio
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#0F3E47]/65 md:text-base">
            A modern booking flow designed to feel simple, premium, and easy to
            complete.
          </p>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className={stepClass}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F3E47] text-xs font-semibold text-white">
                01
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A66B]">
                  Personal
                </p>
                <p className="mt-1 text-sm font-medium text-[#0F3E47]">
                  Add contact details
                </p>
              </div>
            </div>
          </div>

          <div className={stepClass}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F3E47] text-xs font-semibold text-white">
                02
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A66B]">
                  Content
                </p>
                <p className="mt-1 text-sm font-medium text-[#0F3E47]">
                  Choose service type
                </p>
              </div>
            </div>
          </div>

          <div className={stepClass}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F3E47] text-xs font-semibold text-white">
                03
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A66B]">
                  Booking
                </p>
                <p className="mt-1 text-sm font-medium text-[#0F3E47]">
                  Confirm your setup
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
            <aside className="rounded-4xl bg-[#0F3E47] p-6 text-white shadow-[0_20px_60px_rgba(15,62,71,0.14)] md:p-8">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90">
                Booking Guide
              </span>

              <h2 className="mt-5 text-[30px] font-semibold leading-[1.08] tracking-tight md:text-[38px]">
                Book your studio with a clean and modern flow
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/74">
                Tell us about your content, choose your service, and select the
                studio setup that fits your production goals.
              </p>

              <div className="mt-8 space-y-3">
                <div className="rounded-[20px] border border-white/12 bg-white/10 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F4E2C3]">
                    Personal Details
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/82">
                    Add your name and phone number so we can contact you.
                  </p>
                </div>

                <div className="rounded-[20px] border border-white/12 bg-white/10 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F4E2C3]">
                    Content Information
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/82">
                    Share your content type, brand link, and preferred service.
                  </p>
                </div>

                <div className="rounded-[20px] border border-white/12 bg-white/10 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F4E2C3]">
                    Studio Selection
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/82">
                    Choose the location and the studio setup that matches your
                    content.
                  </p>
                </div>
              </div>
            </aside>

            <div className={`${shellClass} p-4 md:p-6`}>
              <div className="space-y-5">
                <div className={sectionClass}>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A66B]">
                        Personal Information
                      </p>
                      <h3 className="mt-1 text-[22px] font-semibold tracking-tight text-[#0F3E47]">
                        Basic contact details
                      </h3>
                    </div>
                    <div className={badgeClass}>01</div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label
                        htmlFor="first_name"
                        className="mb-2 block text-sm font-medium text-[#0F3E47]"
                      >
                        First Name
                      </Label>
                      <Input
                        id="first_name"
                        name="first_name"
                        placeholder="Enter first name"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="last_name"
                        className="mb-2 block text-sm font-medium text-[#0F3E47]"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="last_name"
                        name="last_name"
                        placeholder="Enter last name"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-[#0F3E47]"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="Phone number"
                        maxLength={11}
                        onChange={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            "",
                          );
                        }}
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className={sectionClass}>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A66B]">
                        Account Details
                      </p>
                      <h3 className="mt-1 text-[22px] font-semibold tracking-tight text-[#0F3E47]">
                        Brand and content information
                      </h3>
                    </div>
                    <div className={badgeClass}>02</div>
                  </div>

                  <div className="grid gap-4">
                    <div>
                      <Label
                        htmlFor="contact_type"
                        className="mb-2 block text-sm font-medium text-[#0F3E47]"
                      >
                        Content Type
                      </Label>
                      <select
                        id="contact_type"
                        name="contact_type"
                        className={inputClass}
                        required
                      >
                        <option value="">Select content type</option>
                        <option value="products">Products</option>
                        <option value="education">Education</option>
                        <option value="others">Others</option>
                      </select>
                    </div>

                    <div>
                      <Label
                        htmlFor="account_link"
                        className="mb-2 block text-sm font-medium text-[#0F3E47]"
                      >
                        Account Link
                      </Label>
                      <Input
                        id="account_link"
                        name="account_link"
                        type="url"
                        placeholder="https://"
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className={`${shellClass} p-4 md:p-4`}>
                <div className="space-y-5">
                  <div className={sectionClass}>
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A66B]">
                          Booking Setup
                        </p>
                        <h3 className="mt-1 text-[22px] font-semibold tracking-tight text-[#0F3E47]">
                          Choose location and service
                        </h3>
                      </div>
                      <div className={badgeClass}>03</div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label
                          htmlFor="location"
                          className="mb-2 block text-sm font-medium text-[#0F3E47]"
                        >
                          Location Type
                        </Label>
                        <select
                          id="location"
                          name="location"
                          onChange={(e) => {
                            setLocationType(e.target.value);
                            setSelectedStudios([]);
                            setSelectedService("");
                          }}
                          className={inputClass}
                          defaultValue={locationType}
                          required
                        >
                          <option selected disabled>
                            --- Select location type ---
                          </option>
                          <option value="indoor">Indoor</option>
                          <option value="outdoor">Outdoor</option>
                        </select>
                      </div>

                      {locationType === "indoor" && (
                        <div>
                          <Label
                            htmlFor="service"
                            className="mb-2 block text-sm font-medium text-[#0F3E47]"
                          >
                            Select Service
                          </Label>
                          <select
                            id="service"
                            name="service"
                            onChange={(e) => {
                              setSelectedService(e.target.value);
                              setSelectedStudios([]);
                            }}
                            className={inputClass}
                            defaultValue={selectedService}
                            required
                          >
                            <option value="" selected disabled>
                              --- Choose from available services ---
                            </option>
                            <option value="reels">Reels</option>
                            <option value="podcast">Podcast</option>
                            <option value="video-editing">Video editing</option>
                            <option value="photo-shoot">Photo shoot</option>
                          </select>
                        </div>
                      )}
                    </div>
                  </div>

                  {locationType === "indoor" &&
                    (selectedService === "reels" ||
                      selectedService === "podcast") && (
                      <div className={sectionClass}>
                        <div className="mb-5 flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A66B]">
                              Studio Selection
                            </p>
                            <h3 className="mt-1 text-[22px] font-semibold tracking-tight text-[#0F3E47]">
                              Choose your preferred studio setup
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#0F3E47]/60">
                              Select one or more studios that match your content
                              style and production needs.
                            </p>
                          </div>
                          <div className={badgeClass}>04</div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          <StudioGrid
                            selectedService={selectedService}
                            selectedStudios={selectedStudios}
                            setSelectedStudios={setSelectedStudios}
                          />
                        </div>
                        {locationType === "indoor" &&
                          (selectedService === "reels" ||
                            selectedService === "podcast") &&
                          selectedStudios.length === 0 && (
                            <p className="mt-3 text-sm text-red-600">
                              Please select at least one studio.
                            </p>
                          )}
                      </div>
                    )}

                  {error && (
                    <div className="rounded-[18px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                      {error}
                    </div>
                  )}

                  {success && (
                    <div className="rounded-[18px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                      Thank you. Your booking has been submitted.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="h-14 w-full cursor-pointer rounded-[18px] bg-[#0F3E47] text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,62,71,0.14)] transition hover:bg-[#0c3740] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? "Submitting..." : "Book Service"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
