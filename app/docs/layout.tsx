import type { Metadata } from "next";
import DocsShell from "./DocsShell";

export const metadata: Metadata = {
  title: "Docs | Wayan Phantom",
  description:
    "Developer notes and documentation by Wayan Phantom — Fullstack, Web3, and AI.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocsShell>{children}</DocsShell>;
}
