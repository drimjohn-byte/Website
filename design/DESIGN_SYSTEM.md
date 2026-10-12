# WESTWARD Design System

Property marketing studio based in Velddrif. Three services: development launches, listings (for agency partners), and rentals and hospitality.

**Site goals, in order:** build trust, then generate qualified leads.
**Feel:** a luxury property journal meets a high-end creative studio. Quiet confidence, not loud promotion.

Tokens live in [`src/styles/tokens.css`](../src/styles/tokens.css). This document explains how to use them.

---

## 1. Colour

| Token | Hex | Role |
|---|---|---|
| Salt White | `#F8F7F3` | Default page background |
| Deep Ink | `#1A1F1C` | Text, dark sections, primary CTA, wordmark on light |
| Warm Sand | `#C9B89E` | Secondary sections, hairline rules, numerals, accents on dark |
| Atlantic Blue Grey | `#2F454A` | Occasional atmospheric sections, focus ring on light |
| Muted Olive | `#7A7E68` | Small supporting details only (dividers, tags) |
| *Sand Tint* (derived) | `#EFEAE0` | Soft card and form surfaces |
| *Olive Deep* (derived) | `#5E624F` | Muted text on light backgrounds |
| *Stone* (derived) | `#A9A595` | Muted text on dark backgrounds |

**Balance:** about 60% Salt White, 25% Deep Ink, 10% Warm Sand, 5% Atlantic and Olive combined. Photography supplies the rest of the colour.

### Contrast rules (WCAG 2.2 AA, measured)

| Pairing | Ratio | Allowed for |
|---|---|---|
| Ink on Salt White | 15.6 | Everything |
| Salt White on Ink | 15.6 | Everything |
| Salt White on Atlantic | 9.5 | Everything |
| Ink on Warm Sand | 8.6 | Everything |
| Sand on Ink | 8.6 | Everything (labels and accents on dark) |
| Olive Deep on Salt White | 5.9 | Muted body text |
| Stone on Ink | 6.8 | Muted body text on dark |
| Muted Olive on Salt White | 3.9 | **Large text (24px+) and decoration only** |
| Sand on Salt White | 1.8 | **Decoration only (rules, shapes), never text** |
| Salt White on Sand | 1.8 | **Never.** Sand sections use Ink text. |

That is why the two derived muted-text colours exist: the brand olive is too light for small text on Salt White.

### Section themes

Sections switch colour with one class, and every component follows automatically:
`default` (Salt White), `.theme-ink`, `.theme-sand`, `.theme-atlantic`.

There is no dark mode toggle. Dark sections are part of the editorial rhythm instead.

---

## 2. Typography

**Playfair Display** (display) and **Manrope** (body/UI), both self-hosted, subset to Latin, with `font-display: swap`.
Weights loaded: Playfair 400 and 400 italic; Manrope 300, 400, 500, 600. That is six files in total.

| Style | Font | Size (mobile to desktop) | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display (hero) | Playfair | 44 to 104px | 400 | 1.02 | -0.02em |
| H1 | Playfair | 36 to 72px | 400 | 1.12 | -0.02em |
| H2 | Playfair | 30 to 48px | 400 | 1.12 | -0.01em |
| H3 | Playfair | 22 to 28px | 400 | 1.12 | 0 |
| Pull quote | Playfair Italic | 24 to 40px | 400 | 1.3 | 0 |
| Lead | Manrope | 17 to 20px | 300 | 1.65 | 0 |
| Body | Manrope | 16px | 400 | 1.65 | 0 |
| Small / caption | Manrope | 14px | 400 | 1.5 | 0.01em |
| Label (eyebrow, nav, buttons) | Manrope, UPPERCASE | 12px | 500–600 | 1.4 | 0.18em |
| Wordmark | Manrope, UPPERCASE | per logo | 500 | 1 | 0.32em |

**Rules**
- Headlines always use Playfair 400. Hierarchy comes from size, not weight.
- Use the italic for one emphasised word or phrase per headline at most, e.g. "Beautiful property. *Strategic* marketing."
- No bold in body copy. Use 500 for inline emphasis.
- Body text never runs wider than 62ch.
- Sentence case for headlines; UPPERCASE only for labels, nav, buttons and the wordmark.
- The large jump in size between headlines and supporting copy is deliberate, and is what makes the pages read as editorial.

---

## 3. Layout and spacing

### Grid
- **12 columns** from 1024px up, **6** on tablet, **4** on mobile.
- Container max width is 1440px; gutters run from 16px on mobile to 48px on desktop.
- **Full-bleed images** escape the container entirely (hero, project features, section breaks).
- **Asymmetry** comes from offset spans, not random placement. The approved patterns:
  - `7 / 5` split (image left, text right, or the reverse)
  - `5 + offset 1 / 6` text and image
  - Text column starting at column 2 or 3, with an empty column to the left
  - Work grid: alternating large (8 cols) and small (4 cols) tiles, the small one pushed down
- Long-form text (case studies, journal) uses a 760px column.

### Spacing
A 4px base, using only these tokens: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.

- Vertical section padding scales from 64px on mobile to 160px on desktop (`--section-y`).
- Heading to body: 24–32px. Body to CTA: 32–48px. Eyebrow to heading: 16px.
- When unsure, add more whitespace. Generous space is a big part of how the site reads as premium.

### Shape, lines and motion
- **Square corners** everywhere (`--radius: 0`); inputs get 2px.
- **Hairline 1px rules** instead of shadows or cards. No drop shadows.
- Motion is restrained:
  - Images fade and rise 24px on scroll-in (900ms).
  - Text fades in (450ms).
  - Links get a growing underline on hover.
  - No parallax, carousels that move on their own, or bouncing elements.
- All motion turns off under `prefers-reduced-motion`.

### Breakpoints
`sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1440`, written mobile-first.

---

## 4. Components

### Foundations
1. **Wordmark**: WESTWARD with an optional "PROPERTY MARKETING STUDIO" line. Ink and ivory variants.
2. **Monogram**: the W mark, used for the favicon, social links and loading states.
3. **Eyebrow label**: uppercase label with an optional section number, e.g. `01 — SERVICES`.
4. **Button**:
   - `primary` is a solid ink block (ivory on dark sections).
   - `outline` has a 1px border.
   - `text` is a label with an arrow and an animated underline (used for "EXPLORE OUR WORK").
   - All are uppercase labels with square corners, at least 48px tall.
5. **Link**: an inline underline that thickens on hover.
6. **Rule**: a hairline divider, in sand or line colour.
7. **Editorial image**: a responsive `<picture>` with fixed aspect ratios (3:2, 4:5, 16:9, 21:9), an optional caption and credit, lazy-loaded, AVIF/WebP.

### Navigation
8. **Header**: wordmark, 3–4 links (Work, Services, About, Journal) and a `LET'S TALK` button. Transparent over the hero, then solid after scrolling.
9. **Menu overlay**: a full-screen ink panel with large Playfair links, used on mobile.
10. **Footer**: an ink section with a CTA line, contact details, areas served, social links and legal.

### Content sections
11. **Hero**: a full-bleed photo, a display headline, lead copy, and primary plus text CTAs. A split variant is available for inner pages.
12. **Statement block**: one large Playfair paragraph, used as a positioning statement.
13. **Service row**: an image-led row (no icons) with the audience, title, short description, "what's included" list, "from" price and a link to the service page. Rows alternate in a `7/5` split.
13a. **Price**: a "From R…" figure in Playfair. While the price is unset it shows a sand "Price to confirm" label.
13b. **Next project slot**: an outlined panel beside the real case studies inviting the next project. It replaces fake portfolio tiles.
14. **Work grid and case study card**: asymmetric tiles with an image, project name, location and service tags.
15. **Case study template**: a hero image, then a facts strip (client, location, services), then challenge, approach and outcome, then a gallery, results figures and a pull quote.
16. **Results figure**: a large Playfair numeral with a small label, e.g. "42 / qualified enquiries in 30 days". Use only real, verifiable numbers.
17. **Testimonial**: a large italic quote with the name, agency and portrait. Shown as a static stack, not an auto-rotating carousel.
18. **Process steps**: a numbered horizontal sequence (Discover, Position, Create, Launch, Refine).
19. **Areas served**: a typographic list of West Coast towns, optionally with a minimal line map. No pins and no clip art.
20. **Client logos**: a monochrome logo row of the agencies and developers you've worked with.
21. **Journal card**: image, category, title and read time, for insights and campaign breakdowns.
22. **CTA band**: a full-width ink or Atlantic section with a headline and `LET'S TALK`. It closes every page.

### Lead capture
23. **Enquiry form**: name, company, "I am" (Estate agent / Agency principal / Developer / Other), services of interest (multi-select chips), area and message, plus a POPIA consent line. Inline validation and an accessible error summary. On submit it opens WhatsApp Business with the answers pre-filled, so no server or CRM is needed.
24. **Chip / toggle group**: for service selection in the form.
25. **WhatsApp contact link**: a direct link in the contact section and footer. It does not float over the content.
26. **Success state**: an on-brand confirmation that says what happens next and when.

### Utility
27. **Skip link**, **visually hidden** helper, **focus ring** (2px Atlantic on light, 2px Sand on dark).
28. **SEO and meta**: Open Graph image template (monogram, headline, photo) and `LocalBusiness` structured data with the areas served.

### Page map (proposed)
Phase 1 (built): home page; one page per service (`/services/…`); Harbour's Edge case study (`/work/harbours-edge`).
Phase 2: About page, more case studies and a Journal, once real projects and photography exist.

---

## 5. Guardrails

- No house or roof icons, wave graphics, handshake stock photos, or oversaturated skies.
- No generic marketing icons. Services are shown through real project imagery.
- No exclamation marks, superlatives or invented statistics.
- One primary CTA per viewport. "LET'S TALK" is always the primary; "EXPLORE OUR WORK" is always the text-link secondary.

- Never show sample or invented projects. Until there's more work, show the real case studies plus the next project slot.
- Lead with outcomes (what the buyer gets), not adjectives.
