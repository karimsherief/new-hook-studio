import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  // Supabase session handling is disabled for now so that the app
  // can run without Supabase environment variables.
  return NextResponse.next({
    request: { headers: request.headers },
  });
}