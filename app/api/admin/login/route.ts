import { createSession, destroySession, safeEqual } from "../../../../lib/auth";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { email, password } = await req.json().catch(() => ({}));
  const E = process.env.ADMIN_EMAIL, PW = process.env.ADMIN_PASSWORD;
  if (!E || !PW || (process.env.AUTH_SECRET || "").length < 32)
    return Response.json({ error: "Admin login is not configured on the server." }, { status: 500 });
  const ok = typeof email === "string" && typeof password === "string" && safeEqual(email, E) && safeEqual(password, PW);
  if (!ok) {
    await new Promise((r) => setTimeout(r, 600));
    return Response.json({ error: "Wrong email or password." }, { status: 401 });
  }
  await createSession();
  return Response.json({ ok: true });
}
export async function DELETE() {
  destroySession();
  return Response.json({ ok: true });
}
