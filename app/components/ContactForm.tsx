"use client";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", message: "", website: "" });
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [err, setErr] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault(); setErr(""); setState("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      const d = await r.json();
      if (!r.ok) { setErr(d.error || "Something went wrong."); return setState("idle"); }
      setF({ name: "", email: "", message: "", website: "" }); setState("done");
    } catch { setErr("Network error. Please try again."); setState("idle"); }
  }
  if (state === "done") return <p className="card text-center">Thank you! Your message has been sent. I will reply soon.</p>;
  return (
    <form onSubmit={submit} className="card mx-auto grid max-w-xl gap-3 text-left">
      <input className="field" placeholder="Your name" value={f.name} maxLength={80} onChange={(e) => setF({ ...f, name: e.target.value })} />
      <input className="field" type="email" placeholder="Your email" value={f.email} maxLength={120} onChange={(e) => setF({ ...f, email: e.target.value })} />
      <textarea className="field min-h-32" placeholder="Your message" value={f.message} maxLength={2000} onChange={(e) => setF({ ...f, message: e.target.value })} />
      <input className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.website} onChange={(e) => setF({ ...f, website: e.target.value })} />
      {err && <p className="text-red-500">{err}</p>}
      <button className="btn" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Send message"}</button>
    </form>
  );
}
