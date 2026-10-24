"use client";
import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

type P = { _id: string; title: string; description: string; tags: string[]; liveUrl: string; codeUrl: string; order: number };
type M = { _id: string; name: string; email: string; message: string; createdAt: string };
const blank = { title: "", description: "", tags: "", liveUrl: "", codeUrl: "", order: "0" };
const JSONH = { "Content-Type": "application/json" };

export default function Admin() {
  const router = useRouter();
  const [tab, setTab] = useState<"projects" | "messages">("projects");
  const [ps, setPs] = useState<P[]>([]);
  const [ms, setMs] = useState<M[]>([]);
  const [f, setF] = useState(blank);
  const [id, setId] = useState<string | null>(null);
  const [err, setErr] = useState("");

  async function load() {
    const [a, b] = await Promise.all([fetch("/api/admin/projects"), fetch("/api/admin/messages")]);
    if (a.status === 401) return router.push("/admin/login");
    if (a.ok) setPs(await a.json());
    if (b.ok) setMs(await b.json());
  }
  useEffect(() => { load(); }, []);

  async function save(e: FormEvent) {
    e.preventDefault(); setErr("");
    const r = await fetch("/api/admin/projects", { method: id ? "PATCH" : "POST", headers: JSONH, body: JSON.stringify(id ? { ...f, _id: id } : f) });
    const d = await r.json();
    if (!r.ok) return setErr(d.error);
    setF(blank); setId(null); load();
  }
  async function delP(p: P) { if (confirm("Delete this project?")) { await fetch("/api/admin/projects?id=" + p._id, { method: "DELETE" }); load(); } }
  async function delM(m: M) { if (confirm("Delete this message?")) { await fetch("/api/admin/messages?id=" + m._id, { method: "DELETE" }); load(); } }
  async function logout() { await fetch("/api/admin/login", { method: "DELETE" }); router.push("/admin/login"); }
  const edit = (p: P) => { setId(p._id); setErr(""); setF({ title: p.title, description: p.description, tags: p.tags.join(", "), liveUrl: p.liveUrl, codeUrl: p.codeUrl, order: String(p.order) }); };

  return (
    <main className="mx-auto max-w-4xl px-5 pb-20 pt-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin dashboard</h1>
        <div className="flex gap-2"><a href="/" className="btn-ghost">View site</a><button className="btn-ghost" onClick={logout}>Log out</button></div>
      </div>
      <div className="mb-6 flex gap-2">
        <button className={tab === "projects" ? "btn" : "btn-ghost"} onClick={() => setTab("projects")}>Projects ({ps.length})</button>
        <button className={tab === "messages" ? "btn" : "btn-ghost"} onClick={() => setTab("messages")}>Messages ({ms.length})</button>
      </div>

      {tab === "projects" && (
        <>
          <form onSubmit={save} className="card mb-6 grid gap-3">
            <h2 className="text-lg font-semibold">{id ? "Edit project" : "Add project"}</h2>
            <input className="field" placeholder="Title" maxLength={80} value={f.title} onChange={(e) => setF({ ...f, title: e.target.value })} />
            <textarea className="field min-h-24" placeholder="Description (max 500 characters)" maxLength={500} value={f.description} onChange={(e) => setF({ ...f, description: e.target.value })} />
            <input className="field" placeholder="Tags, separated by commas (Next.js, MongoDB)" value={f.tags} onChange={(e) => setF({ ...f, tags: e.target.value })} />
            <div className="grid gap-3 sm:grid-cols-3">
              <input className="field" placeholder="Live demo URL" value={f.liveUrl} onChange={(e) => setF({ ...f, liveUrl: e.target.value })} />
              <input className="field" placeholder="Source code URL" value={f.codeUrl} onChange={(e) => setF({ ...f, codeUrl: e.target.value })} />
              <input className="field" type="number" placeholder="Order (0 = first)" value={f.order} onChange={(e) => setF({ ...f, order: e.target.value })} />
            </div>
            {err && <p className="text-red-500">{err}</p>}
            <div className="flex gap-2">
              <button className="btn">{id ? "Save changes" : "Add project"}</button>
              {id && <button type="button" className="btn-ghost" onClick={() => { setId(null); setF(blank); setErr(""); }}>Cancel</button>}
            </div>
          </form>
          {ps.length === 0 && <p className="text-mute">No projects yet. Add your first one above.</p>}
          {ps.map((p) => (
            <div key={p._id} className="card mb-3 flex items-start justify-between gap-4">
              <div><b>{p.title}</b><p className="text-sm text-mute">{p.description}</p><p className="mt-1 text-xs text-accent">{p.tags.join(" · ")}</p></div>
              <div className="flex gap-2"><button className="btn-ghost" onClick={() => edit(p)}>Edit</button><button className="btn-ghost" onClick={() => delP(p)}>Delete</button></div>
            </div>
          ))}
        </>
      )}

      {tab === "messages" && (
        <>
          {ms.length === 0 && <p className="text-mute">No messages yet.</p>}
          {ms.map((m) => (
            <div key={m._id} className="card mb-3">
              <div className="flex items-start justify-between gap-4">
                <div><b>{m.name}</b> <a className="text-accent" href={`mailto:${m.email}`}>{m.email}</a><p className="text-xs text-mute">{new Date(m.createdAt).toLocaleString()}</p></div>
                <button className="btn-ghost" onClick={() => delM(m)}>Delete</button>
              </div>
              <p className="mt-3 whitespace-pre-wrap">{m.message}</p>
            </div>
          ))}
        </>
      )}
    </main>
  );
}
