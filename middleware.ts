import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const localePaths = ["/de", "/fr", "/nl"];

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const destination = pathname === "/en" ? "/" : pathname.replace(/^\/en/, "");
    const url = request.nextUrl.clone();
    url.pathname = destination || "/";
    url.search = search;
    return NextResponse.redirect(url, 301);
  }

  const matchedLocale = localePaths.find((locale) => pathname === locale || pathname.startsWith(`${locale}/`));

  if (!matchedLocale) {
    return NextResponse.next();
  }

  const locale = matchedLocale.slice(1);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-oas-locale", locale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });

  response.headers.set("Content-Language", locale);

  return response;
}

export const config = {
  matcher: ["/en", "/en/:path*", "/de", "/de/:path*", "/fr", "/fr/:path*", "/nl", "/nl/:path*"]
};
