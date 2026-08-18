# aadarshkumar.github.io

Personal site for Aadarsh Kumar — Cloud & Infrastructure Engineer.
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
| Certifications | `credentials` |
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

Replace `src/assets/portrait.webp` (square, ideally 800×800 or larger) and
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
useAccentHue(292, 196)   // start hue, end hue (OKLCH degrees)
```

Useful hues: 292 violet · 272 indigo · 252 blue · 232 sky · 212 cyan · 196 teal.
For a fixed accent, pass the same number twice.

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

## Before you publish

Three details came straight off the resume PDF and are worth a second look,
since they are expensive to get wrong on a public page:

1. **Email** — the site uses `aadarshkumar9916@gmail.com`.
2. **LinkedIn** — `linkedin.com/in/aadarsh-795101212` reads like a partial
   slug. Open it and confirm it resolves to your profile.
3. **Phone** — currently not rendered, by choice. See above.
