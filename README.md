# Her Care Specialist Clinic — Website

A multi-page marketing site for Her Care Specialist Clinic (gynaecology &
obstetrics, Ajah, Lagos), built with React, Vite, Tailwind CSS v4 and Framer
Motion. Pure front end — no backend or database required.

## Pages

- `/` — Home
- `/about` — About Us
- `/services` — Our Services
- `/contact` — Contact Us

## Stack

- **React 19 + Vite** — app shell and build tooling
- **React Router v7** — client-side routing between the four pages
- **Tailwind CSS v4** — utility styling, configured via `@theme` in `src/index.css` (brand colors, fonts)
- **Framer Motion** — page transitions, scroll reveals, the pinned horizontal-scroll services section, the multilevel parallax facility gallery, and the scroll-driven "journey" story section
- **lucide-react** — icon set (no emoji anywhere in the UI, by design)

## Getting started

```bash
npm install
npm run dev
```

Visit the printed local URL (typically `http://localhost:5173`).

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Configuring the contact form (no backend)

The form on `/contact` forwards submissions to an email address using
[FormSubmit](https://formsubmit.co), a free service built for exactly this —
no server, database or API key required.

1. Copy `.env.example` to `.env`.
2. Set `VITE_CONTACT_EMAIL` to the inbox that should receive enquiries.
3. Deploy (or run locally) and send one test message from the live form.
4. FormSubmit emails that inbox a one-time confirmation link the first time —
   click it once. Every submission after that arrives normally. Until it's
   clicked, submissions are silently dropped, so don't skip this step.

If `VITE_CONTACT_EMAIL` is left unset, the form will show an inline message
explaining it isn't configured yet, rather than failing silently.

## Configuring WhatsApp, phone numbers and address

All clinic contact details live in one place: `src/data/content.js`, in the
`CLINIC` object — phone numbers, the WhatsApp number, the address used for
both the map embed and the "Get Directions" link, and the pre-filled
WhatsApp message text. Update it there and it propagates to the header,
footer, floating WhatsApp widget, contact page and map everywhere.

## The map

`src/components/MapEmbed.jsx` uses a plain Google Maps `output=embed` iframe
— no API key needed. A CSS filter (`.map-brand-tint` in `src/index.css`)
tints it toward the clinic's blue rather than the map's default palette; a
"Get Directions" button opens Google Maps' directions flow to the clinic's
address in a new tab. To move the pin, change `addressMapQuery` in
`content.js`.

## Editing content

- **Services, values, process steps, clinic details** — `src/data/content.js`
- **Images** — `src/assets/images.js`. Photography is sourced from
  [Pexels](https://www.pexels.com) (free to use, no attribution legally
  required) and hotlinked by ID; swap any entry for your own photography by
  replacing the URL, or point it at a local file imported into the bundle.

## Animation notes

- `AnimatedHeadline` — word-by-word reveal, used once per page on the main headline
- `Reveal` — fade/lift-in-on-scroll wrapper used throughout
- `HorizontalScrollSection` — pins the section and translates its track
  horizontally as the page scrolls (Home → Our Services)
- `Parallax` — gives an element its own scroll speed; stacked with different
  speeds for the multilevel effect in the facility gallery
- `JourneyScroll` — a tall pinned section that steps through the four-stage
  care journey as you scroll (Home)
- All motion respects `prefers-reduced-motion`.

## Deployment

This is a static site after `npm run build` — the `dist/` folder can be
deployed to Netlify, Vercel, Cloudflare Pages, GitHub Pages or any static
host. Remember to set `VITE_CONTACT_EMAIL` as an environment variable in
your host's dashboard (not just in a local `.env`) if you deploy from CI,
since Vite only reads it at build time.
