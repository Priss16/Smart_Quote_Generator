import React from 'react';

// The centerpiece card: quote text, author, category badge, and the
// per-quote actions (favorite / copy / share). Receives a random gradient
// string from App so a fresh backdrop appears behind the glass each time.
function QuoteCard({ quote, gradient, isFavorite, isFading, onToggleFavorite, onCopy, onShare }) {
  if (!quote) return null;

  return (
    <div className="quote-card-wrapper" style={{ background: gradient }}>
      <div className={`quote-card ${isFading ? 'fade' : ''}`}>
        <span className="quote-category-badge">{quote.category}</span>

        <p className="quote-text">“{quote.text}”</p>
        <p className="quote-author">— {quote.author}</p>

        <div className="quote-actions">
          <button
            type="button"
            className={`icon-btn like-btn ${isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(quote)}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>

          <button
            type="button"
            className="icon-btn"
            onClick={() => onCopy(quote)}
            aria-label="Copy quote"
            title="Copy quote"
          >
            📋
          </button>

          <button
            type="button"
            className="icon-btn"
            onClick={() => onShare(quote)}
            aria-label="Share quote on X"
            title="Share on X"
          >
            🔗
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
