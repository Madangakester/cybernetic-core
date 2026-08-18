import { useEffect, useState } from "react";

export function StatusBar() {
  const [latency, setLatency] = useState(24);
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () => {
      setLatency(18 + Math.floor(Math.random() * 16));
      setClock(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Nairobi",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date()),
      );
    };
    tick();
    const id = setInterval(tick, 2000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { k: "Location", v: "Nairobi, KE" },
    { k: "Status", v: "Open to Opportunities" },
    { k: "Latency", v: `${latency}ms` },
    { k: "Local time", v: clock ? `${clock} EAT` : "--:--:-- EAT" },
    { k: "Uptime", v: "99.98%" },
  ];

  return (
    <div className="glass-panel flex flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 font-mono text-xs">
      <span className="flex items-center gap-2 text-success">
        <span className="animate-pulse-dot size-2 rounded-full bg-success" />
        systems nominal
      </span>
      {items.map((i) => (
        <span key={i.k} className="text-muted-foreground">
          {i.k}: <span className="text-primary">{i.v}</span>
        </span>
      ))}
    </div>
  );
}
