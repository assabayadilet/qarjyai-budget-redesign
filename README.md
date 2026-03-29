# QarjyAI Budget Tracker — UI Redesign

A mobile budget tracker design prototype with a **liquid glass UI** aesthetic, built with React 19 + TypeScript.

## Screens

The prototype includes 8 screens across 5 main tabs and 3 modal sheets:

- **Home** — Overview with balance and recent transactions
- **Budget** — Category-based spending limits
- **Insights** — Analytics and spending patterns
- **Goals** — Savings goals tracker
- **Profile** — User settings
- **Add Transaction** — Quick entry sheet
- **Goal Creation** — New goal setup
- **Goal Details** — Progress and history

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool |
| Motion | Animations |

## Quick Start

```bash
npm install
npm run dev
```

Local URL: http://127.0.0.1:5175/

## Build

```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── App.tsx          # Main app shell with tab navigation
│   └── index.css        # Global styles + liquid glass effects
├── public/              # Static assets
├── index.html           # Entry point
├── ICON_SOURCES.md      # Icon attribution
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Design

- Single-screen app shell with internal tab state
- Individual screens accessible via URL params: `?tab=home`, `?tab=budget`, etc.
- [Figma design file](https://www.figma.com/design/5r6V2HN309pxUijNvq4gJy)
