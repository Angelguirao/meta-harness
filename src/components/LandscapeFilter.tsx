"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  LAYERS,
  PEERS,
  type LayerId,
} from "@/data/landscape";
import { cn } from "@/lib/utils";

type Filter = LayerId | "all";

export default function LandscapeFilter() {
  const [layer, setLayer] = useState<Filter>("all");
  const reduce = useReducedMotion();

  const peers = useMemo(
    () => (layer === "all" ? PEERS : PEERS.filter((p) => p.layer === layer)),
    [layer],
  );

  const layerLabel = (id: LayerId) =>
    LAYERS.find((l) => l.id === id)?.label ?? id;

  return (
    <div className="space-y-6">
      <nav className="flex flex-wrap gap-2" aria-label="Filter landscape by layer">
        <Chip
          active={layer === "all"}
          onClick={() => setLayer("all")}
          label="All"
        />
        {LAYERS.map((l) => (
          <Chip
            key={l.id}
            active={layer === l.id}
            onClick={() => setLayer(l.id)}
            label={l.label}
          />
        ))}
      </nav>

      <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
        {peers.length} peer{peers.length === 1 ? "" : "s"}
      </p>

      <ul className="divide-y divide-border/40">
        <AnimatePresence mode="popLayout" initial={false}>
          {peers.map((peer) => (
            <motion.li
              key={peer.id}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="py-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                {peer.url ? (
                  <a
                    href={peer.url}
                    target="_blank"
                    rel="noreferrer"
                    className="personal-display-title text-lg text-foreground underline-offset-4 hover:underline"
                  >
                    {peer.name}
                  </a>
                ) : (
                  <span className="personal-display-title text-lg text-foreground">
                    {peer.name}
                  </span>
                )}
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {layerLabel(peer.layer)}
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {peer.blurb}
              </p>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

function Chip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <Button
      type="button"
      variant="unset"
      size="unset"
      onClick={onClick}
      className={cn(
        "min-h-10 rounded-md border px-3 py-1.5 text-left text-sm transition-colors duration-150",
        active
          ? "border-accent-strong/40 bg-accent-soft/70 text-foreground"
          : "border-border/50 text-muted hover:border-border hover:text-foreground",
      )}
    >
      {label}
    </Button>
  );
}
