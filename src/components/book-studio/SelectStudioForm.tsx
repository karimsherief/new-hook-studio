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
    const urls: string[] = [];
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
    "rounded-[32px] border border-[#1F4E52]/10 bg-white/80 shadow-[0_24px_70px_rgba(31,78,82,0.08)] backdrop-blur-xl";

  const sectionClass =
    "rounded-[26px] border border-[#1F4E52]/10 bg-[#FFFEFC] p-5 md:p-6 shadow-[0_10px_30px_rgba(31,78,82,0.04)]";

  const inputClass =
    "h-12 w-full rounded-[16px] border border-[#1F4E52]/12 bg-[#F8F7F3] px-4 text-sm text-[#163E42] outline-none transition-all duration-200 placeholder:text-[#1F4E52]/35 focus:border-[#1F4E52]/30 focus:bg-white focus:ring-4 focus:ring-[#E8CFA4]/20";

  const badgeClass =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#1F4E52] text-[11px] font-semibold text-white shadow-[0_10px_20px_rgba(31,78,82,0.18)]";

  const stepClass =
    "rounded-[22px] border border-[#1F4E52]/10 bg-white/85 p-4 shadow-[0_10px_30px_rgba(31,78,82,0.05)] backdrop-blur-xl";

  const infoCardClass =
    "rounded-[20px] border border-white/10 bg-white/5 p-4 backdrop-blur-md";

  return (
    <section className="relative overflow-hidden bg-[#F6F3ED] py-12 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,78,82,0.08),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(232,207,164,0.18),transparent_22%),linear-gradient(180deg,#F6F3ED_0%,#F3F0E9_100%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#1F4E52_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#E8CFA4]/70 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B99458]">
            Studio Booking
          </span>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#143B3F] md:text-5xl">
            Build your perfect studio setup
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#1F4E52]/70 md:text-base">
            A refined booking experience designed for brands and creators who
            want a clear, premium, and modern production flow.
          </p>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className={stepClass}>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F4E52] text-xs font-semibold text-white">
                01
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C3A067]">
                  Personal
                </p>
                <p className="mt-1 text-sm font-medium text-[#143B3F]">
                  Add your contact details
                </p>
              </div>
            </div>
          </div>

          <div className={stepClass}>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F4E52] text-xs font-semibold text-white">
                02
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C3A067]">
                  Content
                </p>
                <p className="mt-1 text-sm font-medium text-[#143B3F]">
                  Select content and account info
                </p>
              </div>
            </div>
          </div>

          <div className={stepClass}>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F4E52] text-xs font-semibold text-white">
                03
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C3A067]">
                  Setup
                </p>
                <p className="mt-1 text-sm font-medium text-[#143B3F]">
                  Confirm location and service
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <aside className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(180deg,#123E43_0%,#0E3236_100%)] p-6 text-white shadow-[0_22px_70px_rgba(31,78,82,0.18)] md:p-8">
              <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-[#E8CFA4]/10 blur-3xl" />
              <div className="absolute -left-8 bottom-0 h-44 w-44 rounded-full bg-white/5 blur-3xl" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-medium text-[#E8CFA4]">
                  Booking Guide
                </span>

                <h2 className="mt-5 text-[30px] font-semibold leading-[1.08] tracking-tight md:text-[40px]">
                  Shape your booking in a way that fits your content goals
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/74">
                  Tell us about your project, choose your service, and select
                  the studio style that matches your production direction.
                </p>

                <div className="mt-8 space-y-3">
                  <div className={infoCardClass}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8CFA4]">
                      Personal Details
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/82">
                      Add your basic information so our team can contact you and
                      confirm your request.
                    </p>
                  </div>

                  <div className={infoCardClass}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8CFA4]">
                      Content Brief
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/82">
                      Share your content type, brand link, and preferred service
                      so we understand your production needs.
                    </p>
                  </div>

                  <div className={infoCardClass}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8CFA4]">
                      Studio Match
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/82">
                      Choose the location and studio setup that best fits the
                      style of your content.
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            <div className={`${shellClass} p-4 md:p-6`}>
              <div className="space-y-5">
                <div className={sectionClass}>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C3A067]">
                        Personal Information
                      </p>
                      <h3 className="mt-1 text-[22px] font-semibold tracking-tight text-[#143B3F]">
                        Basic contact details
                      </h3>
                    </div>
                    <div className={badgeClass}>01</div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label
                        htmlFor="first_name"
                        className="mb-2 block text-sm font-medium text-[#143B3F]"
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
                        className="mb-2 block text-sm font-medium text-[#143B3F]"
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
                        className="mb-2 block text-sm font-medium text-[#143B3F]"
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
                          e.target.value = e.target.value.replace(/[^0-9]/g, "");
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
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C3A067]">
                        Account Details
                      </p>
                      <h3 className="mt-1 text-[22px] font-semibold tracking-tight text-[#143B3F]">
                        Brand and content information
                      </h3>
                    </div>
                    <div className={badgeClass}>02</div>
                  </div>

                  <div className="grid gap-4">
                    <div>
                      <Label
                        htmlFor="contact_type"
                        className="mb-2 block text-sm font-medium text-[#143B3F]"
                      >
                        Content Type
                      </Label>
                      <select
                        id="contact_type"
                        name="contact_type"
                        className={inputClass}
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select content type
                        </option>
                        <option value="products">Products</option>
                        <option value="education">Education</option>
                        <option value="others">Others</option>
                      </select>
                    </div>

                    <div>
                      <Label
                        htmlFor="account_link"
                        className="mb-2 block text-sm font-medium text-[#143B3F]"
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
              <div className={`${shellClass} p-4 md:p-5`}>
                <div className="space-y-5">
                  <div className={sectionClass}>
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C3A067]">
                          Booking Setup
                        </p>
                        <h3 className="mt-1 text-[22px] font-semibold tracking-tight text-[#143B3F]">
                          Choose location and service
                        </h3>
                      </div>
                      <div className={badgeClass}>03</div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <Label
                          htmlFor="location"
                          className="mb-2 block text-sm font-medium text-[#143B3F]"
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
                          value={locationType}
                          required
                        >
                          <option value="" disabled>
                            Select location type
                          </option>
                          <option value="indoor">Indoor</option>
                          <option value="outdoor">Outdoor</option>
                        </select>
                      </div>

                      {locationType === "indoor" && (
                        <div>
                          <Label
                            htmlFor="service"
                            className="mb-2 block text-sm font-medium text-[#143B3F]"
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
                            value={selectedService}
                            required
                          >
                            <option value="" disabled>
                              Choose from available services
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
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C3A067]">
                              Studio Selection
                            </p>
                            <h3 className="mt-1 text-[22px] font-semibold tracking-tight text-[#143B3F]">
                              Choose your preferred studio setup
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#1F4E52]/65">
                              Select one or more studios that align with your
                              content style and production direction.
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

                        {selectedStudios.length === 0 && (
                          <p className="mt-3 text-sm font-medium text-red-600">
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
                    className="h-14 w-full cursor-pointer rounded-[18px] bg-[linear-gradient(135deg,#1F4E52_0%,#285F64_100%)] text-sm font-semibold text-white shadow-[0_14px_30px_rgba(31,78,82,0.16)] transition hover:scale-[1.01] hover:shadow-[0_18px_35px_rgba(31,78,82,0.2)] disabled:cursor-not-allowed disabled:opacity-70"
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