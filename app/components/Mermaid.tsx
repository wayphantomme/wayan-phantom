"use client";

import { useEffect, useRef, useState } from "react";

interface MermaidProps {
  chart: string;
}

let mermaidInitialized = false;

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!chart) return;

    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;

        if (!mermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            theme: "neutral",
            fontFamily: "inherit",
            flowchart: {
              curve: "basis",
              padding: 20,
            },
            themeVariables: {
              primaryColor: "#f1f5f9",
              primaryTextColor: "#1e293b",
              primaryBorderColor: "#cbd5e1",
              lineColor: "#94a3b8",
              secondaryColor: "#f8fafc",
              tertiaryColor: "#fff",
              fontSize: "14px",
            },
          });
          mermaidInitialized = true;
        }

        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg: rendered } = await mermaid.render(id, chart.trim());
        setSvg(rendered);
        setError("");
      } catch (err) {
        console.error("Mermaid render error:", err);
        setError(err instanceof Error ? err.message : "Failed to render diagram");
      }
    }

    render();
  }, [chart]);

  if (error) {
    return (
      <div className="mermaid-error">
        <p>Diagram error: {error}</p>
        <pre>{chart}</pre>
      </div>
    );
  }

  if (!svg) {
    return <div className="mermaid-loading" aria-label="Loading diagram" />;
  }

  return (
    <div
      ref={ref}
      className="mermaid-wrap"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
