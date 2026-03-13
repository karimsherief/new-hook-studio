import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  let body: {
    first_name?: string | null;
    last_name?: string | null;
    phone?: string | null;
    content_type?: string | null;
    account_link?: string | null;
    location?: string | null;
    content_format?: string | null;
    images?: string[] | null
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const supabase = await createClient();
  const { error } = await supabase.from("booking").insert({
    first_name: body.first_name ?? null,
    last_name: body.last_name ?? null,
    phone: body.phone ?? null,
    content_type: body.content_type ?? null,
    account_link: body.account_link ?? null,
    location: body.location ?? null,
    content_format: body.content_format ?? null,
    images: body.images ?? null
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
