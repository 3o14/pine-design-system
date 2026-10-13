"use client";

import { useEffect, useState } from "react";

const DEFAULT_INTERVAL_MS = 2200;
const TRANSITION_MS = 320;

export function CyclingWord({
  words,
  intervalMs = DEFAULT_INTERVAL_MS,
  className,
  style,
}: {
  words: string[];
  intervalMs?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (words.length <= 1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let swap: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setVisible(false);
      swap = setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setVisible(true);
      }, TRANSITION_MS);
    }, intervalMs);

    return () => {
      clearInterval(interval);
      clearTimeout(swap);
    };
  }, [words, intervalMs]);

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(6px)",
        transition: `opacity ${TRANSITION_MS}ms ease, transform ${TRANSITION_MS}ms ease`,
        ...style,
      }}
    >
      {words[index]}
    </span>
  );
}
