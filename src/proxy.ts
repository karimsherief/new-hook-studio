import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function proxy(request: NextRequest) {
  const response = await updateSession(request);
  const { pathname } = request.nextUrl;

  // Protect /admin: only admins (checked in layout via requireAdmin)
  // Redirect unauthenticated to login when hitting protected routes
  if (pathname.startsWith("/admin")) {
    const hasSession = request.cookies
      .getAll()
      .some((c) => c.name.startsWith("sb-"));
    if (!hasSession) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("next", pathname);
      const redirectRes = NextResponse.redirect(url);
      response.cookies.getAll().forEach((c) =>
        redirectRes.cookies.set(c.name, c.value, c)
      );
      return redirectRes;
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
