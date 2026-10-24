"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [f, setF] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent) {
    e.preventDefault(); setErr(""); setBusy(true);
    const r = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
    if (!r.ok) { setErr((await r.json()).error); return setBusy(false); }
    router.push("/admin"); router.refresh();
  }
  return (
    <main className="mx-auto max-w-sm px-5 pt-24">
      <h1 className="mb-6 text-3xl font-bold">Admin login</h1>
      <form onSubmit={submit} className="card grid gap-3">
        <input className="field" type="email" placeholder="Email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
        <input className="field" type="password" placeholder="Password" value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} />
        {err && <p className="text-red-500">{err}</p>}
        <button className="btn" disabled={busy}>{busy ? "Signing in..." : "Sign in"}</button>
      </form>
    </main>
  );
}
