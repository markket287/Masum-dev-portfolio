import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "crypto";

export const COOKIE = "admin_session";
const key = () => new TextEncoder().encode(process.env.AUTH_SECRET || "");
const h = (s: string) => createHash("sha256").update(s).digest();
export const safeEqual = (a: string, b: string) => timingSafeEqual(h(a), h(b));

export async function createSession() {
  const token = await new SignJWT({ role: "admin" }).setProtectedHeader({ alg: "HS256" }).setExpirationTime("7d").sign(key());
  cookies().set(COOKIE, token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 7 });
}
export const destroySession = () => cookies().delete(COOKIE);

export async function isAdmin() {
  const t = cookies().get(COOKIE)?.value;
  if (!t || (process.env.AUTH_SECRET || "").length < 32) return false;
  try { await jwtVerify(t, key()); return true; } catch { return false; }
}
// Wraps an admin-only handler: checks the session and turns DB failures into a clean 503.
export async function adminOnly(fn: () => Promise<Response>) {
  if (!(await isAdmin())) return Response.json({ error: "Unauthorized" }, { status: 401 });
  try { return await fn(); }
  catch { return Response.json({ error: "Database unavailable. Please try again." }, { status: 503 }); }
}
