import { useEffect, useMemo, useState } from "react";
import { PROFILE } from "./data";

type Action = { id: string; label: string; hint: string; run: () => void };

function scrollTo(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);

  const actions = useMemo<Action[]>(
    () => [
      { id: "about", label: "Go to ~/about", hint: "section", run: () => scrollTo("#about") },
      {
        id: "experience",
        label: "Go to ~/experience",
        hint: "section",
        run: () => scrollTo("#experience"),
      },
      { id: "stack", label: "Go to ~/stack", hint: "section", run: () => scrollTo("#stack") },
      {
        id: "education",
        label: "Go to ~/education",
        hint: "section",
        run: () => scrollTo("#education"),
      },
      { id: "contact", label: "Go to ~/contact", hint: "section", run: () => scrollTo("#contact") },
      {
        id: "github",
        label: "Open GitHub profile",
        hint: "link",
        run: () => window.open(PROFILE.github, "_blank", "noopener"),
      },
      {
        id: "linkedin",
        label: "Open LinkedIn profile",
        hint: "link",
        run: () => window.open(PROFILE.linkedin, "_blank", "noopener"),
      },
      {
        id: "email",
        label: `Email ${PROFILE.email}`,
        hint: "mailto",
        run: () => {
          window.location.href = `mailto:${PROFILE.email}`;
        },
      },
      {
        id: "resume",
        label: "Download resume",
        hint: "file",
        run: () => window.open("/resume-kester-madanga.txt", "_blank", "noopener"),
      },
    ],
    [],
  );

  const results = actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase().trim()));

  useEffect(() => {
    if (!open) {
      setQuery("");
      setCursor(0);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCursor((c) => (results.length ? (c + 1) % results.length : 0));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setCursor((c) => (results.length ? (c - 1 + results.length) % results.length : 0));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const action = results[cursor];
        if (action) {
          action.run();
          onOpenChange(false);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, results, cursor, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-start justify-center bg-background/80 px-4 pt-[12vh] backdrop-blur-sm"
      onClick={() => onOpenChange(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="glass-panel glow-border w-full max-w-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3 font-mono text-sm">
          <span className="text-primary">❯</span>
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
            }}
            placeholder="run a command…"
            className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
          />
          <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground">
            ESC
          </kbd>
        </div>
        <ul className="max-h-72 overflow-y-auto p-2 font-mono text-sm">
          {results.length === 0 && (
            <li className="px-3 py-3 text-muted-foreground">command not found: {query}</li>
          )}
          {results.map((a, i) => (
            <li key={a.id}>
              <button
                onMouseEnter={() => setCursor(i)}
                onClick={() => {
                  a.run();
                  onOpenChange(false);
                }}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition-colors ${
                  i === cursor
                    ? "bg-primary/12 text-primary"
                    : "text-foreground/85 hover:bg-secondary/60"
                }`}
              >
                <span>{a.label}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {a.hint}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
