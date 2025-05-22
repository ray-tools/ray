import { NextResponse } from "next/server";

export const POST = async () => {
  const res = NextResponse.json({ success: true });

  res.cookies.set("ray-auth", "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
  });

  return res;
};
