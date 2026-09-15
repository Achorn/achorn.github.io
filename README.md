# joshuaachorn.com

Personal site — portfolio, music, and art. React + Material UI, deployed to
GitHub Pages at [joshuaachorn.com](https://joshuaachorn.com).

## Running it

```bash
npm install
npm start      # dev server on http://localhost:3000
npm test       # watch mode; CI=true npm test to run once
npm run build  # production bundle into build/
npm run deploy # builds, then pushes build/ to the gh-pages branch
```

## Pages

The site is a set of routes rather than one long scrolling page. Routing is
`HashRouter`, because GitHub Pages has no server-side rewrite for deep links.

| Route | Page | Source |
|---|---|---|
| `/` | Intro and featured projects | `src/pages/Home.js` |
| `/about` | Longer bio and education | `src/pages/About.js` |
| `/projects` | Every project | `src/pages/Projects.js` |
| `/experience` | Work history | `src/pages/Experience.js` |
| `/music` | Albums, linking out to Spotify — **hidden from the nav** | `src/pages/Music.js` |
| `/art` | Gallery | `src/pages/Art.js` |

`/blog` is a separate site and is linked out to from the nav.

## Layout of the code

```
src/
  data/        content — edit these, not the pages
  pages/       one file per route, composition only
  components/
    layout/    app shell: nav, footer, page header
    cards/     the repeated pieces: project, job, album
  theme/       MUI theme and the light/dark colour mode
```

**Content lives in `src/data/`.** Adding a project, a job, or an album means
editing the relevant file there — no page or component needs to change. Each
data file documents its own fields at the top.

- A project with `featured: true` also appears on the home page.
- A project with no `image` renders a titled placeholder, so it can ship before
  the screenshot exists.
- `src/data/artwork.js` is intentionally empty; `/art` renders an empty state
  until pieces are added to it.
- `src/data/navigation.js` drives the nav bar in both desktop and mobile form.
  `/music` is commented out there: the route still works, it is just not linked.

## Theming

`src/theme/createAppTheme.js` builds the theme for a given mode, and
`ColorModeContext` holds the current one, persists it to `localStorage`, and
falls back to the OS preference. Colours belong in the theme — pages and
components should reference palette tokens (`text.secondary`, `background.paper`)
so both modes stay correct.

## Tests

`src/App.test.js` renders every route and exercises the nav and the colour mode
toggle. It reads the data files directly, so a new project or album is covered
the moment it is added.
