# Harshavardhan M V — Portfolio

A modern, responsive personal portfolio built with **React.js** + **Tailwind CSS**.

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm start
```

Opens at **http://localhost:3000**

### 3. Build for production

```bash
npm run build
```

Output goes to `/build` — ready to deploy on Netlify, Vercel, or GitHub Pages.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html          # HTML shell
│   └── resume.pdf          # ← Place your resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed nav with mobile menu + theme toggle
│   │   ├── Hero.jsx         # Hero section with typing animation
│   │   ├── About.jsx        # About me with stats cards
│   │   ├── Skills.jsx       # Skill categories + progress bars
│   │   ├── Projects.jsx     # Filterable project grid
│   │   ├── Experience.jsx   # Timeline (work + education)
│   │   ├── Contact.jsx      # Contact form + info cards
│   │   ├── Footer.jsx       # Footer with social links
│   │   └── ScrollTop.jsx    # Floating scroll-to-top button
│   ├── data/
│   │   └── portfolioData.js # ← Edit ALL your content here
│   ├── hooks/
│   │   ├── useTyping.js     # Typing animation hook
│   │   └── useScrollFade.js # Scroll-triggered fade-in hook
│   ├── App.jsx              # Root component + theme state
│   ├── index.js             # React entry point
│   └── index.css            # Global styles + Tailwind imports
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ✏️ How to Customize

### Update your content
All text, links, and data live in one file:

```
src/data/portfolioData.js
```

Edit `personalInfo`, `projects`, `skills`, `experience` — the entire site updates automatically.

### Add your resume
Place your PDF at:
```
public/resume.pdf
```

### Update project links
In `portfolioData.js`, replace `"#"` with real GitHub/live URLs:
```js
github: "https://github.com/your-username/project-name",
live: "https://your-project.vercel.app",
```

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌙 Dark / Light mode | Persisted in localStorage |
| ⌨️ Typing animation | Cycles through roles in hero |
| 🔍 Project filtering | Filter by Full-Stack / Frontend / Backend |
| 📜 Scroll animations | Fade-in on scroll via IntersectionObserver |
| ↑ Scroll-to-top | Appears after scrolling 400px |
| ⬇ Resume download | Links to `/public/resume.pdf` |
| 📱 Fully responsive | Mobile, tablet, desktop |
| 📧 Contact form | With simulated send + success state |

---

## 🛠 Tech Stack

- **React 18** — functional components, hooks
- **Tailwind CSS** — utility-first styling
- **CSS Variables** — theme-aware accent colors
- **IntersectionObserver API** — scroll animations
- **Google Fonts** — Syne (headings) + DM Sans (body)

---

## 🌐 Deploy

### Vercel (recommended)
```bash
npx vercel
```

### Netlify
Drag & drop the `/build` folder at netlify.com/drop

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json scripts: "deploy": "gh-pages -d build"
npm run build && npm run deploy
```
