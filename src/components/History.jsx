import React from 'react';

// Shows the last 10 quotes generated this session, most recent first.
function History({ history, onClear, onSelect }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Recent History</h2>
        {history.length > 0 && (
          <button type="button" className="text-btn" onClick={onClear}>
            Clear History
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="panel-empty">No quotes generated yet — hit "New Quote" to begin.</p>
      ) : (
        <ul className="panel-list">
          {history.map((q, idx) => (
            <li key={`${q.id}-${idx}`}>
              <button type="button" className="panel-list-item" onClick={() => onSelect(q)}>
                <span className="panel-list-text">“{q.text}”</span>
                <span className="panel-list-meta">
                  {q.author} · {q.category}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
