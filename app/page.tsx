"use client";

import { useMemo, useState } from "react";

type Lead = {
  name: string;
  type: "Buyer" | "Seller";
  stage: string;
  priority: "Hot" | "Warm" | "Cold";
};

const leads: Lead[] = [
  { name: "Amanda Carter", type: "Buyer", stage: "Touring Homes", priority: "Hot" },
  { name: "Mr. Chavez", type: "Buyer", stage: "Re-engage", priority: "Warm" },
  { name: "Natalie Brooks", type: "Buyer", stage: "Ready This Month", priority: "Hot" },
  { name: "Derek Mills", type: "Seller", stage: "Thinking About Selling", priority: "Warm" },
];

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-emerald-500/30 px-3 py-1 text-xs text-emerald-300">
      {text}
    </span>
  );
}

export default function Page() {
  const [tab, setTab] = useState("dashboard");

  const hotCount = useMemo(
    () => leads.filter((l) => l.priority === "Hot").length,
    []
  );

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-emerald-500/20 bg-zinc-950 p-6 shadow-xl">
          <h1 className="text-4xl font-bold text-emerald-400">
            Thompson Lead OS 😎
          </h1>
          <p className="mt-2 text-zinc-400">
            Realtor command center for leads, follow-up, and daily focus.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-5">
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
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  tab === id
                    ? "bg-emerald-600"
                    : "bg-zinc-900 hover:bg-zinc-800"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {tab === "dashboard" && (
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-zinc-950 p-5 border border-zinc-800">
              <p className="text-zinc-400">Hot Leads</p>
              <p className="mt-2 text-4xl font-bold text-emerald-400">
                {hotCount}
              </p>
            </div>

            <div className="rounded-3xl bg-zinc-950 p-5 border border-zinc-800">
              <p className="text-zinc-400">Tasks Today</p>
              <p className="mt-2 text-4xl font-bold">7</p>
            </div>

            <div className="rounded-3xl bg-zinc-950 p-5 border border-zinc-800">
              <p className="text-zinc-400">Showings</p>
              <p className="mt-2 text-4xl font-bold">3</p>
            </div>

            <div className="md:col-span-3 rounded-3xl bg-zinc-950 p-5 border border-zinc-800">
              <h2 className="text-xl font-semibold">Lead Pipeline</h2>

              <div className="mt-4 space-y-3">
                {leads.map((lead) => (
                  <div
                    key={lead.name}
                    className="rounded-2xl bg-black p-4 border border-zinc-800 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                  >
                    <div>
                      <p className="font-semibold">{lead.name}</p>
                      <p className="text-sm text-zinc-400">
                        {lead.type} • {lead.stage}
                      </p>
                    </div>

                    <Badge text={lead.priority} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "texts" && (
          <div className="mt-6 rounded-3xl bg-zinc-950 p-5 border border-zinc-800">
            <h2 className="text-2xl font-semibold">Client Texts 💬</h2>
            <div className="mt-4 space-y-3">
              {[
                "Amanda: Can we tour homes this weekend?",
                "Mr. Chavez: Still interested, just busy lately.",
                "Natalie: Send me your top picks today.",
              ].map((msg) => (
                <div
                  key={msg}
                  className="rounded-2xl bg-black p-4 border border-zinc-800"
                >
                  {msg}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "calendar" && (
          <div className="mt-6 rounded-3xl bg-zinc-950 p-5 border border-zinc-800">
            <h2 className="text-2xl font-semibold">Today’s Calendar 📅</h2>
            <div className="mt-4 space-y-3">
              {[
                "10:00 AM – Showing in Arvada",
                "1:30 PM – Buyer call",
                "4:00 PM – Listing appointment",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-black p-4 border border-zinc-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "intent" && (
          <div className="mt-6 rounded-3xl bg-zinc-950 p-5 border border-zinc-800">
            <h2 className="text-2xl font-semibold">Who’s Most Likely to Move 🔥</h2>
            <div className="mt-4 space-y-3">
              {[
                "Amanda Carter — 94/100 (0-2 months)",
                "Natalie Brooks — 91/100 (0-2 months)",
                "Mr. Chavez — 78/100 (2-6 months)",
                "Derek Mills — 66/100 (6-12 months)",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-black p-4 border border-zinc-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "settings" && (
          <div className="mt-6 rounded-3xl bg-zinc-950 p-5 border border-zinc-800">
            <h2 className="text-2xl font-semibold">Settings ⚙️</h2>
            <p className="mt-3 text-zinc-400">
              Next steps: Connect Follow Up Boss, Gmail, Google Calendar, and deploy live.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}