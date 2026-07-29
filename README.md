# Smart Random Quote Generator

A polished, glassmorphism-styled React app that serves up random quotes with search, filtering, favorites, history, sharing, and a dark/light theme — no backend, no database, just React + CSS + Local Storage.

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── QuoteCard.jsx       # The glass card: quote text, author, category, like/copy/share
│   ├── Header.jsx          # Brand, "Quotes Viewed" counter, theme toggle
│   ├── Footer.jsx          # App name + version
│   ├── SearchBar.jsx       # Keyword search input
│   ├── CategoryFilter.jsx  # Category dropdown
│   ├── History.jsx         # Last 10 generated quotes
│   ├── Favorites.jsx       # Saved/liked quotes (persisted)
│   ├── ThemeToggle.jsx     # Light/dark pill switch
│   └── Toast.jsx           # Auto-dismissing notification
├── data/
│   └── quotes.js           # 40 quotes across 6 categories
├── App.jsx                 # State, Local Storage sync, all app logic
├── App.css                 # Every style — glassmorphism, theming, animations
└── main.jsx                # React entry point
```

## Features

- Random quote on load, "New Quote" and "Previous" navigation
- Keyword search + category filter (Motivation, Success, Life, Education, Funny, Technology)
- Like/favorite quotes, saved to Local Storage
- Last 10 quotes kept as session history, with a "Clear History" action
- Copy-to-clipboard with a toast confirmation
- One-click share to X (Twitter)
- Dark/light theme toggle, persisted to Local Storage
- A fresh random gradient behind the card each time a quote appears, with a smooth fade transition
- Fully responsive, glassmorphism card UI with hover animations

## Customisation

- **Colors & theme**: all CSS custom properties live at the top of `src/App.css` under `:root`, `[data-theme='light']`, and `[data-theme='dark']`.
- **Gradient palette**: tweak the `GRADIENT_COLORS` array in `src/App.jsx` to change the mood of the background gradients.
- **Quotes**: add, edit, or remove entries in `src/data/quotes.js` — just keep each `id` unique.
- **Fonts**: loaded via Google Fonts in `index.html` (Fraunces for display type, Sora for UI text).

## Built With

- React 18 + Vite
- Plain CSS (custom properties, backdrop-filter, animations)
- Browser Local Storage API
- Clipboard API + X (Twitter) intent links
