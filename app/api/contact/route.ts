import db from "../../../lib/db";
import { Message } from "../../../lib/models";
export const dynamic = "force-dynamic";

const hits = new Map<string, number[]>(); // simple per-IP rate limit (resets on server restart)

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  if (recent.length >= 5) return Response.json({ error: "Too many messages. Please try again later." }, { status: 429 });

  const b = await req.json().catch(() => ({}));
  if (b.website) return Response.json({ ok: true }); // honeypot: bots fill this hidden field
  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";
  if (!name || name.length > 80) return Response.json({ error: "Please enter your name." }, { status: 400 });
  if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 120) return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  if (message.length < 5 || message.length > 2000) return Response.json({ error: "Message must be 5 to 2000 characters." }, { status: 400 });

  try {
    await db();
    await Message.create({ name, email, message });
    hits.set(ip, [...recent, now]);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Could not send your message right now. Please email me directly." }, { status: 503 });
  }
}
