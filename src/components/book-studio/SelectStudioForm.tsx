"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { StudioGrid } from "./StudioGrid";
import { createClient } from "@/lib/supabase/client";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Clapperboard,
  Send,
} from "lucide-react";

export function SelectStudioForm() {
  const t = useTranslations("BookingForm");
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [selectedStudios, setSelectedStudios] = useState<string[]>([]);
  const [selectedService, setSelectedService] = useState(
    searchParams.get("service") || "",
  );
  const [locationType, setLocationType] = useState(
    searchParams.get("location") || "",
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setError("");
    setSuccess(false);

    if (!locationType) {
      setError(t("ErrorNoLocation"));
      return;
    }

    if (locationType === "indoor" && !selectedService) {
      setError(t("ErrorNoService"));
      return;
    }

    if (
      locationType === "indoor" &&
      (selectedService === "reels" || selectedService === "podcast") &&
      selectedStudios.length === 0
    ) {
      setError(t("ErrorNoStudio"));
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
        content_type: formData.get("content_type") ?? null,
        account_link: formData.get("account_link") ?? null,
        content_format: formData.get("service") ?? null,
        location: formData.get("location") ?? null,
        images: imageUrls ?? null,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error ?? t("FailedToSubmit"));
      return;
    }

    setSuccess(true);
    form.reset();
    setSelectedStudios([]);
    setSelectedService("");
    setLocationType("");
    setSubmitted(false);
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

  const inputClass =
    "h-14 w-full rounded-2xl border border-white/12 bg-white/8 pl-11 pr-4 text-sm text-white placeholder:text-white/45 outline-none backdrop-blur-md transition-all duration-200 focus:border-[#E8CFA4]/50 focus:bg-white/10 focus:ring-4 focus:ring-[#E8CFA4]/10";

  const selectClass =
    "h-14 w-full appearance-none rounded-2xl border border-white/12 bg-white/8 pl-11 pr-10 text-sm text-white outline-none backdrop-blur-md transition-all duration-200 focus:border-[#E8CFA4]/50 focus:bg-white/10 focus:ring-4 focus:ring-[#E8CFA4]/10";

  const cardClass =
    "rounded-[28px] border border-white/10 bg-white/[0.04]  backdrop-blur-2xl";

  const badgeClass =
    "inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#B99458_0%,#E8CFA4_100%)] px-4 py-2 text-sm font-semibold text-[#143B3F] shadow-[0_12px_30px_rgba(185,148,88,0.28)]";

  return (
    <section className="relative overflow-hidden">
      <div className={`${cardClass} overflow-hidden`}>
        <div className="">
          <div className="p-6 md:p-10 lg:p-12">
            <div className="max-w-2xl">
              <span className={badgeClass}>
                <Mail className="h-4 w-4" />
                {t("Badge")}
              </span>

              <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[#F8F5EF] md:text-5xl">
                {t("Title")}
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#F6F1E8]/68 md:text-base">
                {t("Subtitle")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label
                    htmlFor="first_name"
                    className="mb-2 block text-sm font-medium text-[#F8F5EF]"
                  >
                    {t("FirstName")}
                  </Label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#E8CFA4]/85" />
                    <Input
                      id="first_name"
                      name="first_name"
                      placeholder={t("FirstNamePlaceholder")}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="last_name"
                    className="mb-2 block text-sm font-medium text-[#F8F5EF]"
                  >
                    {t("LastName")}
                  </Label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#E8CFA4]/85" />
                    <Input
                      id="last_name"
                      name="last_name"
                      placeholder={t("LastNamePlaceholder")}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-[#F8F5EF]"
                >
                  {t("Phone")}
                </Label>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#E8CFA4]/85" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t("PhonePlaceholder")}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label
                    htmlFor="location"
                    className="mb-2 block text-sm font-medium text-[#F8F5EF]"
                  >
                    {t("LocationType")}
                  </Label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-[#E8CFA4]/85" />
                    <select
                      id="location"
                      name="location"
                      value={locationType}
                      onChange={(e) => {
                        setLocationType(e.target.value);
                        setSelectedStudios([]);
                        setSelectedService("");
                      }}
                      className={selectClass}
                      required
                    >
                      <option value="" disabled className="text-black">
                        {t("SelectLocationType")}
                      </option>
                      <option value="indoor" className="text-black">
                        {t("Indoor")}
                      </option>
                      <option value="outdoor" className="text-black">
                        {t("Outdoor")}
                      </option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-[#E8CFA4]" />
                  </div>
                </div>

                {locationType === "indoor" && (
                  <div>
                    <Label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-[#F8F5EF]"
                    >
                      {t("SelectService")}
                    </Label>
                    <div className="relative">
                      <Clapperboard className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-[#E8CFA4]/85" />
                      <select
                        id="service"
                        name="service"
                        value={selectedService}
                        onChange={(e) => {
                          setSelectedService(e.target.value);
                          setSelectedStudios([]);
                        }}
                        className={selectClass}
                        required
                      >
                        <option value="" disabled className="text-black">
                          {t("ChooseService")}
                        </option>
                        <option value="reels" className="text-black">
                          {t("Reels")}
                        </option>
                        <option value="podcast" className="text-black">
                          {t("Podcast")}
                        </option>
                        <option value="video-editing" className="text-black">
                          {t("VideoEditing")}
                        </option>
                        <option value="photo-shoot" className="text-black">
                          {t("PhotoShoot")}
                        </option>
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-[#E8CFA4]" />
                    </div>
                  </div>
                )}
              </div>

              {locationType === "indoor" &&
                (selectedService === "reels" ||
                  selectedService === "podcast") && (
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-4 md:p-5">
                    <div className="mb-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E8CFA4]">
                        {t("StudioSelection")}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-[#F8F5EF]">
                        {t("ChooseStudio")}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#F6F1E8]/65">
                        {t("SelectOneOrMore")}
                      </p>
                    </div>

                    <StudioGrid
                      selectedService={selectedService}
                      selectedStudios={selectedStudios}
                      setSelectedStudios={setSelectedStudios}
                    />

                    {submitted && selectedStudios.length === 0 && (
                      <p className="mt-3 text-sm font-medium text-red-300">
                        {t("ErrorNoStudio")}
                      </p>
                    )}
                  </div>
                )}

              {error && (
                <div className="rounded-2xl border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-200">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-200">
                  {t("SuccessMessage")}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#B99458_0%,#D7BA84_100%)] px-6 text-sm font-semibold text-[#143B3F] shadow-[0_16px_40px_rgba(185,148,88,0.28)] transition duration-200 hover:translate-y-[-1px] hover:shadow-[0_22px_45px_rgba(185,148,88,0.34)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {loading ? t("Submitting") : t("BookService")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
