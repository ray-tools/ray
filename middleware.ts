import { NextRequest, NextResponse } from "next/server";

const protectedRouts = ["/home", "/dashboard", "/habits", "/insights"];

export const middleware = (req: NextRequest) => {
  const isProtected = protectedRouts.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );
  const token = req.cookies.get("ray-auth")?.value;

  if (isProtected && !token) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/home/:path*",
    "/dashboard/:path*",
    "/habits/:path*",
    "/insights/:path*",
  ],
};
