# zakkarijame

Personal site and consulting front for Zakkarija Micallef, software engineer in
Amsterdam. Next.js 15 (App Router) + React 19 + TypeScript + Tailwind v4.

**Before doing any design or UI work, read `docs/design-brief.md` in full.** It is
the design constitution for this repo and it is not optional. This file covers
how to run the project; that one covers what the project is allowed to look like.

---

## Running it (Windows)

You need **Node 20** (see `.nvmrc`) and git. Everything else is npm.

```powershell
winget install Git.Git
winget install Schniz.fnm          # fnm reads .nvmrc; nvm-windows does not
fnm install 20
fnm use 20
node -v                            # expect v20.x
```

Then:

```powershell
git clone https://github.com/zakkarija/zakkarijame.git
cd zakkarijame
npm install
npm run dev                        # http://127.0.0.1:3000
```

Hot reload (Fast Refresh) works out of the box — save a file and the browser
updates without losing state.

### Windows gotchas, all real, all already hit

- **No `.env` is needed and no database is needed.** `DATABASE_URL` is optional
  in `src/env.js` and nothing under `src/` imports Drizzle or Postgres — those
  deps are vestigial T3-template leftovers. Ignore `start-database.sh`; it is a
  bash script and is not part of running this site.
- **Never write `VAR=value some-command` in a package.json script.** That is bash
  syntax and dies on PowerShell and cmd with `'VAR' is not recognized`. This repo
  already had that bug in `dev`; it is fixed with `cross-env`. If you add an env
  var to a script, use `cross-env`.
- If `npm` or `claude` refuse to run in PowerShell with a script-execution error:
  `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.
- If hot reload does not fire (WSL, a network drive, or a VM shared folder),
  use `npm run dev:poll` instead — it turns on filesystem polling.
- Prefer a native Windows path like `C:\dev\zakkarijame`. Editing files on a
  `\\wsl$\...` or OneDrive-synced path makes the watcher unreliable.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload on 127.0.0.1:3000 |
| `npm run dev:poll` | Same, with filesystem polling for WSL/network drives |
| `npm run build` | Production build — must pass before you call anything done |
| `npm run check` | `next lint` + `tsc --noEmit` |
| `npm run typecheck` | Types only |
| `npm run format:write` | Prettier |

Run `npm run check` and `npm run build` before declaring any change finished.

---

## Layout of the code

```
src/app/page.tsx              the homepage (hero, experience, projects, contact)
src/app/layout.tsx            root layout: font, metadata, analytics
src/app/blogs/                blog index and post pages (MDX)
src/components/site/          homepage and shared UI (bar, footer, experience
                              switcher, organisation popovers, email link,
                              contour background, scroll motion)
src/components/icons/         GitHub, LinkedIn, email, download marks
src/data/                     profile, timeline, projects, organisations
src/lib/                      blog loader, formatting, site config
src/styles/reset.css          minimal reset
src/styles/site.css           the design system for the whole site
src/content/posts/            MDX blog posts
```

The previous site (cream/serif "grotesque" design) is preserved on the
`archive/previous-site` branch. The three unused design directions
(Coverage, To scale, Sources) are preserved on the `ui-directions` branch.

## Content is data, not prose in JSX

Facts about Zakkarija live in `src/data/` and `src/lib/site-config.ts`. When you
build new sections, read the real values from there rather than retyping them
into components. If a fact is missing, add it to the data file.

Never invent facts. No made-up metrics, no "10x faster", no client logos he does
not have, no testimonials. Every claim on this site has to be true. If a design
needs a number you do not have, leave a clearly-marked placeholder and say so.

## Working agreement

- Small, reviewable commits with real messages.
- Never push to `main`. Work on a branch.
- After a visual change, actually look at it: run the dev server and open the
  page at 1440px, 834px and 390px before saying it works.
- If you disagree with something in the design brief, say so and make the case.
  Do not silently drift back toward the defaults it forbids.
