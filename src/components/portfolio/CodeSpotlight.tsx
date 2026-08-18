import { useState, type ReactNode } from "react";
import { CODE_SNIPPET, PIPELINE_SNIPPET } from "./data";

const KEYWORDS =
  /\b(var|new|await|async|public|private|class|void|return|using|builder|app|stage|stages|jobs|job|steps|trigger|strategy|deployment|environment|dependsOn|script|task|inputs|displayName|runOnce|deploy)\b/;

function highlight(line: string): ReactNode {
  if (line.trim().startsWith("//") || line.trim().startsWith("#")) {
    return <span className="text-muted-foreground italic">{line}</span>;
  }
  const parts = line.split(/(\"[^\"]*\"|'[^']*'|\b\d+\b|[{}()[\];,:]|\s+)/g).filter(Boolean);
  return parts.map((p, i) => {
    let cls = "text-foreground/85";
    if (/^["']/.test(p)) cls = "text-success";
    else if (/^\d+$/.test(p)) cls = "text-warning";
    else if (KEYWORDS.test(p)) cls = "text-accent";
    else if (/^[A-Z][A-Za-z0-9]*$/.test(p)) cls = "text-primary";
    else if (/^[{}()[\];,:]$/.test(p)) cls = "text-muted-foreground";
    return (
      <span key={i} className={cls}>
        {p}
      </span>
    );
  });
}

const TABS = [
  { id: "api", label: "Program.cs", code: CODE_SNIPPET },
  { id: "pipeline", label: "azure-pipelines.yml", code: PIPELINE_SNIPPET },
] as const;

export function CodeSpotlight() {
  const [active, setActive] = useState<string>(TABS[0].id);
  const tab = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <div className="glass-panel overflow-hidden">
      <div className="flex flex-wrap items-center gap-1 border-b border-border/70 bg-terminal/60 px-3 py-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${
              t.id === active
                ? "bg-primary/12 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
        <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          code spotlight
        </span>
      </div>
      <pre className="max-h-[26rem] overflow-auto bg-terminal/80 p-4 font-mono text-[0.72rem] leading-6 sm:text-[0.8rem]">
        <code>
          {tab.code.split("\n").map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="w-6 shrink-0 select-none text-right text-muted-foreground/50">
                {i + 1}
              </span>
              <span className="whitespace-pre">{highlight(line)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
