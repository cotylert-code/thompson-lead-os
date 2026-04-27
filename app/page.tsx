"use client";

import { useMemo, useState } from "react";

const leads = [
  { name: "Amanda Carter", source: "Zillow", type: "Buyer", stage: "Ready to Tour", score: 94, window: "0-2 months", priority: "Hot" },
  { name: "Natalie Brooks", source: "Follow Up Boss", type: "Buyer", stage: "Pre-approved", score: 91, window: "0-2 months", priority: "Hot" },
  { name: "Mr. Chavez", source: "FUB Text", type: "Buyer", stage: "Re-engage", score: 78, window: "2-6 months", priority: "Warm" },
  { name: "Derek Mills", source: "Personal", type: "Seller", stage: "Long-term nurture", score: 66, window: "6-12 months", priority: "Warm" },
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

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-emerald-500/20 bg-zinc-950/90 p-5 shadow-[0_0_30px_rgba(16,185,129,.08)] ${className}`}
    >
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
      {children}
    </span>
  );
}

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState("dashboard");

  const hotLeads = useMemo(
    () => leads.filter((lead) => lead.priority === "Hot").length,
    []
  );

  if (!loggedIn) {
    return (
      <main
        className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat p-4 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="w-full max-w-md rounded-[32px] border border-emerald-500/30 bg-black/80 p-6 backdrop-blur-md shadow-[0_0_70px_rgba(16,185,129,.18)]">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-600 text-3xl">
              🏠
            </div>
            <h1 className="mt-4 text-3xl font-bold text-emerald-400">
              Thompson Lead OS
            </h1>
            <p className="mt-2 text-sm text-zinc-300">
              Private realtor command center
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <input
              className="w-full rounded-2xl border border-zinc-700 bg-black/70 px-4 py-3 text-white outline-none"
              placeholder="Email"
            />
            <input
              className="w-full rounded-2xl border border-zinc-700 bg-black/70 px-4 py-3 text-white outline-none"
              placeholder="Password"
              type="password"
            />
            <button
              onClick={() => setLoggedIn(true)}
              className="w-full rounded-2xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-500"
            >
              🔐 Sign In
            </button>
          </div>

          <p className="mt-5 rounded-2xl border border-zinc-700 bg-black/60 p-4 text-xs leading-6 text-zinc-300">
            Real authentication will be added before connecting private Follow
            Up Boss, Gmail, Calendar, or client data.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(16,185,129,.18),transparent_25%),radial-gradient(circle_at_right,rgba(34,211,238,.12),transparent_25%),linear-gradient(180deg,#000,#050b08,#000)] p-3 pb-24 text-white md:p-8">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[32px] border border-emerald-500/30 bg-zinc-950/90 p-6 shadow-[0_0_70px_rgba(16,185,129,.14)]">
          <p className="text-sm text-emerald-300">
            🏠 Thompson Lead OS / Follow Up, But Fun
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Stay on fire 🔥
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Leads, texts, showings, intent scoring, and daily follow-up in one
            private realtor dashboard.
          </p>
        </section>

        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Card>
            <p className="text-zinc-400">Hot Leads</p>
            <p className="mt-2 text-4xl font-bold text-emerald-400">
              {hotLeads}
            </p>
          </Card>
          <Card>
            <p className="text-zinc-400">Texts</p>
            <p className="mt-2 text-4xl font-bold">9</p>
          </Card>
          <Card>
            <p className="text-zinc-400">Showings</p>
            <p className="mt-2 text-4xl font-bold">3</p>
          </Card>
          <Card>
            <p className="text-zinc-400">Intent Score Avg</p>
            <p className="mt-2 text-4xl font-bold text-cyan-300">82</p>
          </Card>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto rounded-3xl border border-emerald-500/20 bg-zinc-950 p-2">
          {[
            ["dashboard", "🏠 Dashboard"],
            ["texts", "💬 Texts"],
            ["calendar", "📅 Calendar"],
            ["intent", "🔥 Intent"],
            ["settings", "⚙️ Settings"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`min-w-fit rounded-2xl px-4 py-3 text-sm font-semibold ${
                tab === id ? "bg-emerald-600" : "bg-black text-zinc-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "dashboard" && (
          <section className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
            <Card>
              <h2 className="text-2xl font-bold">Lead Command Center</h2>
              <div className="mt-4 space-y-3">
                {leads.map((lead) => (
                  <div
                    key={lead.name}
                    className="rounded-2xl border border-zinc-800 bg-black p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold">{lead.name}</p>
                        <p className="text-sm text-zinc-400">
                          {lead.source} · {lead.type} · {lead.stage}
                        </p>
                      </div>
                      <Badge>{lead.priority}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold">Today’s To-Dos ✅</h2>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <p>💬 Text Amanda back</p>
                <p>📞 Call Natalie</p>
                <p>🏠 Confirm 1:00 PM showing</p>
                <p>✉️ Reply to lender email</p>
              </div>
            </Card>
          </section>
        )}

        {tab === "texts" && (
          <Card className="mt-5">
            <h2 className="text-2xl font-bold">Client Texts 💬</h2>
            <div className="mt-4 space-y-3">
              {texts.map(([name, message, status]) => (
                <div
                  key={name}
                  className="rounded-2xl border border-zinc-800 bg-black p-4"
                >
                  <div className="flex justify-between gap-3">
                    <p className="font-semibold">{name}</p>
                    <Badge>{status}</Badge>
                  </div>
                  <p className="mt-2 text-zinc-300">“{message}”</p>
                  <p className="mt-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-sm text-zinc-300">
                    Suggested reply: I can help with that — want me to send my
                    best options now?
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {tab === "calendar" && (
          <Card className="mt-5">
            <h2 className="text-2xl font-bold">Calendar + Showing ETA 🚗</h2>
            <div className="mt-4 space-y-3">
              {calendar.map(([time, title, note]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-zinc-800 bg-black p-4"
                >
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
            <h2 className="text-2xl font-bold">Who’s Most Likely To Move? 🏡</h2>
            <div className="mt-4 space-y-3">
              {leads.map((lead) => (
                <div
                  key={lead.name}
                  className="rounded-2xl border border-zinc-800 bg-black p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{lead.name}</p>
                      <p className="text-sm text-zinc-400">{lead.window}</p>
                    </div>
                    <p className="text-2xl font-bold text-emerald-400">
                      {lead.score}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {tab === "settings" && (
          <Card className="mt-5">
            <h2 className="text-2xl font-bold">Settings ⚙️</h2>
            <p className="mt-3 text-zinc-400">
              Next: real auth, Follow Up Boss API, Google Calendar, Gmail, and
              Maps ETA.
            </p>
            <button
              onClick={() => setLoggedIn(false)}
              className="mt-5 rounded-2xl border border-zinc-700 px-4 py-3 text-sm text-zinc-300"
            >
              🚪 Log out
            </button>
          </Card>
        )}
      </div>
    </main>
  );
}