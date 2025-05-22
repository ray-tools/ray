import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json(
      {
        success: false,
        message: "Missing fields",
      },
      { status: 400 }
    );
  }

  const existing = prisma.user.findUnique({ where: { username } });

  if (!existing) {
    return NextResponse.json(
      {
        success: false,
        message: "Username unavailable",
      },
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { username, password: hashedPassword },
  });

  return NextResponse.json(
    {
      success: true,
      user: {
        id: user.id,
        username: user.username,
      },
    },
    { status: 201 }
  );
};
