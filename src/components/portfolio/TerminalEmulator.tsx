import { useEffect, useRef, useState } from "react";

type Line = { kind: "cmd" | "out" | "ok" | "muted"; text: string };

const SCRIPT: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "kester_madanga :: software_engineer + it_support" },
  { kind: "cmd", text: "cat skills.json" },
  { kind: "out", text: '{ "backend": ["C#", ".NET 10", "REST", "TDD"],' },
  { kind: "out", text: '  "cloud":   ["Azure DevOps", "Service Bus", "CosmosDB"],' },
  { kind: "out", text: '  "data":    ["SQL Server", "PostgreSQL", "Redis"] }' },
  { kind: "cmd", text: "git log --oneline -3" },
  { kind: "muted", text: "a91f4c2 feat(api): harden retry pipeline + health probes" },
  { kind: "muted", text: "5c07be1 chore(labs): automate windows image rollout" },
  { kind: "muted", text: "1d8ea30 docs: publish observability runbook" },
  { kind: "cmd", text: "contact --direct" },
  { kind: "ok", text: "→ madangakester@gmail.com | +254 705 928 104" },
  { kind: "ok", text: "→ Nairobi, KE · EAT/UTC+3 · open to opportunities" },
];

const styles: Record<Line["kind"], string> = {
  cmd: "text-primary",
  out: "text-foreground/85",
  ok: "text-success",
  muted: "text-muted-foreground",
};

export function TerminalEmulator() {
  const [lineIndex, setLineIndex] = useState(0);
  const [chars, setChars] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = SCRIPT[lineIndex % SCRIPT.length]!;
    const isCmd = line.kind === "cmd";
    if (chars < line.text.length) {
      const t = setTimeout(() => setChars((c) => c + 1), isCmd ? 45 : 8);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => {
        setChars(0);
        setLineIndex((i) => (i + 1) % SCRIPT.length);
      },
      isCmd ? 420 : 220,
    );
    return () => clearTimeout(t);
  }, [chars, lineIndex]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lineIndex, chars]);

  const done = SCRIPT.slice(0, lineIndex);
  const current = SCRIPT[lineIndex % SCRIPT.length]!;

  return (
    <div className="glass-panel glow-border relative overflow-hidden scanlines">
      <div className="flex items-center gap-2 border-b border-border/70 bg-terminal/60 px-4 py-3">
        <span className="size-3 rounded-full bg-destructive/80" />
        <span className="size-3 rounded-full bg-warning/80" />
        <span className="size-3 rounded-full bg-success/80" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          kester@nairobi: ~/portfolio — zsh
        </span>
      </div>
      <div
        ref={scrollRef}
        className="h-[22rem] overflow-hidden bg-terminal/80 p-4 font-mono text-[0.78rem] leading-6 sm:text-sm"
      >
        {done.map((line, i) => (
          <div key={i} className={styles[line.kind]}>
            {line.kind === "cmd" && <span className="text-accent">➜ </span>}
            {line.text}
          </div>
        ))}
        <div className={styles[current.kind]}>
          {current.kind === "cmd" && <span className="text-accent">➜ </span>}
          {current.text.slice(0, chars)}
          <span className="animate-caret text-primary">▋</span>
        </div>
      </div>
    </div>
  );
}
