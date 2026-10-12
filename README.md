# WESTWARD website

Marketing site for WESTWARD, a Velddrif-based property marketing studio: development launches, listings, and rentals and hospitality on the South African West Coast.

Built with [Astro](https://astro.build): a static site with no client-side framework. The pages are plain HTML and CSS with small scripts, so it loads fast on mobile data and can be hosted for free on Netlify, Vercel or Cloudflare Pages.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build in dist/
```

## Where things live

| Path | What it is |
|---|---|
| `design/DESIGN_SYSTEM.md` | Colour, type, layout and component rules |
| `src/styles/tokens.css` | Design tokens (CSS custom properties) |
| `src/config/site.ts` | **All editable content and contact settings**: WhatsApp number, email, towns, services, process steps |
| `src/components/` | Reusable components |
| `src/pages/index.astro` | Home page |
| `src/content/work/` | Case studies, one Markdown file each |
| `src/pages/work/[slug].astro` | Case study page template |
| `src/pages/services/[slug].astro` | One page per service (built from `services` in `site.ts`), so each can rank on its own |

## How enquiries work

The enquiry form does not send data to a server. When submitted, it composes the answers into a message and opens WhatsApp (`wa.me`) with that message ready to send, so every lead lands in the WhatsApp Business inbox. The consent line covers POPIA.

## Adding a case study

1. Copy `src/content/work/harbours-edge.md` and rename it, e.g. `langebaan-villa-launch.md`. The file name becomes the URL (`/work/langebaan-villa-launch`).
2. Fill in the details at the top (client, location, services, results, quote) and write the sections below them.
3. Put photos in `public/images/` and set `heroSrc`, e.g. `/images/langebaan-villa.jpg`.
4. Leave out `draft: true`, which shows the "details to confirm" banner.

New case studies appear in the work section automatically. Only use real results and quotes you have permission to publish.

## Before launch

Every value still marked `TODO` in `src/config/site.ts` or `src/content/work/harbours-edge.md` shows on the site as a sand-coloured "to confirm" label.

- [ ] Set `whatsappNumber`, `email` and the street address and postcode in `src/config/site.ts` (the address must match the Google Business Profile)
- [ ] Replace "On quote" for development launches with a "from" price once one is set (`priceFrom` in `src/config/site.ts`)
- [ ] Add the Harbour's Edge aerial photo to `public/images/` and set `heroImage.src` in `site.ts` and `heroSrc` in `harbours-edge.md`
- [ ] Fill in the Harbour's Edge case study, add the live site URL as `website`, and remove `draft: true`
- [ ] Confirm who shot the Harbour's Edge aerials. If WESTWARD did, add "Aerial photography" back to its `services`; if not, get permission and a photo credit before using the aerial as the hero
- [ ] Replace the remaining `ImagePlaceholder` blocks with real photography, or remove them
- [ ] Set the live domain in `astro.config.mjs`
- [ ] Add Instagram and LinkedIn links in `src/config/site.ts`
- [ ] Add an Open Graph share image (1200×630)
