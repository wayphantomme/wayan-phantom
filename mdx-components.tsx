import type { MDXComponents } from "mdx/types";
import Mermaid from "@/app/components/Mermaid";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Mermaid,
  };
}
