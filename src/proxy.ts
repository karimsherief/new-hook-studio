import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  const intlResponse = intlMiddleware(request);

  if (intlResponse) return intlResponse;

  return await updateSession(request);
}

export const config = {
  matcher: ["/", "/(en|ar)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
