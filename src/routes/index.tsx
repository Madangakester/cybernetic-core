import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  ArrowRight,
  Terminal as TerminalIcon,
  GitCommitHorizontal,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Cpu,
} from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { TerminalEmulator } from "@/components/portfolio/TerminalEmulator";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { StatusBar } from "@/components/portfolio/StatusBar";
import { CodeSpotlight } from "@/components/portfolio/CodeSpotlight";
import { CATEGORIES, PROFILE, ROLES, STACK, type Category } from "@/components/portfolio/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kester Madanga — .NET Engineer & IT Support Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Kester Madanga: resilient .NET backends, Azure DevOps CI/CD automation, and systems administration from Nairobi, Kenya.",
      },
      { property: "og:title", content: "Kester Madanga — .NET Engineer & IT Support Specialist" },
      {
        property: "og:description",
        content:
          "Resilient .NET backends, automated Azure deployment pipelines, and optimized system architectures.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHeading({ cmd, title, blurb }: { cmd: string; title: string; blurb: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-xs text-primary">
        <span className="text-accent">➜ </span>
        {cmd}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{blurb}</p>
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-border bg-secondary/50 px-2 py-1 font-mono text-[11px] text-foreground/80">
      {children}
    </span>
  );
}

function Index() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [filter, setFilter] = useState<Category | "All">("All");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const roles = ROLES.filter((r) => filter === "All" || r.categories.includes(filter));
  const stack = STACK.filter((g) => filter === "All" || g.category === filter);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message transmitted", {
        description: "200 OK — I'll reply from madangakester@gmail.com shortly.",
      });
    }, 900);
  };

  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <div className="grid-matrix pointer-events-none fixed inset-0 opacity-60" aria-hidden />
      <Nav onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
      <Toaster />

      <main className="relative mx-auto max-w-7xl px-4 pt-28 pb-24 sm:px-6">
        {/* HERO */}
        <section id="about" className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[11px] text-primary">
              <TerminalIcon className="size-3.5" />
              available for hire · Nairobi, KE
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              <span className="text-gradient-neon">{PROFILE.name}</span>
            </h1>
            <p className="mt-4 font-mono text-sm text-primary sm:text-base">
              <span className="text-accent">&gt; </span>
              {PROFILE.role}
              <span className="animate-caret">▋</span>
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Building resilient .NET backends, automating cloud deployment pipelines, and
              optimizing system architectures.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="glow-hover inline-flex items-center gap-2 rounded-lg border border-primary/50 bg-primary/15 px-5 py-2.5 font-mono text-sm text-primary"
              >
                [Execute Contact] <ArrowRight className="size-4" />
              </a>
              <a
                href="#stack"
                className="glow-hover inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-2.5 font-mono text-sm text-foreground/85"
              >
                [Explore Stack] <Cpu className="size-4" />
              </a>
            </div>
            <div className="mt-8">
              <StatusBar />
            </div>
          </div>
          <div className="animate-float-slow">
            <TerminalEmulator />
          </div>
        </section>

        {/* FILTERS */}
        <section className="mt-24">
          <div className="glass-panel flex flex-wrap items-center gap-2 p-3">
            <span className="mr-1 font-mono text-xs text-muted-foreground">filter --tag</span>
            {(["All", ...CATEGORIES] as const).map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c as Category | "All")}
                className={`rounded-md border px-3 py-1.5 font-mono text-xs transition-all ${
                  filter === c
                    ? "border-primary/60 bg-primary/15 text-primary"
                    : "border-border bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-16">
          <SectionHeading
            cmd="git log --graph --experience"
            title="Experience — system log"
            blurb="A commit-style timeline of engineering, infrastructure and client-facing roles."
          />
          <div className="relative border-l border-border/70 pl-6 sm:pl-10">
            {roles.map((r) => (
              <article key={r.title} className="glass-panel glow-hover relative mb-8 p-5 sm:p-7">
                <span className="absolute -left-[1.9rem] top-8 flex size-4 items-center justify-center rounded-full border border-primary/60 bg-background sm:-left-[3.15rem]">
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-accent">
                    <GitCommitHorizontal className="size-3.5" />
                    {r.commit}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">{r.period}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{r.title}</h3>
                <p className="mt-1 font-mono text-xs text-primary">
                  {r.company} · <span className="text-muted-foreground">{r.place}</span>
                </p>
                <ul className="mt-4 space-y-2">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 font-mono text-[10px] text-primary">+</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {r.badges.map((b) => (
                    <Tag key={b}>{b}</Tag>
                  ))}
                </div>
              </article>
            ))}
            {roles.length === 0 && (
              <p className="font-mono text-sm text-muted-foreground">
                no commits matched filter: {filter}
              </p>
            )}
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="mt-24">
          <SectionHeading
            cmd="cat stack.json --pretty"
            title="Technical stack & capabilities"
            blurb="Telemetry cards grouped by domain. Use the filters above to narrow the view."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {stack.map((g) => (
              <article key={g.title} className="glass-panel glow-hover p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold tracking-tight">{g.title}</h3>
                  <span className="rounded-md border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent">
                    {g.category}
                  </span>
                </div>
                <p className="mt-2 font-mono text-[11px] text-muted-foreground">$ {g.cmd}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
              </article>
            ))}
            {stack.length === 0 && (
              <p className="font-mono text-sm text-muted-foreground">
                no modules matched filter: {filter}
              </p>
            )}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <CodeSpotlight />
            <div className="glass-panel p-6">
              <h3 className="text-base font-semibold tracking-tight">Spotlight notes</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <span className="font-mono text-primary">retry:</span> exponential backoff with
                  jitter keeps downstream Service Bus consumers healthy under load.
                </li>
                <li>
                  <span className="font-mono text-primary">health:</span> SQL Server and queue
                  probes surface in Grafana dashboards within 30s.
                </li>
                <li>
                  <span className="font-mono text-primary">pipeline:</span> xUnit + coverage gate
                  every build before the production deploy stage runs.
                </li>
              </ul>
              <div className="mt-6 grid grid-cols-3 gap-3 font-mono">
                {[
                  { k: "coverage", v: "87%" },
                  { k: "p95", v: "112ms" },
                  { k: "deploys/wk", v: "14" },
                ].map((m) => (
                  <div
                    key={m.k}
                    className="rounded-lg border border-border bg-terminal/60 p-3 text-center"
                  >
                    <p className="text-lg text-primary">{m.v}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                      {m.k}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mt-24">
          <SectionHeading
            cmd="ls ~/education --certifications"
            title="Education & certifications"
            blurb="Formal grounding in business information technology with a software development major."
          />
          <article className="glass-panel glow-hover flex flex-wrap items-start gap-5 p-6">
            <span className="rounded-lg border border-primary/40 bg-primary/10 p-3 text-primary">
              <GraduationCap className="size-5" />
            </span>
            <div>
              <h3 className="text-base font-semibold tracking-tight">
                BSc. Business Information Technology
              </h3>
              <p className="mt-1 font-mono text-xs text-primary">
                Major: Software Development · Mount Kenya University, Kenya
              </p>
              <p className="mt-2 font-mono text-[11px] text-muted-foreground">2023 – 2026</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Software Development", "DBMS", "Networking", "Systems Analysis"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </article>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-24">
          <SectionHeading
            cmd="contact --direct --telemetry"
            title="Contact & telemetry"
            blurb="Send a message through the terminal, or reach out over any channel on the left."
          />
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass-panel p-6">
              <p className="font-mono text-xs text-muted-foreground">system.status</p>
              <ul className="mt-4 space-y-4 text-sm">
                {[
                  { Icon: Mail, k: "Email", v: PROFILE.email, href: `mailto:${PROFILE.email}` },
                  {
                    Icon: Phone,
                    k: "Phone",
                    v: PROFILE.phone,
                    href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
                  },
                  { Icon: MapPin, k: "Location", v: PROFILE.location },
                  { Icon: Clock, k: "Timezone", v: PROFILE.timezone },
                ].map(({ Icon, k, v, href }) => (
                  <li key={k} className="flex items-center gap-3">
                    <span className="rounded-md border border-border bg-terminal/60 p-2 text-primary">
                      <Icon className="size-4" />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {k}
                      </span>
                      {href ? (
                        <a href={href} className="font-mono text-sm hover:text-primary">
                          {v}
                        </a>
                      ) : (
                        <span className="font-mono text-sm">{v}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg border border-success/30 bg-success/8 p-3 font-mono text-xs text-success">
                status: open to opportunities · response time &lt; 24h
              </div>
            </div>

            <form onSubmit={onSubmit} className="glass-panel glow-border overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border/70 bg-terminal/60 px-4 py-3 font-mono text-xs text-muted-foreground">
                <span className="size-2 rounded-full bg-primary" /> send-message --interactive
              </div>
              <div className="space-y-4 bg-terminal/50 p-5 font-mono text-sm">
                {[
                  { name: "name", label: "name", type: "text", ph: "Ada Lovelace" },
                  { name: "email", label: "email", type: "email", ph: "you@company.com" },
                  { name: "subject", label: "subject", type: "text", ph: "Backend role — .NET" },
                ].map((f) => (
                  <label key={f.name} className="block">
                    <span className="text-[11px] text-primary">$ set --{f.label}</span>
                    <input
                      required
                      name={f.name}
                      type={f.type}
                      placeholder={f.ph}
                      className="mt-1.5 w-full rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring/30"
                    />
                  </label>
                ))}
                <label className="block">
                  <span className="text-[11px] text-primary">$ set --message</span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell me about the system you're building…"
                    className="mt-1.5 w-full resize-y rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring/30"
                  />
                </label>
                <button
                  type="submit"
                  disabled={sending}
                  className="glow-hover inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary/50 bg-primary/15 px-4 py-2.5 text-sm text-primary disabled:opacity-60"
                >
                  {sending ? "transmitting…" : "[Send Command]"}
                  <Send className="size-4" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 font-mono text-xs text-muted-foreground sm:px-6">
          <span>© {new Date().getFullYear()} Kester Madanga — built with .NET-grade rigor.</span>
          <button onClick={() => setPaletteOpen(true)} className="hover:text-primary">
            press ctrl + k to navigate
          </button>
        </div>
      </footer>
    </div>
  );
}
