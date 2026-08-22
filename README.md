# aadarshkumar.github.io

Personal site for Aadarsh Kumar — network engineer moving into DevOps.
React 19 + Vite 7 + TypeScript, no CSS framework, deployed to GitHub Pages by Actions.

---

## Quick start

```bash
nvm use            # reads .nvmrc (Node 22)
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check (tsc -b) + production build into dist/
npm run lint       # eslint
npm run preview    # serve the built dist/ locally
```

---

## Publishing

The repository name has to be exactly **`aadarshkumar.github.io`** — that is what
makes GitHub serve it at the root of your username instead of a subpath.

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin git@github.com:aadarshkumar/aadarshkumar.github.io.git
git push -u origin main
```

Then, **once**, in the repo: **Settings → Pages → Build and deployment → Source →
`GitHub Actions`**. Do not pick "Deploy from a branch" — the workflow uploads a
build artifact, so branch deployment would publish the raw source instead.

After that, every push to `main` lints, builds and deploys. Pull requests run
lint and build only. `.github/workflows/deploy.yml` also accepts a manual 
`workflow_dispatch` run.

The site is served from the domain root, so `base` stays `'/'` in
`vite.config.ts`. If you ever move this to a project repo (e.g.
`github.com/aadarshkumar/portfolio`), change `base` to `'/portfolio/'`.

---

## Editing the content

**Every word on the site lives in `src/data/index.ts`.** Nothing else needs
touching for a content change.

| What | Where in `src/data/index.ts` |
| --- | --- |
| Name, role, city, email, links, timezone | `profile` |
| Hero sentence | `heroThesis` (renders after the computed year count) |
| About headline, chips, paragraphs | `aboutLead`, `aboutChips`, `aboutCopy` |
| The mono key/value table | `sheet` |
| Scrolling ticker terms | `tickerItems` |
| The six "what I run" tiles | `work` |
| Toolbox columns | `stack` |
| Jobs and education | `roles` |
| Verified badges (`/growth`) | `badges` |
| Certificates (`/growth`) | `credentials` |
| Issuer names and brand colours | `issuers` |
| Older vocational certs (`/history`) | `priorCerts` |
| Footer / contact links | `socials` |

Notes on a few fields:

- **Years of experience is computed**, not typed. It comes from
  `profile.startedISO` (`2022-09-01`), so the hero and the `uptime` terminal
  command stay correct without edits.
- **`profile.openToWork`** flips the hero status line between "Currently at
  Rubico" and "Open to opportunities".
- **`profile.phone`** is in the data file but deliberately not rendered
  anywhere. Public phone numbers get scraped. It is on the resume PDF for
  anyone who actually needs it. To show it, add it to the `socials` array.
- Each `work` tile takes a `span` of `Span.Wide` (8 columns), `Span.Half` (6) or
  `Span.Third` (4), and a `glyph` naming one of the six diagrams in
  `src/components/Glyphs.tsx`. Add a `url` to a tile and it becomes a link.

### Swapping the photo or resume

The portrait now displays at up to 430px, so it wants a source of at least
860×860 to stay crisp on a high-DPI screen. The current file was upscaled from
a 400×400 original — fine, but a larger original would genuinely look sharper.

Replace `src/assets/portrait.webp` (square, 860×860 or larger) and
`src/assets/aadarsh_kumar_resume.pdf`, keeping the same filenames. The current
portrait is 400×400, which is fine at the rendered size but a larger source
would look sharper on high-DPI screens.

The favicons and the social card in `public/` were generated from the portrait.
If you change the photo and want the social card regenerated, that is a
standalone job — nothing in the build depends on it.

---

## The design, briefly

**One accent colour lives on the page at a time, and its hue rotates as you
scroll** — violet at the top of the document, through azure, to teal at the
bottom. Everything accented reads from a single `--h` custom property on
`:root`, so one rAF-throttled write per frame repaints the lot: rules, links,
the diagram glyphs, the terminal prompt, the header progress bar, the pointer
dot.

To retune it, change the two arguments in `src/App.tsx`:

```tsx
useScrollTokens(292, 196)   // start hue, end hue (OKLCH degrees)
```

Useful hues: 292 violet · 272 indigo · 252 blue · 232 sky · 212 cyan · 196 teal.
For a fixed accent, pass the same number twice.

**The hero parallaxes on scroll** from the same single listener. `useScrollTokens`
publishes three custom properties — `--h` (accent hue), `--p` (document progress,
for the header bar) and `--hp` (hero progress, 0 to 1 over the first viewport) —
and the hero layers read `--hp` in `transform: translate3d(...)`:

| Layer | Movement | Reads as |
| --- | --- | --- |
| Blueprint grid | `+64px` | furthest away |
| Accent bloom | `+104px` | — |
| `DEVOPS` backdrop word | `+86px` | behind everything |
| Name / role / buttons | `-34px`, fades out | — |
| Portrait | `-76px` | nearest the viewer |

Positive values lag behind the scroll, negative ones lead it. That split is what
creates the depth. Change the pixel figures in `App.css` to taste; the whole
effect is still one scroll listener and one rAF write per frame, so it does not
cost anything as you add layers.

The backdrop word is `heroGhost` in `src/data/index.ts`. One short word works
best — it is sized at `24vw`, so anything longer than about seven characters will
run out of room. It is a dim solid fill with a slightly stronger edge rather than
a pure outline, because a thin outline vanishes wherever the name and portrait
cover it.

Other deliberate choices:

- **Surfaces** are cool grey-blue paper with deep navy bands. `--disc` (`#1c232d`)
  matches the portrait photo's own backdrop exactly, so the picture has no
  visible edge against the hero.
- **Type** is Archivo (display, using its variable width axis condensed to 72%),
  Hanken Grotesk (body), IBM Plex Mono (data and labels).
- **Amber (`--signal`)** is fixed and reserved for status only — the hero
  beacon, the terminal caret, the alert point on the monitoring glyph. It never
  decorates.
- **Section labels are route paths** (`/whoami`, `/build`, `/stack`) that match
  the real anchor IDs, so the label is navigation rather than ornament.
- **Tile diagrams are drawn in SVG**, not screenshots, and inherit the live
  accent. They sit on a graph-paper plate.
- All text meets WCAG AA (4.5:1) across the entire hue ramp — that constraint
  is why the accent sits at OKLCH lightness 0.50 on paper and 0.74 on navy.
- Reduced motion is respected: the marquee, orbit ring, reveals and pointer dot
  all stop. The hue still shifts, since that is colour rather than movement.
- The terminal uses one real `<input>`, so history, tab-completion and typing
  work identically with a keyboard and on a phone.

---

## Layout conventions

Vertical rhythm and gutters are set **once**, on `.band`. Variants like
`.band--dark` change colour only, never spacing. Keeping that rule means
section spacing can't quietly cancel itself out as the file grows.

```
src/
├── App.tsx              composition + pointer dot
├── App.css              all section styling
├── index.css            tokens, reset, base type
├── data/index.ts        ← all content
├── types/index.ts       content types
├── lib/hooks.ts         accent hue, reveal, sticky header, clock
└── components/
    ├── SiteHeader.tsx
    ├── Hero.tsx
    ├── Sections.tsx     ticker, about, work, stack
    ├── History.tsx      experience, credentials, contact, footer
    ├── Shell.tsx        interactive terminal
    └── Glyphs.tsx       six SVG diagrams
```

---

## Adding a credential

Drop the PDF into `public/certificates/` and add a row to `credentials` in
`src/data/index.ts`:

```ts
{
  name: 'Exact name as printed on the certificate',
  issuer: 'aws',                 // aws | linuxfoundation | anthropic | cantrill
  date: 'Sep 2026',              // what the page shows
  iso: '2026-09-04',             // sorting only, never displayed
  pdf: '/certificates/my-cert.pdf',
  ref: 'LF-abc123',              // optional
}
```

Rows sort themselves newest-first inside each issuer group, and the counts in
the section header and the terminal's `certs` command update on their own.

For a new issuer, add an entry to `issuers` and map it to a mark in
`MARKS` at the top of `src/components/Growth.tsx`.

If a credential has public proof, add it to `badges` instead (or as well) — those
get the large cards with the issuer's own badge artwork and a Credly link.

**Use the official credential name.** "Introduction to DevOps and Site
Reliability Engineering" reads very differently to a recruiter than "DevOps and
Site Reliability Engineering", and shortening it is the kind of thing that gets
noticed in an interview. The card layout is vertical precisely so full names fit.

## Gotchas worth remembering

**Anything in `public/` is referenced from the site root, not relatively.**
`href="/favicon.ico"`, never `href="public/favicon.ico"` — the latter makes Vite
bundle a duplicate hashed copy and silently drops the `<link rel="manifest">`
from the built HTML.

**Work tile spans must add up to 12 per row.** The grid is 12 columns and
`Span.Wide` is 8, `Span.Half` is 6, `Span.Third` is 4. The current seven tiles
are laid out `8+4 | 4+4+4 | 6+6`. If you add or remove one, re-check the
arithmetic or you get a stranded tile on a half-empty row.

**`profile.openToWork`** is currently `true`, so the hero status line reads
"Open to DevOps roles". Set it to `false` and it reads "Currently at Rubico".

**`profile.startedISO`** is `2022-01-01`, which is what produces "4+ years". It
counts from the MISNT role, i.e. total professional experience. Change it to
`2022-09-01` if you would rather count only from Rubico.

**Brand marks.** Anthropic, The Linux Foundation and Docker come from
simple-icons, which ships the official glyphs. Amazon had its mark pulled from
that set over trademark, so AWS renders as a wordmark tile rather than a
reconstructed logo — the real AWS badge artwork still appears on the badge card,
which is the sanctioned way to display AWS training credentials.

**Your job title at Rubico** is recorded as "Cloud & Systems Engineer" in
`roles`, taken from the resume PDF. If your official title is Network Engineer,
change it in that one place so the site, the resume and LinkedIn agree.
