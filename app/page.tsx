"use client";

import { useMemo, useState, type ReactNode } from "react";

const PASSWORD = "Baberuth4!";

const leads = [
  {
    name: "Amanda Carter",
    source: "Zillow",
    type: "Buyer",
    stage: "Ready to Tour",
    score: 94,
    priority: "Critical",
    move: "Send top 3 Arvada homes",
    alert: "Viewed 9 homes and saved 3. She is circling the runway.",
  },
  {
    name: "Natalie Brooks",
    source: "Follow Up Boss",
    type: "Buyer",
    stage: "Pre-approved",
    score: 91,
    priority: "Hot",
    move: "Book Westminster showing today",
    alert: "Asked to see a home today. Do not fumble this, sir.",
  },
  {
    name: "Mr. Chavez",
    source: "FUB Text",
    type: "Buyer",
    stage: "Re-engage",
    score: 78,
    priority: "Warm",
    move: "Soft weekend check-in",
    alert: "Replied after 8 days quiet. The door has reopened.",
  },
];

const texts = [
  {
    name: "Amanda Carter",
    message: "Can you send me the top 3 homes in Arvada?",
    draft:
      "Amanda — absolutely. I’ll send my top 3 and point out which ones I think are actually worth seeing in person.",
  },
  {
    name: "Natalie Brooks",
    message: "Can we see that Westminster one today?",
    draft:
      "Yes — I’ll check availability right now and try to get us in today. What time window works best?",
  },
];

const showings = [
  {
    time: "1:00 PM",
    title: "Showing · 123 Maple St",
    eta: "22 min",
    leave: "12:32 PM",
  },
  {
    time: "3:30 PM",
    title: "Showing · 88 W 44th Ave",
    eta: "17 min",
    leave: "3:08 PM",
  },
];

function Card({
  children,
  className = "",
}: {
  children: ReactNode;
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

function Badge({ children }: { children: ReactNode }) {
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
  const [jarvisOpen, setJarvisOpen] = useState(true);

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
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,.22),transparent_24%),radial-gradient(circle_at_right,rgba(34,211,238,.14),transparent_25%),linear-gradient(180deg,#000,#03120d,#000)] p-3 pb-24 text-white md:p-8">
      <div className="pointer-events-none fixed inset-0 opacity-20">
        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full border border-emerald-400/20" />
        <div className="absolute left-1/2 top-24 h-[620px] w-[620px] -translate-x-1/2 rounded-full border border-cyan-400/10" />
      </div>

      <div className="relative mx-auto max-w-7xl">
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
            I monitored the pipeline while you were away. Lead heat is rising,
            text goblins are multiplying, and Amanda is dangerously close to
            touring without your top-three list.
          </p>
        </section>

        <div className="mt-5 flex gap-2 overflow-x-auto rounded-3xl border border-emerald-500/20 bg-black/60 p-2 backdrop-blur-md">
          {[
            ["command", "🛰️ Command"],
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
                  Tiny inbox goblins detected.
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
                Jarvis Live Feed
              </h2>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <p>✅ Amanda viewed multiple homes. Follow-up recommended.</p>
                <p>🚗 Showing route monitor waiting for Google Maps hookup.</p>
                <p>💬 Natalie’s text is high-priority. Delay is unwise, sir.</p>
                <p>🏡 Buyer intent engine online in preview mode.</p>
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
                    <p className="mt-2 text-xs text-zinc-500">{lead.alert}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold">Today’s Mission ✅</h2>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <p>💬 Text Amanda before your coffee gets cold.</p>
                <p>📞 Call Natalie and lock the showing window.</p>
                <p>🏠 Confirm 1:00 PM route.</p>
                <p>✉️ Reply to lender email.</p>
                <p>🤖 Let Jarvis draft, you approve.</p>
              </div>
            </Card>
          </div>
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
                    <Badge>Needs action</Badge>
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
              {showings.map((event) => (
                <div
                  key={event.title}
                  className="rounded-2xl border border-zinc-800 bg-black/70 p-4"
                >
                  <p className="text-cyan-300">{event.time}</p>
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-sm text-zinc-400">
                    ETA: {event.eta} · Leave by {event.leave}
                  </p>
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
                      <p className="text-sm text-zinc-400">{lead.alert}</p>
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
              Next: real auth, Follow Up Boss API, Gmail, Google Calendar, Maps
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

      <button
        onClick={() => setJarvisOpen(!jarvisOpen)}
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/40 bg-black/80 text-3xl shadow-[0_0_45px_rgba(16,185,129,.45)] backdrop-blur-md"
      >
        🤖
      </button>

      {jarvisOpen && (
        <div className="fixed bottom-24 right-5 z-50 w-[92vw] max-w-sm rounded-[28px] border border-emerald-400/30 bg-black/85 p-5 text-white shadow-[0_0_70px_rgba(16,185,129,.28)] backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
            Jarvis watching
          </p>
          <h3 className="mt-2 text-xl font-bold">I’m monitoring the board.</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            Sir, Amanda is hot, Natalie needs speed, and the text goblins are
            not going to answer themselves.
          </p>
          <div className="mt-4 rounded-2xl border border-zinc-800 bg-black p-3 text-sm text-zinc-300">
            Ask Jarvis: “Who should I call right now?”
          </div>
        </div>
      )}
    </main>
  );
}