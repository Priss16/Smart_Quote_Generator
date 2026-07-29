import React from 'react';
import ThemeToggle from './ThemeToggle.jsx';

// Top bar: brand mark, live "quotes viewed" counter, and the theme toggle.
function Header({ viewedCount, theme, onToggleTheme }) {
  return (
    <header className="app-header">
      <div className="brand">
        <span className="brand-mark" aria-hidden="true">“</span>
        <div className="brand-text">
          <h1>Smart Random Quote Generator</h1>
          <p className="brand-tagline">A little wisdom, on demand.</p>
        </div>
      </div>

      <div className="header-right">
        <div className="viewed-counter" title="Quotes viewed this session">
          <span className="viewed-label">Quotes Viewed</span>
          <span className="viewed-value">{String(viewedCount).padStart(2, '0')}</span>
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}

export default Header;
