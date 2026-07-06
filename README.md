# Startup Landing Page

A modern, responsive landing page for a tech startup built with HTML, CSS, and JavaScript. Features parallax scrolling, smooth animations, and interactive components.

## Features

- **Parallax hero section** — full-screen background with fixed attachment scrolling effect
- **Scroll reveal animations** — sections fade and slide in as you scroll using `IntersectionObserver`
- **Sticky navbar** — transparent on load, turns solid dark on scroll; collapses to a hamburger menu on mobile
- **Counter animation** — stats count up from zero when scrolled into view
- **Form validation** — live error messages per field with success feedback on submit
- **Fully responsive** — works on desktop, tablet, and mobile
- **Sections** — Hero, Features, Stats, Testimonials, About, Contact

## Getting Started

```bash
git clone https://github.com/Haritha-official/startup-landing-page.git
cd startup-landing-page
```

Open `index.html` in your browser — no build tools or dependencies required.

## Project Structure

```
startup-landing-page/
├── index.html
├── styles.css
├── main.js
├── bg.png
├── coffee.png
├── about.mp4
└── images/
    ├── ai-powered.png
    ├── cloud-services.png
    ├── responsive-design.png
    └── support.png
```

## Tech Stack

- HTML5
- CSS3 (custom animations, flexbox, media queries, backdrop-filter)
- Vanilla JavaScript (IntersectionObserver, requestAnimationFrame, DOM manipulation)
- Font Awesome 6 for icons

## JavaScript Features

- `IntersectionObserver` for scroll-triggered reveal animations
- `requestAnimationFrame` for smooth counter animation
- Navbar scroll behavior using `window.addEventListener('scroll')`
- Hamburger menu toggle for mobile
- Client-side form validation with regex for email and phone
