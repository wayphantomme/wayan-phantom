"use client";

import React from "react";

const SECTION_HEADERS = ["The Problem", "How It Works", "Tech Stack", "What I Would Improve"];

function renderContentBlock(paragraph: string, inSection: string): React.ReactElement {
  // 1. Section header
  if (SECTION_HEADERS.includes(paragraph)) {
    return (
      <div>
        <hr className="post-section-divider" />
        <h3 className="post-section-header">{paragraph}</h3>
      </div>
    );
  }

  // 2. Numbered list
  const lines = paragraph.split("\n").filter((l) => l.trim() !== "");
  const numberedLines = lines.filter((l) => /^\d+\.\s/.test(l.trim()));
  if (numberedLines.length >= 2) {
    return (
      <ol className="post-how-list">
        {numberedLines.map((line, idx) => (
          <li key={idx}>{line.replace(/^\d+\.\s*/, "").trim()}</li>
        ))}
      </ol>
    );
  }

  // 3. Tech Stack pipe table
  if (inSection === "Tech Stack" && lines.some((l) => l.includes(" | "))) {
    return (
      <table className="post-tech-table">
        <tbody>
          {lines.filter((l) => l.includes(" | ")).map((line, idx) => {
            const [tech, reason] = line.split(" | ", 2);
            return (
              <tr key={idx}>
                <td>{tech.trim()}</td>
                <td>{reason.trim()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  // 4. Default paragraph
  return <p>{paragraph}</p>;
}

export default function ProjectContent({ content }: { content: string }) {
  let currentSection = "";
  const blocks = content.split("\n\n").map((para, i) => {
    const trimmed = para.trim();
    if (SECTION_HEADERS.includes(trimmed)) {
      currentSection = trimmed;
    }
    return (
      <React.Fragment key={i}>
        {renderContentBlock(trimmed, currentSection)}
      </React.Fragment>
    );
  });

  return <div className="post-blog-content">{blocks}</div>;
}
