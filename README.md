# Dream Party Decor

Marketing website for **Dream Party Decor, LLC**: custom balloon garlands, backdrops, marquee letters and party rentals in the East Bay Area, by Andrea ([@dream.party.decor](https://www.instagram.com/dream.party.decor/)).

Live site: [dreampartydecor.netlify.app](https://dreampartydecor.netlify.app)

## Stack

- [Astro](https://astro.build) (static site) + [Tailwind CSS v4](https://tailwindcss.com)
- Deployed on Netlify (`netlify.toml`: build `npm run build`, publish `dist`)
- Contact goes through Instagram DMs, text and phone links (no form or backend)

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview
```

## Editing content

Each piece of content lives in one file:

| What | File |
|---|---|
| Phone, email, Instagram, service area | `src/config/site.ts` |
| Services & starting prices | `src/data/services.ts` |
| Gallery photos & categories | `src/data/gallery.ts` |
| Client reviews | `src/data/testimonials.ts` |
| FAQ | `src/data/faq.ts` |
| Photos | `public/images/` (see the README there) |

The page sections are in `src/components/` and are assembled in `src/pages/index.astro`.

### Before launch

- [ ] Set the real phone number and email in `src/config/site.ts`.
- [ ] Add real event photos (gallery, hero, About).
- [ ] Replace the sample testimonials with real client reviews.
- [ ] Review the starting prices. They're based on East Bay market rates from fall 2026.
