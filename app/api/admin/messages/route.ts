import { isValidObjectId } from "mongoose";
import db from "../../../../lib/db";
import { Message } from "../../../../lib/models";
import { adminOnly } from "../../../../lib/auth";
export const dynamic = "force-dynamic";

export const GET = () => adminOnly(async () => {
  await db();
  return Response.json(await Message.find().sort({ createdAt: -1 }).limit(200));
});
export const DELETE = (req: Request) => adminOnly(async () => {
  const id = new URL(req.url).searchParams.get("id");
  if (!isValidObjectId(id)) return Response.json({ error: "Invalid message id." }, { status: 400 });
  await db();
  await Message.findByIdAndDelete(id);
  return Response.json({ ok: true });
});
