import { useState } from "react";

type Project = {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  problem: string;
  role: string;
  tech: string[];
  links: { label: string; url: string }[];
  learned: string;
  improvements: string[];
  color: string;
};

const projects: Project[] = [
  {
    id: "vesttrack",
    emoji: "🚀",
    title: "VestTrack",
    subtitle: "Study management platform for Brazilian entrance exams",
    problem: "Students track studies in spreadsheets + notebooks + 5 apps, with no real progress view. Motivation dies in 2 weeks.",
    role: "Solo developer — idea, design, code, deploy, analytics",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind 4", "Supabase", "Vercel"],
    links: [
      { label: "View Live", url: "https://vest-track.vercel.app" },
      { label: "GitHub", url: "https://github.com/Leuuo2/VestTrack" },
    ],
    learned: "Offline-first with localStorage as source of truth, Supabase RLS, precise visitor tracking (visitor_id vs session_id), sticky sidebar fix (overflow-hidden breaks sticky), keyboard shortcuts.",
    improvements: [
      "Added Check/Limpar buttons with green hover after user feedback",
      "Keyboard shortcuts 1-4, Enter, Esc, ?",
      "Fixed calendar UTC bug to local date for Brazil timezone",
      "Removed Tutor IA that was too bad, kept clean",
      "Added admin visits dashboard restricted to my email, counting unique people not just clicks",
      "Compressed 15MB GIF to 4.25MB for README",
    ],
    color: "from-violet-600 to-fuchsia-600",
  },
  {
    id: "nutrieat",
    emoji: "🥗",
    title: "NutriEat",
    subtitle: "Nutrition app prototype — Figma design process",
    problem: "People want to eat healthier but don't know what to cook with what they have, and nutrition apps are too complex.",
    role: "Product designer — research, wireframes, prototype, final screens",
    tech: ["Figma", "Design System", "Prototyping", "User Research"],
    links: [
      { label: "Live Demo", url: "nutrieat/" },
      { label: "View Figma", url: "https://www.figma.com/proto/2EeHaUnIb6XxF3dvjsjD8F/NutriEat-Prototype?node-id=0-1&t=5Q4Jr2fC64YOJ64O-1" },
    ],
    learned: "How to translate a real problem into simple flows, when to add friction and when to remove, designing for non-technical users.",
    improvements: [
      "Simplified onboarding from 5 steps to 3",
      "Added empty states with helpful CTAs",
      "Focused on one main action per screen",
    ],
    color: "from-emerald-500 to-teal-500",
  },
];

export default function App() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <div className="font-bold">Leonardo Pereira da Silva</div>
          <div className="text-sm text-muted-foreground">Computer Science / Technology</div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Intro */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight">Leonardo Pereira da Silva</h1>
          <p className="mt-2 text-lg text-muted-foreground">Computer Science / Technology</p>
          <p className="mt-6 leading-relaxed">
            Student developer interested in building technology to solve real-world problems. 
            Currently focused on edtech and tools that help students stay organized.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Applying for colleges abroad — building projects with real users and excellent execution as extracurricular.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://github.com/Leuuo2" className="rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background">GitHub</a>
            <a href="https://vest-track.vercel.app" className="rounded-xl border px-4 py-2 text-sm">VestTrack Live</a>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold">Projects</h2>
          
          <div className="mt-8 space-y-6">
            {projects.map(p => (
              <div key={p.id} className="rounded-2xl border bg-card p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white text-xl ${p.color}`}>
                      {p.emoji}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.subtitle}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActive(active === p.id ? null : p.id)}
                    className="rounded-xl border px-3 py-1.5 text-sm"
                  >
                    {active === p.id ? "Hide" : "View details"}
                  </button>
                </div>

                {active === p.id && (
                  <div className="mt-6 space-y-5 border-t pt-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Problem</p>
                      <p className="mt-1 text-sm leading-relaxed">{p.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">My role</p>
                      <p className="mt-1 text-sm">{p.role}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Tech</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {p.tech.map(t => (
                          <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Links</p>
                      <div className="mt-2 flex gap-2">
                        {p.links.map(l => (
                          <a key={l.url} href={l.url} target="_blank" className="rounded-xl bg-foreground px-4 py-2 text-xs font-medium text-background">
                            {l.label}
                          </a>
                        ))}
                      </div>
                    </div>
                    {p.id === "nutrieat" && (
                      <div className="rounded-xl bg-muted p-4">
                        <p className="text-xs font-medium">Interactive demo — simulates the app end to end (signup → meals → recipes → feedback → coupons)</p>
                        <iframe
                          src="nutrieat/"
                          title="NutriEat interactive prototype"
                          className="mt-2 h-[760px] w-full rounded-xl border bg-background"
                          loading="lazy"
                        />
                        <p className="mt-2 text-xs text-muted-foreground">
                          Embed not loading?{" "}
                          <a className="underline" href="nutrieat/" target="_blank" rel="noreferrer">
                            Open the demo in a new tab
                          </a>
                          .
                        </p>
                      </div>
                    )}
                    {p.id === "vesttrack" && (
                      <div className="rounded-xl bg-muted p-4">
                        <p className="text-xs font-medium">Demo GIFs</p>
                        <div className="mt-2 grid gap-3">
                          <div className="rounded-xl border bg-background p-2">
                            <p className="text-xs text-muted-foreground">Landing Page</p>
                            <div className="mt-1 h-24 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center text-xs">landing-demo.gif (1.8MB)</div>
                          </div>
                          <div className="rounded-xl border bg-background p-2">
                            <p className="text-xs text-muted-foreground">Dashboard</p>
                            <div className="mt-1 h-24 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center text-xs">dashboard-demo.gif (4.25MB compressed)</div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">What I learned</p>
                      <p className="mt-1 text-sm leading-relaxed">{p.learned}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Improvements after feedback</p>
                      <ul className="mt-2 space-y-1">
                        {p.improvements.map((imp, i) => (
                          <li key={i} className="flex gap-2 text-sm"><span className="text-violet-600">•</span>{imp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {active !== p.id && (
                  <div className="mt-4 flex gap-2">
                    {p.links.map(l => (
                      <a key={l.url} href={l.url} target="_blank" className={`rounded-xl bg-gradient-to-br px-4 py-2 text-xs font-medium text-white ${p.color}`}>
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Robotics */}
          <div className="mt-6 rounded-2xl border bg-card p-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white text-xl">🤖</div>
              <div>
                <h3 className="text-xl font-bold">Robotics</h3>
                <p className="text-sm text-muted-foreground">Line-following robot — SENAC</p>
                <p className="mt-3 text-sm leading-relaxed">
                  Built a small car robot that follows a black line on the ground, like turtle art. 
                  Worked on assembly and programming the sensors and motors to stay on track. 
                  Learned basics of hardware, logic and debugging physical systems.
                </p>
                <p className="mt-2 text-xs text-muted-foreground">SENAC • No photos, but similar to line-following car projects</p>
              </div>
            </div>
          </div>

          {/* Research */}
          <div className="mt-6 rounded-2xl border bg-card p-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-xl">🔬</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">Research</h3>
                <p className="text-sm text-muted-foreground">The Deadline Nobody Noticed — Why the internet is replacing its locks before the thief exists</p>
                <div className="mt-3 space-y-2 text-sm leading-relaxed">
                  <p><strong>Question:</strong> Why is the internet migrating to post-quantum cryptography before quantum computers exist that can break current crypto?</p>
                  <p><strong>Method:</strong> Analysis of Mosca's inequality (X+Y greater than Z), NIST post-quantum competition (82 teams, 8 years), and real deployments (Signal PQXDH, Apple PQ3).</p>
                  <p><strong>Results:</strong> Harvest now, decrypt later threat, 28-49% chance of cryptographically relevant quantum computer in 10 years, less than 5% enterprises have migration plan, Brazil's ICP-Brasil already adding PQ algorithms for long-validity documents.</p>
                  <p className="text-xs text-muted-foreground mt-2">Full article: 6 sections, bibliography with 20+ sources (NIST, Apple, Signal, etc)</p>
                </div>
                <div className="mt-4 flex gap-2">
                  <a href="https://docs.google.com/document/d/11NFNgNo5S0DLO44TZROaiHECYsk_9hBURe21axOxF-A/edit?usp=sharing" target="_blank" className="rounded-xl bg-foreground px-4 py-2 text-xs font-medium text-background">View Doc</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>Leonardo Pereira da Silva — 2025 • Built as hub, not giant project • Focus: real users + excellent execution</p>
        </div>
      </main>
    </div>
  );
}
