import { Github, Linkedin, Mail, Download, Command } from "lucide-react";
import { NAV_LINKS, PROFILE } from "./data";

export function Nav({ onOpenPalette }: { onOpenPalette: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="animate-pulse-dot size-2 rounded-full bg-success" />
          <span className="text-gradient-neon">[Kester.dev]</span>
          <span className="hidden text-[10px] uppercase tracking-widest text-muted-foreground sm:inline">
            online
          </span>
        </a>

        <ul className="mx-auto hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-1.5 lg:ml-0">
          <button
            onClick={onOpenPalette}
            className="glow-hover hidden items-center gap-2 rounded-md border border-border bg-card/60 px-2.5 py-1.5 font-mono text-xs text-muted-foreground sm:flex"
            aria-label="Open command palette"
          >
            <Command className="size-3.5" />
            <span>Ctrl</span>
            <span className="text-primary">K</span>
          </button>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glow-hover rounded-md border border-border bg-card/60 p-2 text-muted-foreground hover:text-primary"
          >
            <Github className="size-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glow-hover rounded-md border border-border bg-card/60 p-2 text-muted-foreground hover:text-primary"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email Kester"
            className="glow-hover rounded-md border border-border bg-card/60 p-2 text-muted-foreground hover:text-primary"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="/resume-kester-madanga.txt"
            download
            className="glow-hover flex items-center gap-2 rounded-md border border-primary/50 bg-primary/12 px-3 py-1.5 font-mono text-xs text-primary"
          >
            <Download className="size-3.5" />
            <span className="hidden sm:inline">resume.pdf</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
