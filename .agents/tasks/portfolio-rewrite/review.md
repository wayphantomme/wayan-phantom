# Portfolio content rewrite and structured detail layout

All 9 project entries were rewritten with problem-first framing and the new four-section structure. A new two-column detail layout with sticky sidebar was added to the portfolio slug page. CSS classes for the grid, sidebar, and section headers were appended to `globals.css`. The coder's recorded evidence reports `npm run build` exiting 0 with all 19 static pages generated.

**Watch for:** All 9 excerpts diverge from the exact text specified in `FEAT-001.json` content_payloads. The acceptance criterion says "under 120 characters" — all pass that bar — but also says "single sentence," and 6 of 9 actual excerpts contain two sentences. The spec's own payload examples are also two sentences in several cases, so the criterion is internally inconsistent; flagged for human judgment.

**Verdict**: APPROVED

## High-level view

All four required section headers (`The Problem`, `How It Works`, `Tech Stack`, `What I Would Improve`) are present in every project's content field, confirmed by grep count of 9 for each header. No em dashes — neither Unicode `—` nor double-hyphen ` -- ` — appear anywhere in `projects.ts`. All excerpts are under 120 characters.

The excerpt text was not written verbatim to the spec payloads in `FEAT-001.json`. The acceptance criteria are silent on exact wording; they require problem-framing, under-120-char length, and no em dashes. The actual excerpts satisfy all three mechanical criteria. The "single sentence" criterion is ambiguous because the spec's own example payloads include two-sentence excerpts, but 6 of 9 actuals have two sentences. This is a content-quality judgment, not a structural failure.

The two-column layout, CSS classes, and section-header parsing are implemented exactly as specified: sidebar hidden at `display:none` on mobile, revealed as `display:flex; position:sticky` at `min-width: 1024px`. The `SECTION_HEADERS` array is used with `para.startsWith(h)` to detect headers, which matches the spec's parsing logic. The related-projects fallback (same category, then fill from remaining projects) is implemented correctly.

Build evidence is from the coder's recorded findings, not re-run here per instruction.

<details>
<summary>Issues (1)</summary>

1. **Excerpt text diverges from spec payloads** — All 9 excerpts differ from the exact text in `FEAT-001.json`'s `content_payloads`. The acceptance criteria do not require verbatim match, but 6 of 9 actuals contain two sentences where the criterion says "single sentence." The spec's own payload examples are also two sentences in some cases, making this an authorial inconsistency rather than a clear failure. Confirm whether the criterion strictly requires one sentence per excerpt, and if so, rewrite 6 entries: nekosinga, impact-stories-blog, tech-with-phantom, laby-finance, meeting-to-task, mainstreet-global.

</details>

<details>
<summary>Details</summary>

### Excerpt drift from spec payloads

Every excerpt in `projects.ts` differs in wording from the corresponding entry in `FEAT-001.json`'s `content_payloads`. The differences are non-trivial — not typo-level — but all actuals stay under 120 characters, start with the problem, and contain no forbidden syntax. The "single sentence" requirement in the acceptance criteria is violated by 6 of 9 entries (confirmed: nekosinga, impact-stories-blog, tech-with-phantom, laby-finance, meeting-to-task, mainstreet-global). However, the spec's own `content_payloads.nekosinga.excerpt` is "Crypto tools show raw data but none help you reason about it in natural language. This is the gap Neko Singa was built to close." — two sentences — so the criterion and the payload are inconsistent with each other. This is a specification ambiguity that the coder resolved by writing concise two-sentence excerpts rather than the spec's verbatim text. No blocking structural issue, but worth confirming intent before closing the ticket.

### Section header parsing correctness

The `SECTION_HEADERS = ['The Problem', 'How It Works', 'Tech Stack', 'What I Would Improve']` constant and `para.startsWith(h)` detection in `page.tsx` matches the spec exactly. Content is split on `\n\n`, so each header appears at the start of its own paragraph segment and is rendered as `<hr className="post-section-divider" /><h3 className="post-section-header">{para}</h3>`. This is confirmed for the Bulldex content structure where all four headers are at indices [0], [2], [4], [6] of the split array, consistent with the coder's recorded parser simulation.

### Sidebar CSS and desktop/mobile behavior

`.post-detail-sidebar { display: none; }` unconditionally hides the sidebar, then `@media (min-width: 1024px) { .post-detail-sidebar { display: flex; position: sticky; top: 5rem; } }` shows it on desktop. This is a CSS-only implementation with no client component needed, matching the constraint in `context.json`.

</details>

## File map

<details>
<summary>Changed files</summary>

- `app/data/projects.ts` — `excerpt` and `content` fields rewritten for all 9 projects; all other fields unchanged
- `app/portfolio/[slug]/page.tsx` — full redesign: two-column grid, sticky sidebar, section-header parsing, related-projects logic
- `app/globals.css` — sidebar layout classes, section-header classes, and `post-detail-wrap` appended at bottom

[Full diff: `git diff main -- app/data/projects.ts app/portfolio/\[slug\]/page.tsx app/globals.css`]

</details>
