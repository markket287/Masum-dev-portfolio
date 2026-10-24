import { isValidObjectId } from "mongoose";
import db from "../../../../lib/db";
import { Project } from "../../../../lib/models";
import { adminOnly } from "../../../../lib/auth";
export const dynamic = "force-dynamic";

const bad = (m: string) => Response.json({ error: m }, { status: 400 });
const url = (v: unknown) => {
  if (typeof v !== "string" || !v.trim()) return "";
  try { const u = new URL(v.trim()); return /^https?:$/.test(u.protocol) ? u.toString() : null; } catch { return null; }
};
function clean(b: Record<string, unknown>) {
  const title = typeof b.title === "string" ? b.title.trim() : "";
  const description = typeof b.description === "string" ? b.description.trim() : "";
  const raw: unknown[] = Array.isArray(b.tags) ? b.tags : typeof b.tags === "string" ? b.tags.split(",") : [];
  const tags = raw.map((t) => String(t).trim()).filter(Boolean).slice(0, 8);
  const liveUrl = url(b.liveUrl), codeUrl = url(b.codeUrl);
  const order = Number(b.order) || 0;
  if (!title || title.length > 80) return "Title is required (max 80 characters).";
  if (!description || description.length > 500) return "Description is required (max 500 characters).";
  if (liveUrl === null || codeUrl === null) return "Links must be valid http(s) URLs.";
  return { title, description, tags, liveUrl, codeUrl, order };
}

export const GET = () => adminOnly(async () => {
  await db();
  return Response.json(await Project.find().sort({ order: 1, createdAt: -1 }));
});
export const POST = (req: Request) => adminOnly(async () => {
  const d = clean(await req.json().catch(() => ({})));
  if (typeof d === "string") return bad(d);
  await db();
  return Response.json(await Project.create(d));
});
export const PATCH = (req: Request) => adminOnly(async () => {
  const body = await req.json().catch(() => ({}));
  if (!isValidObjectId(body._id)) return bad("Invalid project id.");
  const d = clean(body);
  if (typeof d === "string") return bad(d);
  await db();
  return Response.json(await Project.findByIdAndUpdate(body._id, d, { new: true, runValidators: true }));
});
export const DELETE = (req: Request) => adminOnly(async () => {
  const id = new URL(req.url).searchParams.get("id");
  if (!isValidObjectId(id)) return bad("Invalid project id.");
  await db();
  await Project.findByIdAndDelete(id);
  return Response.json({ ok: true });
});
