import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  const { username, password } = await req.json();
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid credentials",
      },
      { status: 401 }
    );
  }

  const psswrdIsValid = await bcrypt.compare(password, user.password);

  if (!psswrdIsValid) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid credentials",
      },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ success: true });

  res.cookies.set("ray-auth", "valid-token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  return res;
};
