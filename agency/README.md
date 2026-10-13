# Signal Local website

Marketing site for Signal Local, an agency for barbers in Ontario who run their own suite and want to build a personal brand. The website is the entry offer; Google Business Profile, Google Analytics and Instagram setup are add-ons, or come together in the "Own Your Chair" package.

Built with [Astro](https://astro.build): a static site with no client-side framework, so it loads fast and can be hosted for free on Netlify, Vercel or Cloudflare Pages. It lives in `agency/` inside the WESTWARD repo and builds on its own; when deploying, set the **base directory** to `agency`.

## Run locally

```sh
cd agency
npm install
npm run dev      # http://localhost:4321
npm run build    # production build in dist/
```

## Where things live

| Path | What it is |
|---|---|
| `src/config/site.ts` | **All editable content**: contact details, services, prices, package, care plan, process, FAQ |
| `src/styles/tokens.css` | Colours, type, spacing (design tokens) |
| `src/components/` | Reusable components |
| `src/pages/index.astro` | Home page |
| `src/pages/services/[slug].astro` | One page per service (built from `services` in `site.ts`), so each can rank on its own |
| `src/pages/privacy.astro` | Privacy notice (PIPEDA / CASL) |

## How enquiries work

- If `formEndpoint` in `site.ts` is set (e.g. a free [Formspree](https://formspree.io) form URL), the contact form posts there and shows a thank-you message.
- If it is empty, the form composes an email to `email` and opens the visitor's mail app.
- If `bookingUrl` is set (Calendly, Cal.com), the "Book a free call" buttons open it.

The form has a hidden honeypot field to filter out spam bots.

## Before launch

Every value still marked `TODO` in `src/config/site.ts` shows on the site as a yellow "to confirm" label.

- [ ] Set `email`, `phone` and `address.city` in `src/config/site.ts`
- [ ] Set `formEndpoint` (recommended) and, optionally, `bookingUrl`
- [ ] Review the prices, package, instalment plans and care plan in `site.ts` (they are starting suggestions in CAD, before HST)
- [ ] Replace the hero illustration with a real client site once you have one (with their permission)
- [ ] Set the live domain in `astro.config.mjs` (canonical, `og:url` and structured data use it)
- [ ] Set up Signal Local's own Google Business Profile, Analytics and social profiles, and add the social links to `site.social`
- [ ] Add an Open Graph share image (1200×630)
- [ ] Add a portfolio or case studies section once you have your first clients (only real results and quotes you have permission to use)
