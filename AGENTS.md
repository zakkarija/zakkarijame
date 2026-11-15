# AGENTS.md

Instructions for coding agents working on this repo. Read `CLAUDE.md` for how to
run the project and `docs/design-brief.md` before any UI work. This file covers
**deploying**.

---

## Deploying to production

### How production works

There is no deploy script and no CLI step. **Production is whatever is on
`main` on GitHub.** Vercel is connected to the repo and builds every push:

| Push to | Result |
| --- | --- |
| `main` | Production deploy to **zakkarija.com** (and `www.`, `zakkarijame.vercel.app`) |
| any other branch | Preview deploy at a `zakkarijame-<hash>-zakmics-projects.vercel.app` URL |

Vercel facts, so you never have to look them up:

| | |
| --- | --- |
| Vercel team | `zakmics-projects` (`team_8BfMKFuEAUgCytCfkyQXVcei`) |
| Vercel project | `zakkarijame` (`prj_Dqrw2pWn7tvPGHb3Yam2fW4exMLv`) |
| GitHub repo | `zakkarija/zakkarijame`, production branch `main` |
| Domains | `zakkarija.com`, `www.zakkarija.com`, `zakkarijame.vercel.app` |
| Env vars | None needed. No database. |

Vercel runs `npm run build` itself. No `vercel.json` exists and none is needed.

### Only deploy when the user asks

`CLAUDE.md` says never push to `main`. The one exception is this procedure, and
only when the user has asked in this conversation to deploy, ship or go live.
Doing work on a branch is not permission to deploy it.

### The procedure

Work happens on a feature branch (currently `launch-showcase`). Deploying means
fast-forwarding `main` to that branch. Run from the repo root, in Git Bash:

```bash
# 1. Clean tree, everything committed.
git status --short                      # must print nothing you care about

# 2. Must pass locally. Do not skip; Vercel runs the same build.
npm run check
npm run build

# 3. Push the branch (also gives you a preview deploy).
git push origin HEAD

# 4. Make sure main can fast-forward (no one else pushed to main).
git fetch origin
git merge-base --is-ancestor origin/main HEAD && echo "fast-forward OK"

# 5. Deploy: move main to this commit.
git push origin HEAD:main
```

If step 4 does not print `fast-forward OK`, `main` has commits this branch does
not. Stop. Run `git merge origin/main` on the branch, re-run step 2, then
continue. Never `--force` push `main`.

### Verify it is live

Do not report "deployed" until all three are true.

1. **Vercel build is READY.** With the Vercel MCP tools:
   `list_deployments` with `projectId: prj_Dqrw2pWn7tvPGHb3Yam2fW4exMLv`,
   `teamId: team_8BfMKFuEAUgCytCfkyQXVcei`, `sha: <full commit sha>`,
   `target: production`. A build takes about 1 minute. `state` goes
   `QUEUED` → `BUILDING` → `READY`. If it is `ERROR`, read the log with
   `list_deployment_events` (`idOrUrl: <deployment id>`, `builds: 1`) and fix it
   on the branch. Production stays on the previous deploy until a build succeeds.
2. **The live site serves the new code.** Fetch it and grep for something your
   change added or removed:
   ```bash
   curl -s https://zakkarija.com | grep -c "something-from-your-change"
   ```
3. **Look at it.** Open https://zakkarija.com in the browser pane at 1440, 834
   and 390 wide, as `CLAUDE.md` requires for any visual change.

Then tell the user: the commit sha, the Vercel deployment URL, and what you
checked.

### Rolling back

- **Fast:** Vercel dashboard → project `zakkarijame` → Deployments → pick the
  previous production deploy → *Instant Rollback*. Ask the user to do this, or
  use the Vercel MCP `request_rollback` tool if they ask you to.
- **Permanent:** `git revert <sha>` on the branch, then run the procedure
  again.

### Tools on this machine (Windows)

- `gh` (GitHub CLI) and the `vercel` CLI are **not installed**. Everything above
  works with plain `git` plus the Vercel MCP tools. Do not try to install them
  just to deploy.
- `python` is not installed; use `node -e` for scripts.
- Git auth is already set up for `git push` over HTTPS.
- `.claude/launch.json` defines the `dev` server for the browser pane
  (`npm run dev`, port 3000).
