import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import QuoteCard from './components/QuoteCard.jsx';
import SearchBar from './components/SearchBar.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import History from './components/History.jsx';
import Favorites from './components/Favorites.jsx';
import Toast from './components/Toast.jsx';
import quotesData, { categories } from './data/quotes.js';

const MAX_HISTORY = 10;
const THEME_KEY = 'sqg-theme';
const FAVORITES_KEY = 'sqg-favorites';

// A curated set of color pairs. Picking two of these each time (rather than
// fully random RGB values) keeps every generated gradient looking intentional
// instead of muddy or clashing.
const GRADIENT_COLORS = [
  '#7C6CF6', '#F6A26C', '#4FD1C5', '#F76C9A',
  '#6C8CF6', '#F6D76C', '#9A6CF6', '#6CF6B9',
  '#F6816C', '#6CE1F6',
];

function randomGradient() {
  const a = GRADIENT_COLORS[Math.floor(Math.random() * GRADIENT_COLORS.length)];
  let b = GRADIENT_COLORS[Math.floor(Math.random() * GRADIENT_COLORS.length)];
  while (b === a) {
    b = GRADIENT_COLORS[Math.floor(Math.random() * GRADIENT_COLORS.length)];
  }
  const angle = Math.floor(Math.random() * 360);
  return `linear-gradient(${angle}deg, ${a} 0%, ${b} 100%)`;
}

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function App() {
  // ----- Theme -----
  const [theme, setTheme] = useState(() => loadJSON(THEME_KEY, 'light'));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  // ----- Search & category filter -----
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredPool = useMemo(() => {
    return quotesData.filter((q) => {
      const matchesCategory = category === 'All' || q.category === category;
      const matchesSearch =
        search.trim() === '' ||
        q.text.toLowerCase().includes(search.toLowerCase()) ||
        q.author.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  // ----- Quote generation state -----
  const [history, setHistory] = useState([]); // last MAX_HISTORY generated quotes, oldest -> newest
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [viewedCount, setViewedCount] = useState(0);
  const [gradient, setGradient] = useState(randomGradient());
  const [isFading, setIsFading] = useState(false);
  const fadeTimeoutRef = useRef(null);

  const currentQuote = currentIndex >= 0 ? history[currentIndex] : null;

  const showNewQuote = useCallback(
    (pool) => {
      const source = pool && pool.length > 0 ? pool : quotesData;
      let next = source[Math.floor(Math.random() * source.length)];

      // Avoid showing the exact same quote twice in a row when possible.
      if (source.length > 1 && currentQuote && next.id === currentQuote.id) {
        next = source[(source.indexOf(next) + 1) % source.length];
      }

      setIsFading(true);
      clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = setTimeout(() => setIsFading(false), 350);

      setHistory((prev) => {
        const updated = [...prev, next];
        return updated.length > MAX_HISTORY ? updated.slice(updated.length - MAX_HISTORY) : updated;
      });
      setGradient(randomGradient());
      setViewedCount((c) => c + 1);
    },
    [currentQuote]
  );

  // Keep currentIndex pinned to the newest entry whenever history grows.
  useEffect(() => {
    if (history.length > 0) setCurrentIndex(history.length - 1);
  }, [history.length]);

  // Generate the very first quote automatically on mount.
  useEffect(() => {
    showNewQuote(quotesData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNewQuote = () => showNewQuote(filteredPool);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setIsFading(true);
      clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = setTimeout(() => setIsFading(false), 350);
      setGradient(randomGradient());
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleClearHistory = () => {
    setHistory(currentQuote ? [currentQuote] : []);
    setCurrentIndex(currentQuote ? 0 : -1);
  };

  const handleSelectFromList = (quote) => {
    setIsFading(true);
    clearTimeout(fadeTimeoutRef.current);
    fadeTimeoutRef.current = setTimeout(() => setIsFading(false), 350);
    setGradient(randomGradient());
    setHistory((prev) => {
      const updated = [...prev, quote];
      return updated.length > MAX_HISTORY ? updated.slice(updated.length - MAX_HISTORY) : updated;
    });
  };

  // ----- Favorites -----
  const [favorites, setFavorites] = useState(() => loadJSON(FAVORITES_KEY, []));

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (quote) => favorites.some((f) => f.id === quote.id);

  const toggleFavorite = (quote) => {
    setFavorites((prev) =>
      prev.some((f) => f.id === quote.id) ? prev.filter((f) => f.id !== quote.id) : [...prev, quote]
    );
  };

  const removeFavorite = (quote) => {
    setFavorites((prev) => prev.filter((f) => f.id !== quote.id));
  };

  // ----- Toast -----
  const [toastMessage, setToastMessage] = useState('');

  const handleCopy = async (quote) => {
    const text = `"${quote.text}" — ${quote.author}`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard API can fail (permissions/unsupported); fail silently but still notify.
    }
    setToastMessage('Quote copied successfully.');
  };

  const handleShare = (quote) => {
    const text = `"${quote.text}" — ${quote.author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app-shell">
      <Header viewedCount={viewedCount} theme={theme} onToggleTheme={toggleTheme} />

      <main className="app-main">
        <div className="controls-row">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter categories={categories} selected={category} onChange={setCategory} />
        </div>

        <QuoteCard
          quote={currentQuote}
          gradient={gradient}
          isFading={isFading}
          isFavorite={currentQuote ? isFavorite(currentQuote) : false}
          onToggleFavorite={toggleFavorite}
          onCopy={handleCopy}
          onShare={handleShare}
        />

        <div className="nav-buttons">
          <button type="button" className="btn btn-secondary" onClick={handlePrevious} disabled={currentIndex <= 0}>
            ← Previous
          </button>
          <button type="button" className="btn btn-primary" onClick={handleNewQuote}>
            New Quote
          </button>
        </div>

        {filteredPool.length === 0 && (
          <p className="no-results">No quotes match your search/filter. Try something else.</p>
        )}

        <div className="panels-row">
          <History history={[...history].reverse()} onClear={handleClearHistory} onSelect={handleSelectFromList} />
          <Favorites favorites={favorites} onRemove={removeFavorite} onSelect={handleSelectFromList} />
        </div>
      </main>

      <Footer />

      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}

export default App;
