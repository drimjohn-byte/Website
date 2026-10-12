# WESTWARD website

Marketing site for WESTWARD, a property marketing agency for estate agents and developers on the South African West Coast.

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

## How enquiries work

The enquiry form does not send data to a server. When submitted, it composes the answers into a message and opens WhatsApp (`wa.me`) with that message ready to send, so every lead lands in the WhatsApp Business inbox. The consent line covers POPIA.

## Before launch

- [ ] Set `whatsappNumber` and `email` in `src/config/site.ts`
- [ ] Set the live domain in `astro.config.mjs`
- [ ] Replace every `ImagePlaceholder` with real photography (search the codebase for `ImagePlaceholder`; each one describes the shot it needs)
- [ ] Replace the four "Project name" work tiles in `src/pages/index.astro` with real projects, or remove the section until they exist
- [ ] Review all copy, especially service descriptions
- [ ] Add Instagram and LinkedIn links in `src/config/site.ts`
- [ ] Add an Open Graph share image (1200×630)
