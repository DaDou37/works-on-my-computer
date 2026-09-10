# Deployment Guide

> **Student template:** complete this document from the deployment you actually perform. Do not write an imaginary “perfect” procedure.

## 1. Deployment identification

- Application: Works On My Machine (Developer Excuse Generator)
- Release / version: v1.1.0 — Confidence Update (built on top of v1.0.0)
- Target environment: GitHub Pages
- Repository / project: DaDou37/works-on-my-computer (fork of LauraMoreau/works-on-my-computer)
- Branch used for deployment: main
- Date: 2026-09-10
- Author: David (DaDou37)

## 2. Purpose and scope

Deploying a static excuse-generator website. This release includes the initial v1.0.0 content plus one new excuse added to `public/messages.js`.

## 3. Prerequisites

- GitHub account with access to the trainer's starter repository
- Fork of the starter repository created under my own namespace
- GitHub Pages source correctly set to "GitHub Actions" in repo Settings
- Workflow file `.github/workflows/deploy.yml` present at repo root

## 4. Files and configuration involved

| Item | Purpose | What must be checked? |
| --- | --- | --- |
| `.github/workflows/deploy.yml` | Defines the GitHub Actions deployment workflow | Runs on push to `main`, uploads `public/` folder, deploys to Pages |
| `public/` folder | Contains the actual website (index.html, style.css, app.js, messages.js, config.js) | All files present, correct filenames referenced in index.html |
| Settings > Pages | Defines where GitHub Pages gets its content from | Source must be set to "GitHub Actions", not "Deploy from a branch" |

## 5. Deployment procedure

| Step | Action | Expected result | Actual result / evidence |
| --- | --- | --- | --- |
| 1 | Forked trainer starter repository into my own GitHub namespace | Personal copy created (DaDou37/works-on-my-computer) | Fork created successfully |
| 2 | Checked fork contained README.md, workflow file, public/, docs/ | All expected files present | Confirmed visually in file browser |
| 3 | Read README.md | Understood project structure and release sequence | Done |
| 4 | Opened Actions tab | Expected a workflow run to exist | No workflow runs yet ("0 workflow runs") |
| 5 | Manually triggered workflow via "Run workflow" (workflow_dispatch) | Deployment succeeds | Run failed (red X) |
| 6 | Went to Settings > Pages, set source to "GitHub Actions" | Pages ready to receive Actions deployments | Setting updated |
| 7 | Re-ran the workflow manually | Deployment succeeds | Run #2 — Success, 18s, 1 artifact |
| 8 | Opened the Pages URL | Site loads correctly | Site loaded, buttons worked |
| 9 | Edited public/messages.js via GitHub web editor, added one new excuse | Change saved | New excuse added to `excuses` array |
| 10 | Committed directly to main branch ("Add confidence update message") | Commit recorded, triggers new deployment | Commit 522ac2d created |
| 11 | Workflow automatically triggered by push | Deployment succeeds | Run #3 — Success |
| 12 | Refreshed Pages URL and checked new excuse | New excuse visible on live site | Confirmed visible |

## 6. Post-deployment verification

| Check | Expected result | Actual result | Pass / fail |
| --- | --- | --- | --- |
| Workflow run status | Green checkmark (Success) | Success (Run #3) | Pass |
| Pages URL loads | Site displays correctly | Site loaded correctly | Pass |
| Buttons functional | Excuse/solution buttons work | Buttons worked | Pass |
| New content present | New excuse appears in the app | Excuse appeared after hard refresh | Pass |

## 7. Evidence

- Project URL: https://github.com/DaDou37/works-on-my-computer
- Deployed application URL: https://dadou37.github.io/works-on-my-computer
- Release / version observed: v1.1.0 — Confidence Update
- Pipeline / deployment result: GitHub Actions run #3 — Success
- Commit or reference: 522ac2d ("Add confidence update message")
- Other useful evidence: Initial run #2 (18s, Success) established the working v1.0.0 deployment after fixing the Pages source configuration

## 8. Problems or deviations

- Initially blocked on GitLab: the platform required credit card verification for identity, which is not something students should provide. The trainer switched the whole class workflow from GitLab to GitHub to avoid this.
- First deployment attempt on GitHub failed because GitHub Pages was not configured to use "GitHub Actions" as its source (it defaulted to "Deploy from a branch" or nothing). Fixing this setting resolved the failure.

## 9. Documentation improvement

The starter README still references GitLab-specific terms (`.gitlab-ci.yml`, "GitLab Pages") even though the actual workflow file was migrated to GitHub Actions. This should be updated to avoid confusion. It would also help to explicitly mention, before the first deployment attempt, that GitHub Pages source must be manually set to "GitHub Actions" in Settings — this is not automatic and caused the first failed run.
