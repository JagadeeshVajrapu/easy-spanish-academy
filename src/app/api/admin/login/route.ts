import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import {
  createAdminSessionToken,
  getAdminCredentials,
  setAdminSessionCookie,
} from "@/lib/admin-auth";

function safeEqual(a: string, b: string) {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return timingSafeEqual(aBuf, bBuf);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { username?: string; password?: string };
    const username = body.username?.trim() ?? "";
    const password = body.password ?? "";
    const creds = getAdminCredentials();

    if (!safeEqual(username, creds.username) || !safeEqual(password, creds.password)) {
      return NextResponse.json(
        { error: "Invalid username or password." },
        { status: 401 },
      );
    }

    const token = await createAdminSessionToken(creds.username);
    await setAdminSessionCookie(token);

    return NextResponse.json({ ok: true, username: creds.username });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Login failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
