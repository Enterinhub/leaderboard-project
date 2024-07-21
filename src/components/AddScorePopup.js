import React, { useState } from 'react';

export default function AddScorePopup({ onClose, onAddScore }) {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddScore({ username, score });
    setUsername('');
    setScore('');
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add Score</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Score (MM:SS:MS)</label>
            <input
              type="text"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              pattern="^\d{2}:\d{2}:\d{3}$"
              required
            />
          </div>
          <button type="submit">Add Score</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
