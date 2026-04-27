"use client";

import { useMemo, useState } from "react";

const PASSWORD = "Baberuth4!";

const leads = [
  {
    name: "Amanda Carter",
    source: "Zillow",
    type: "Buyer",
    stage: "Ready to Tour",
    score: 94,
    window: "0-2 months",
    priority: "Critical",
    move: "Send top 3 Arvada homes and ask for tour window",
    signal: "Viewed 9 homes · Saved 3 · Replied this morning",
  },
  {
    name: "Natalie Brooks",
    source: "Follow Up Boss",
    type: "Buyer",
    stage: "Pre-approved",
    score: 91,
    window: "0-2 months",
    priority: "Hot",
    move: "Book Westminster showing today",
    signal: "Asked to see a home today · lender letter ready",
  },
  {
    name: "Mr. Chavez",
    source: "FUB Text",
    type: "Buyer",
    stage: "Re-engage",
    score: 78,
    window: "2-6 months",
    priority: "Warm",
    move: "Soft weekend check-in",
    signal: "Replied after 8 days quiet",
  },
  {
    name: "Derek Mills",
    source: "Personal",
    type: "Seller",
    stage: "Long-term nurture",
    score: 66,
    window: "6-12 months",
    priority: "Nurture",
    move: "Send home value update",
    signal: "Possible equity / seller conversation",
  },
];

const missed = [
  "3 hot leads showed new activity while you were away.",
  "Amanda is dangerously close to being ready for a showing.",
  "Natalie asked about seeing a Westminster home today.",
  "You have 9 text conversations waiting for your charm offensive.",
];

const texts = [
  {
    name: "Amanda Carter",
    message: "Can you send me the top 3 homes in Arvada?",
    status: "Reply fast",
    draft:
      "Amanda — absolutely. I’ll send my top 3 and point out which ones are actually worth seeing in person.",
  },
  {
    name: "Natalie Brooks",
    message: "Can we see that Westminster one today?",
    status: "Hot",
    draft:
      "Yes — I’ll check availability right now and try to get us in today. What time window works best?",
  },
  {
    name: "Mr. Chavez",
    message: "Still interested, just busy. Maybe next weekend?",
    status: "Needs reply",
    draft:
      "Totally understand sir. Next weekend works — I’ll keep an eye out and send you the best options before they move.",
  },
];

const calendar = [
  {
    time: "9:00 AM",
    title: "Lead follow-up sprint",
    note: "Jarvis recommends coffee and no excuses.",
  },
  {
    time: "1:00 PM",
    title: "Showing · 123 Maple St",
    note: "Leave by 12:32 PM · 22 min ETA",
  },
  {
    time: "3:30 PM",
    title: "Showing · 88 W 44th Ave",
    note: "Leave by 3:08 PM · 17 min ETA",
  },
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
      className={`rounded-[28px] border border-emerald-400/20 bg-black/55 p-5 shadow-[0_0_35px_rgba(16,185,129,.12)] backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
      {children}
    </span>
  );
}

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState("command");

  const hotLeads = useMemo(
    () => leads.filter((lead) => lead.score >= 85).length,
    []
  );

  if (!loggedIn) {
    return (
      <main
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat p-4 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full max-w-md rounded-[34px] border border-emerald-500/30 bg-black/75 p-8 text-white shadow-[0_0_80px_rgba(16,185,129,.22)] backdrop-blur-md">
          <div className="text-center">
            <div className="mb-4 text-5xl">🏔️</div>
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">
              Jarvis Realtor Mode
            </p>
            <h1 className="mt-3 text-3xl font-bold text-emerald-400">
              Thompson Lead OS
            </h1>
            <p className="mt-2 text-sm text-zinc-300">
              Private AI command center
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <input
              placeholder="Email"
              className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-4 py-3 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-4 py-3 outline-none"
            />
            <button
              onClick={() => {
                if (password === PASSWORD) setLoggedIn(true);
                else alert("Access denied, sir.");
              }}
              className="w-full rounded-2xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-500"
            >
              🔒 Initialize System
            </button>
          </div>

          <p className="mt-5 rounded-2xl border border-zinc-800 bg-black/60 p-4 text-xs leading-6 text-zinc-400">
            Real authentication and private data connections come before client
            data goes live.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,.22),transparent_24%),radial-gradient(circle_at_right,rgba(34,211,238,.14),transparent_25%),radial-gradient(circle_at_bottom,rgba(250,204,21,.08),transparent_24%),linear-gradient(180deg,#000,#03120d,#000)] p-3 pb-20 text-white md:p-8">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[38px] border border-emerald-500/30 bg-black/60 p-6 shadow-[0_0_95px_rgba(16,185,129,.18)] backdrop-blur-md md:p-8">
          <div className="absolute right-8 top-8 hidden h-40 w-40 rounded-full border border-emerald-400/25 shadow-[0_0_70px_rgba(16,185,129,.25)] md:block" />
          <div className="absolute right-14 top-14 hidden h-28 w-28 rounded-full border border-cyan-400/20 md:block" />

          <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">
            🤖 Suit systems online
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Good morning, Tyler.
          </h1>
          <p className="mt-4 max-w-3xl text-zinc-400">
            While you were away, the lead radar stayed active. Zillow hunters
            detected. Text goblins multiplying. Recommendation: deploy charm
            before another agent tries something brave.
          </p>
        </section>

        <div className="mt-5 flex gap-2 overflow-x-auto rounded-3xl border border-emerald-500/20 bg-black/60 p-2 backdrop-blur-md">
          {[
            ["command", "🛰️ Command"],
            ["briefing", "🧠 Briefing"],
            ["texts", "💬 Texts"],
            ["showings", "🚗 Showings"],
            ["intent", "🔥 Intent"],
            ["settings", "⚙️ Settings"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`min-w-fit rounded-2xl px-4 py-3 text-sm font-semibold ${
                tab === id
                  ? "bg-emerald-600 text-white"
                  : "bg-zinc-950 text-zinc-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "command" && (
          <div className="mt-5 grid gap-4 xl:grid-cols-[1.2fr_.8fr]">
            <div className="grid gap-4 md:grid-cols-3 xl:col-span-2">
              <Card>
                <p className="text-zinc-400">Hot Leads</p>
                <p className="mt-2 text-4xl font-bold text-emerald-400">
                  {hotLeads}
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  Sir, they are warming up nicely.
                </p>
              </Card>

              <Card>
                <p className="text-zinc-400">Texts Waiting</p>
                <p className="mt-2 text-4xl font-bold">9</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Tiny inbox goblins.
                </p>
              </Card>

              <Card>
                <p className="text-zinc-400">Pipeline Radar</p>
                <p className="mt-2 text-4xl font-bold text-cyan-300">$3.2M</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Respectfully, not bad.
                </p>
              </Card>
            </div>

            <Card className="xl:row-span-2">
              <h2 className="text-2xl font-bold text-emerald-300">
                Jarvis Briefing
              </h2>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                {missed.map((item) => (
                  <p key={item}>✅ {item}</p>
                ))}
                <p>🥷 Optional mission: silently dominate follow-up game.</p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold">Lead Radar 🛰️</h2>
              <div className="mt-4 space-y-3">
                {leads.map((lead) => (
                  <div
                    key={lead.name}
                    className="rounded-2xl border border-zinc-800 bg-black/70 p-4"
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
                    <p className="mt-3 text-sm text-emerald-300">
                      Next move: {lead.move}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold">Today’s Mission ✅</h2>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <p>💬 Text Amanda back before your coffee gets cold.</p>
                <p>📞 Call Natalie and book today’s showing.</p>
                <p>🏠 Confirm 1:00 PM showing route.</p>
                <p>✉️ Reply to lender email.</p>
                <p>🤖 Let Jarvis draft, you approve.</p>
              </div>
            </Card>
          </div>
        )}

        {tab === "briefing" && (
          <Card className="mt-5">
            <h2 className="text-3xl font-bold text-emerald-300">
              Here’s what you missed, sir.
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {missed.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-zinc-800 bg-black/70 p-4"
                >
                  <p className="text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {tab === "texts" && (
          <Card className="mt-5">
            <h2 className="text-2xl font-bold">Client Text Command 💬</h2>
            <div className="mt-4 space-y-3">
              {texts.map((text) => (
                <div
                  key={text.name}
                  className="rounded-2xl border border-zinc-800 bg-black/70 p-4"
                >
                  <div className="flex justify-between gap-3">
                    <p className="font-semibold">{text.name}</p>
                    <Badge>{text.status}</Badge>
                  </div>
                  <p className="mt-2 text-zinc-300">“{text.message}”</p>
                  <p className="mt-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-sm text-zinc-300">
                    Jarvis draft: {text.draft}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {tab === "showings" && (
          <Card className="mt-5">
            <h2 className="text-2xl font-bold">Showing Navigation 🚗</h2>
            <div className="mt-4 space-y-3">
              {calendar.map((event) => (
                <div
                  key={event.title}
                  className="rounded-2xl border border-zinc-800 bg-black/70 p-4"
                >
                  <p className="text-cyan-300">{event.time}</p>
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-sm text-zinc-400">{event.note}</p>
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
                <div
                  key={lead.name}
                  className="rounded-2xl border border-zinc-800 bg-black/70 p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold">{lead.name}</p>
                      <p className="text-sm text-zinc-400">{lead.signal}</p>
                      <p className="mt-1 text-xs text-cyan-300">
                        Window: {lead.window}
                      </p>
                    </div>
                    <p className="text-3xl font-bold text-emerald-400">
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
              Next: real auth, Follow Up Boss API, Google Calendar, Gmail, Maps
              ETA, and Jarvis voice-learning drafts.
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