# Project notes

- Website for Charismagick Cleaning (New Orleans, Metairie & Gretna, LA). Standalone; edit it directly in this repo.
- Call and text both work: use `PHONE_HREF` (tel:) for primary contact buttons; `SMS_HREF` is also available.
- Business details (phone, email, address, social links) live in `BUSINESS_INFO` in `src/lib/business-data.ts`.
- No logo file was provided with the client's application -- `SiteNavigation.tsx`'s `Logo` component
  is a text/icon wordmark instead of an `<img>`. Swap in a real `/public/logo.png` and update `Logo`
  (and `BUSINESS_INFO.logoUrl`) once one exists.
- No reviews exist yet -- `TESTIMONIALS` in `business-data.ts` is intentionally empty. Don't invent
  testimonials; add real ones as they come in (the home page only renders a testimonials section if
  this array is non-empty -- none exists yet, so none is rendered).
- Hosting: Vercel. `vite.config.ts` sets the Nitro preset to `vercel`, so `bun run build`
  (or `npm run build`) writes a ready-to-serve `.vercel/output` folder.
- Pushes to `main` deploy to production once the repo is imported in Vercel.

## Design

- Distinct palette/type system from our other cleaning-client sites: deep violet primary + old-gold
  accent on a warm parchment background (`src/styles.css`), Fraunces (display) + Work Sans (body).
  No cursive script font -- the `.eyebrow` class + `Sparkles` icon replaces the script-tagline motif
  used elsewhere. `DecorSparkles` (four-point sparkle shapes) is this site's decorative motif in
  place of the soap-bubble motif used on other client sites.

## SEO

- Site URL for canonical tags, Open Graph, JSON-LD and the sitemap comes from `SITE_URL` (Vercel env var)
  or, if unset, Vercel's production domain. After connecting a custom domain, redeploy once.
- Service pages: `SERVICE_PAGES` in `src/lib/seo-content.ts` → `/services/:slug` (4 services: house,
  apartment, commercial, restaurant/bar cleaning). City pages: `AREA_PAGES` in the same file →
  `/service-areas/:slug` (New Orleans, Metairie, Gretna). Both are added to the sitemap automatically.
- Per-page tags come from `pageHead()` in `src/lib/seo.ts`; site-wide LocalBusiness schema lives in `src/routes/__root.tsx`.
- `/sitemap.xml` and `/robots.txt` are server routes in `src/routes/`.

## Leads (GoHighLevel)

- The quote form posts to `/api/quote`, which forwards to a GHL Inbound Webhook. Set `DEFAULT_WEBHOOK_URL`
  in `src/routes/api.quote.ts` (or the `GHL_QUOTE_WEBHOOK_URL` Vercel env var). Until then the form asks
  visitors to call/text or email instead.
- Chat widget: set `GHL_CHAT_WIDGET_ID` in `src/routes/__root.tsx`.

## Photos

- Current photos are generic stock images reused across our cleaning-client sites (consistent with
  how those sites already share stock photography); swap in real job photos when available.
- Restaurant/bar cleaning has no matching stock photo in our existing pool -- it was sourced new for
  this site specifically (see `public/images/restaurant-bar-cleaning-new-orleans.jpg`).
- Home gallery: `WORK_GALLERY` in `src/lib/business-data.ts`, one slide per service (photos in `public/gallery/`,
  named `<service>-<city>.jpg`). A slide without `imageUrl` shows a "photos coming soon" panel.
- Keep uploads under ~1600px wide and use city-specific names/alt text.
- Service cards/pages: set `image`/`imageAlt` on the `CORE_SPECIALTIES` entry and the matching
  `SERVICE_PAGES` entry (files in `public/images/`); without one they show a branded icon panel.
