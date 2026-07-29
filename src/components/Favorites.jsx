import React from 'react';

// Lists every quote the user has liked, persisted in Local Storage by App.
function Favorites({ favorites, onRemove, onSelect }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Favorites</h2>
        <span className="panel-count">{favorites.length}</span>
      </div>

      {favorites.length === 0 ? (
        <p className="panel-empty">Tap the heart on a quote to save it here.</p>
      ) : (
        <ul className="panel-list">
          {favorites.map((q) => (
            <li key={q.id}>
              <button type="button" className="panel-list-item" onClick={() => onSelect(q)}>
                <span className="panel-list-text">“{q.text}”</span>
                <span className="panel-list-meta">
                  {q.author} · {q.category}
                </span>
              </button>
              <button
                type="button"
                className="panel-list-remove"
                onClick={() => onRemove(q)}
                aria-label="Remove from favorites"
                title="Remove from favorites"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
