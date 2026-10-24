import mongoose from "mongoose";
const g = globalThis as unknown as { _mongo?: Promise<typeof mongoose> };

export default async function db() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");
  if (!g._mongo) g._mongo = mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
  try { return await g._mongo; }
  catch (e) { g._mongo = undefined; throw e; }
}
