# Halide — Film Darkroom Lab Landing Page

A responsive landing page for a fictional film darkroom lab, built for **Task-01: Responsive Landing Page**.

## Features

- **Fixed navigation bar** that stays visible on all pages/sections
- **Scroll-reactive nav** — background fades in with a red "safelight" glow once you scroll past the hero
- **Hover interactions** — nav links get a glowing underline, gallery photos brighten and zoom slightly, service cards lift on hover
- **Scroll-driven background color** — the page background gradually shifts through darkroom-process tones (charcoal → red-brown → amber → washed neutral) as you scroll down
- **Photo gallery** with a film-grain filter effect
- **Fully responsive** — collapses to a mobile hamburger menu below 640px

## Files

| File          | Purpose                                      |
|---------------|-----------------------------------------------|
| `TASK1.html`  | Page structure (nav, hero, process, services, gallery, contact) |
| `Task1.css`   | Styling, layout, animations, responsive rules |
| `Task1.js`    | Scroll-based nav state, background color shift, mobile menu toggle |

## How to run

1. Keep all three files (`TASK1.html`, `Task1.css`, `Task1.js`) in the **same folder**.
2. Open `TASK1.html` in any browser (double-click it, or use a Live Server extension).
3. An internet connection is needed for the Google Fonts and the gallery placeholder images to load.

## Tech used

- HTML5
- CSS3 (CSS variables, Grid, Flexbox, media queries)
- Vanilla JavaScript (no frameworks/libraries)
