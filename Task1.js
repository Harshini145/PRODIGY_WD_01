// ============================================
// Halide — Darkroom Lab
// Nav scroll state + mobile menu toggle
// + scroll-driven background color shift
// ============================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

const SCROLL_THRESHOLD = 40;

function updateNavOnScroll() {
  if (window.scrollY > SCROLL_THRESHOLD) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// ---------- Scroll-driven background color ----------
const colorStops = [
  [20, 16, 13],
  [42, 18, 12],
  [36, 26, 12],
  [24, 20, 15],
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function getScrollProgress() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollHeight <= 0) return 0;
  return Math.min(Math.max(window.scrollY / scrollHeight, 0), 1);
}

function updateBackgroundOnScroll() {
  const progress = getScrollProgress();
  const segments = colorStops.length - 1;
  const scaled = progress * segments;
  const index = Math.min(Math.floor(scaled), segments - 1);
  const localT = scaled - index;

  const start = colorStops[index];
  const end = colorStops[index + 1];

  const r = Math.round(lerp(start[0], end[0], localT));
  const g = Math.round(lerp(start[1], end[1], localT));
  const b = Math.round(lerp(start[2], end[2], localT));

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function onScroll() {
  updateNavOnScroll();
  updateBackgroundOnScroll();
}

onScroll();

window.addEventListener('scroll', onScroll, { passive: true });

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});