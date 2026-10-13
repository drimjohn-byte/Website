# Design and accessibility audit (October 2026)

Reviewed against two skills in `.claude/skills/`: `web-design-guidelines` (Vercel's Web Interface Guidelines) and `taste-skill` (anti-template design rules). Checked in the built site with Playwright at 390px and 1440px.

What already passes: no horizontal scroll at either width, a skip link, a visible `:focus-visible` ring, reduced-motion handling for scroll reveals and smooth scroll, `text-wrap: balance` on headings, no em dashes in the copy, CTAs that stay on one line, a sensible heading order, and an enquiry form with labels, autocomplete and an error summary.

## Worth fixing

1. **No `og:image`** (`src/layouts/Base.astro:29-32`). Leads come in through WhatsApp, and a link shared there shows no preview image. Add a 1200x630 share image, for example cropped from the Harbour's Edge aerial.
2. **The hero photo is too small for desktop** (`public/images/harbours-edge-aerial-plots.jpg`, 1125px wide). It is stretched to fill 1440px+ screens and looks soft. Export a 2400px original and serve it with Astro's `<Picture>` (AVIF/WebP, `srcset`). That also brings the ~290KB JPEG down on mobile.
3. **Images have no `width`/`height`** (`src/components/Photo.astro:15`, `src/pages/work/[slug].astro:363`). The phone screenshots in the gallery have no aspect-ratio either, so the page shifts while they load (CLS). `<Picture>` from item 2 adds the dimensions automatically.
4. **The hero image has no `fetchpriority="high"`** (`src/components/Photo.astro:20`). It is the LCP element. Set it when `eager` is true.
5. **The open mobile menu doesn't trap focus** (`src/components/Header.astro:99-105`). Tabbing from the last menu link moves into the page hidden behind it. Set `inert` on `<main>` and `<footer>` while the menu is open, and add `overscroll-behavior: contain` to `.menu`.
6. **Field errors aren't linked to their inputs** (`src/components/EnquiryForm.astro:19`, `:28`). Only the consent checkbox has `aria-describedby`. Add `aria-describedby="f-name-error"` to the name input and `aria-describedby="f-role-error"` to the role fieldset, so screen readers read the error when the field gets focus.
7. **The form fields have a weak focus indicator** (`src/components/EnquiryForm.astro:106`). `outline: none` is replaced only by a slightly thicker underline. Keep the underline, but add the standard focus ring on `:focus-visible` to meet WCAG 2.2 focus appearance.

## Taste-skill suggestions (brand decisions, not bugs)

`design/DESIGN_SYSTEM.md` deliberately chooses things that taste-skill discourages by default: a serif display font (Playfair), a warm sand palette and numbered eyebrows. The design system gives editorial reasons for each, so these are options to consider, not defects:

- **Too many eyebrows.** The home page has 6 small uppercase labels (`Velddrif · West Coast`, `What we do`, `01 Services` to `05 Let's talk`), and taste-skill recommends at most one per three sections. Dropping the `01`-`05` numbers and most of the labels would make the page feel less templated. The headlines already say what each section is.
- **Four names for the contact action**: "Let's talk", "Start a conversation" (`NextProject.astro:8`), "WhatsApp us" and "Continue in WhatsApp". Pick one label for the main button and use it everywhere.
- **Placeholder photography is still live** on the home page: the full-bleed break (`index.astro:111`) and all three service rows. Replacing these with real shoots matters more than any of the code fixes above.
- **A divider under every row** in the service "includes" lists (`ServiceRow.astro:34`, `services/[slug].astro:271`). A single rule above the group would read lighter.
- **The header listens to `window` scroll** (`Header.astro:97`). It is passive and cheap, but an `IntersectionObserver` on a sentinel at the top of the page does the same job without running on every scroll.
