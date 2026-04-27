"use client";

import { useMemo, useState } from "react";

const PASSWORD = "Baberuth4!";

const leads = [
  { name: "Amanda Carter", source: "Zillow", type: "Buyer", stage: "Ready to Tour", score: 94, window: "0-2 months", priority: "Hot", move: "Send top 3 Arvada homes" },
  { name: "Natalie Brooks", source: "Follow Up Boss", type: "Buyer", stage: "Pre-approved", score: 91, window: "0-2 months", priority: "Hot", move: "Book Westminster showing" },
  { name: "Mr. Chavez", source: "FUB Text", type: "Buyer", stage: "Re-engage", score: 78, window: "2-6 months", priority: "Warm", move: "Soft weekend check-in" },
  { name: "Derek Mills", source: "Personal", type: "Seller", stage: "Long-term nurture", score: 66, window: "6-12 months", priority: "Warm", move: "Send home value update" },
];

const texts = [
  ["Amanda Carter", "Can you send me the top 3 homes in Arvada?", "Reply fast"],
  ["Natalie Brooks", "Can we see that Westminster one today?", "Hot"],
  ["Mr. Chavez", "Still interested, just busy. Maybe next weekend?", "Needs reply"],
];

const calendar = [
  ["9:00 AM", "Lead follow-up sprint", "Office"],
  ["1:00 PM", "Showing · 123 Maple St", "Leave by 12:32 PM · 22 min ETA"],
  ["3:30 PM", "Showing · 88 W 44th Ave", "Leave by 3:08 PM · 17 min ETA"],
];

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-emerald-500/20 bg-black/55 p-5 shadow-[0_0_35px_rgba(16,185,129,.10)] backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">{children}</span>;
}

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState("dashboard");

  const hotLeads = useMemo(() => leads.filter((lead) => lead.priority === "Hot").length, []);

  if (!loggedIn) {
    return (
      <main
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat p-4 text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 w-full max-w-md rounded-3xl border border-emerald-500/30 bg-black/70 p-8 text-white shadow-2xl backdrop-blur-md">
          <div className="text-center">
            <div className="mb-4 text-5xl">🏔️</div>
            <h1 className="text-3xl font-bold text-emerald-400">Thompson Lead OS</h1>
            <p className="mt-2 text-sm text-zinc-300">Private realtor command center</p>
          </div>

          <div className="mt-6 space-y-3">
            <input placeholder="Email" className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-4 py-3 outline-none" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-4 py-3 outline-none" />
            <button
              onClick={() => {
                if (password === PASSWORD) setLoggedIn(true);
                else alert("Wrong password");
              }}
              className="w-full rounded-2xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-500"
            >
              🔒 Sign In
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,.2),transparent_25%),radial-gradient(circle_at_right,rgba(34,211,238,.13),transparent_24%),linear-gradient(180deg,#000,#03110c,#000)] p-3 pb-20 text-white md:p-8">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[36px] border border-emerald-500/30 bg-black/60 p-6 shadow-[0_0_90px_rgba(16,185,129,.16)] backdrop-blur-md md:p-8">
          <div className="absolute right-8 top-6 hidden h-32 w-32 rounded-full border border-emerald-400/20 shadow-[0_0_60px_rgba(16,185,129,.25)] md:block" />
          <p className="text-sm text-emerald-300">🤖 Jarvis Realtor Mode Online</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Good afternoon, Tyler.</h1>
          <p className="mt-3 max-w-3xl text-zinc-400">
            Lead radar active. Charm systems charged. Zillow hunters detected. Deploy follow-up before they wander into another agent’s inbox.
          </p>
        </section>

        <div className="mt-5 flex gap-2 overflow-x-auto rounded-3xl border border-emerald-500/20 bg-black/60 p-2 backdrop-blur-md">
          {[
            ["dashboard", "🏠 Command"],
            ["texts", "💬 Texts"],
            ["calendar", "📅 Showings"],
            ["intent", "🔥 Intent"],
            ["settings", "⚙️ Settings"],
          ].map(([id, label]) => (
            <button key={id} onClick={() => setTab(id)} className={`min-w-fit rounded-2xl px-4 py-3 text-sm font-semibold ${tab === id ? "bg-emerald-600" : "bg-zinc-950 text-zinc-300"}`}>
              {label}
            </button>
          ))}
        </div>

        {tab === "dashboard" && (
          <div className="mt-5 grid gap-4 xl:grid-cols-[1.2fr_.8fr]">
            <div className="grid gap-4 md:grid-cols-3 xl:col-span-2">
              <Card><p className="text-zinc-400">Hot Leads</p><p className="mt-2 text-4xl font-bold text-emerald-400">{hotLeads}</p><p className="mt-1 text-sm text-zinc-500">Lead detected. Deploy charm.</p></Card>
              <Card><p className="text-zinc-400">Texts Waiting</p><p className="mt-2 text-4xl font-bold">9</p><p className="mt-1 text-sm text-zinc-500">Tiny inbox goblins.</p></Card>
              <Card><p className="text-zinc-400">Pipeline</p><p className="mt-2 text-4xl font-bold text-cyan-300">$3.2M</p><p className="mt-1 text-sm text-zinc-500">Respectfully, not bad.</p></Card>
            </div>

            <Card className="xl:row-span-2">
              <h2 className="text-2xl font-bold text-emerald-300">Jarvis Briefing 🧠</h2>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <p>✅ Amanda is hot. Translation: stop pretending you’ll text her later.</p>
                <p>🚗 Showing ETA system ready for Google Maps hookup.</p>
                <p>🏡 Zillow intent radar says Natalie is actively hunting.</p>
                <p>💬 Recommended mission: answer texts before coffee gets cold.</p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold">Lead Radar 🛰️</h2>
              <div className="mt-4 space-y-3">
                {leads.map((lead) => (
                  <div key={lead.name} className="rounded-2xl border border-zinc-800 bg-black/70 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold">{lead.name}</p>
                        <p className="text-sm text-zinc-400">{lead.source} · {lead.type} · {lead.stage}</p>
                      </div>
                      <Badge>{lead.priority}</Badge>
                    </div>
                    <p className="mt-3 text-sm text-emerald-300">Next move: {lead.move}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold">Today’s Mission ✅</h2>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <p>💬 Text Amanda back</p>
                <p>📞 Call Natalie</p>
                <p>🏠 Confirm 1:00 PM showing</p>
                <p>✉️ Reply to lender email</p>
                <p>🥷 Optional: silently dominate follow-up game</p>
              </div>
            </Card>
          </div>
        )}

        {tab === "texts" && (
          <Card className="mt-5">
            <h2 className="text-2xl font-bold">Client Text Command 💬</h2>
            <div className="mt-4 space-y-3">
              {texts.map(([name, message, status]) => (
                <div key={name} className="rounded-2xl border border-zinc-800 bg-black/70 p-4">
                  <div className="flex justify-between gap-3"><p className="font-semibold">{name}</p><Badge>{status}</Badge></div>
                  <p className="mt-2 text-zinc-300">“{message}”</p>
                  <p className="mt-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-sm text-zinc-300">
                    Jarvis draft: I can help with that — want me to send my best options now?
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {tab === "calendar" && (
          <Card className="mt-5">
            <h2 className="text-2xl font-bold">Showing Navigation 🚗</h2>
            <div className="mt-4 space-y-3">
              {calendar.map(([time, title, note]) => (
                <div key={title} className="rounded-2xl border border-zinc-800 bg-black/70 p-4">
                  <p className="text-cyan-300">{time}</p>
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-zinc-400">{note}</p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {tab === "intent" && (
          <Card className="mt-5">
            <h2 className="text-2xl font-bold">Buyer/Seller Intent Radar 🏡</h2>
            <div className="mt-4 space-y-3">
              {leads.map((lead) => (
                <div key={lead.name} className="rounded-2xl border border-zinc-800 bg-black/70 p-4">
                  <div className="flex items-center justify-between">
                    <div><p className="font-semibold">{lead.name}</p><p className="text-sm text-zinc-400">{lead.window}</p></div>
                    <p className="text-2xl font-bold text-emerald-400">{lead.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {tab === "settings" && (
          <Card className="mt-5">
            <h2 className="text-2xl font-bold">Settings ⚙️</h2>
            <p className="mt-3 text-zinc-400">Next: real auth, Follow Up Boss API, Google Calendar, Gmail, and Maps ETA.</p>
            <button onClick={() => setLoggedIn(false)} className="mt-5 rounded-2xl border border-zinc-700 px-4 py-3 text-sm text-zinc-300">🚪 Log out</button>
          </Card>
        )}
      </div>
    </main>
  );
}