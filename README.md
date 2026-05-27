# Political Campaign Management & Voter Intelligence System — Landing Page

Marketing landing page for the campaign-management product. Built with Vite + React,
no backend. Lead capture uses WhatsApp and email links — no database needed.

## Tech

- Vite + React 18
- Plain CSS (no Tailwind) — see `src/styles.css`
- Mobile-first, fully responsive
- Deployed on Railway via Nixpacks

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:5173>

## Build

```bash
npm run build
npm run preview   # local preview via Vite
```

For production-like local testing (matches what Railway runs):

```bash
npm run build
npm run start     # serves dist/ via `serve` on $PORT (default 3000)
```

## Deploy to Railway

This project is configured for one-command Railway deploys.

### Option A — From your computer

```bash
# inside the campaign-landing/ folder
railway init          # link or create a new project
railway up            # uploads the source and builds it
```

### Option B — From GitHub

1. Push this folder to a new GitHub repo.
2. In Railway, click **New Project → Deploy from GitHub repo** and pick it.
3. Railway auto-detects Nixpacks and uses `nixpacks.toml`.
4. Once green, click **Settings → Networking → Generate Domain**.

That's it. No env vars required.

## Where to edit things

| What | File |
| --- | --- |
| Phone, email, WhatsApp number | top of `src/App.jsx` (the `CONTACT` object) |
| Screenshots | `public/screenshots/` |
| Colours & fonts | top of `src/styles.css` (the `:root` block) |
| Section copy | `src/App.jsx` |

## Changing the WhatsApp number

Edit `CONTACT.whatsapp` in `src/App.jsx`. Use the international number with no
`+`, spaces, or dashes — e.g. `67583122058` for `+675 8312 2058`.

## Replacing screenshots

Drop new images into `public/screenshots/` using the same filenames, or update
the paths in the `WEB_SHOTS` and `MOBILE_SHOTS` arrays at the top of
`src/App.jsx`.

---

© Skyworks Systems · Port Moresby, PNG
