# Tahawul Audit Platform UI

Three responsive screens implemented in Next.js (App Router) with Tailwind CSS based on the provided mockups.

## Run Locally
1. Install dependencies:
```
npm install
```
2. Start dev server:
```
npm run dev
```
3. Open `http://localhost:3000`

## Screens
- Dashboard: `/`
- Perspective Overview: `/perspectives`
- Perspective Evidence: `/perspectives/evidence`

## Approach
- Componentized UI in `src/components` for reuse and clarity.
- Mocked data in `src/data/mock.ts`.
- Tailwind config extended for brand palette, shadows, and typography.

## Assumptions
- Static data is acceptable; no backend integration.
- Desktop-first with responsive breakpoints for mobile and tablet.

## With More Time
- Add interactive filters and search states.
- Replace CSS charts with real chart library.
- Add mobile sidebar drawer.
