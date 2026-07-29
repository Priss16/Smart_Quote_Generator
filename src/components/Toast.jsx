import React, { useEffect } from 'react';

// Small auto-dismissing notification, e.g. "Quote copied successfully."
// The parent owns the message state; this component just renders + times out.
function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return undefined;
    const timer = setTimeout(onClose, 2200);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="toast" role="status" aria-live="polite">
      <span className="toast-icon" aria-hidden="true">✓</span>
      {message}
    </div>
  );
}

export default Toast;
