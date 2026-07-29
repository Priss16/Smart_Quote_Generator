import React from 'react';

// Simple pill switch between light and dark theme. The actual persistence
// (localStorage) and class-swapping live in App.jsx; this is presentation-only.
function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <span className={`toggle-icon ${isDark ? '' : 'active'}`}>☀️</span>
      <span className="toggle-track">
        <span className={`toggle-thumb ${isDark ? 'right' : 'left'}`} />
      </span>
      <span className={`toggle-icon ${isDark ? 'active' : ''}`}>🌙</span>
    </button>
  );
}

export default ThemeToggle;
