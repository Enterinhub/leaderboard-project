import React, { useState, useRef, useEffect } from 'react';
import { sampleScores } from './sampleData';
import TopHeader from './TopHeader';
import AddScorePopup from './AddScorePopup';

export default function Board() {
  const [scores, setScores] = useState(sampleScores);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const newEntryRef = useRef(null);

  const handleAddScore = (newScore) => {
    const newScores = [...scores, newScore];
    newScores.sort((a, b) => {
      const aTime = a.score.split(':').reduce((acc, time) => (60 * acc) + +time);
      const bTime = b.score.split(':').reduce((acc, time) => (60 * acc) + +time);
      return aTime - bTime;
    });
    setScores(newScores);
    setTimeout(() => {
      if (newEntryRef.current) {
        newEntryRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    const newEntries = document.querySelectorAll('.board-data li.new-entry');
    newEntries.forEach(entry => entry.classList.remove('new-entry'));
    if (newEntryRef.current) {
      newEntryRef.current.classList.add('new-entry');
    }
  }, [scores]);

  return (
    <div className="board">
      <h1>Leaderboard</h1>
      <button onClick={() => setIsPopupOpen(true)}>Add Score</button>
      <div className="board-data">
        <TopHeader />
        <ol>
          {scores.map((data, ind) => (
            <li key={ind} ref={data === scores[scores.length - 1] ? newEntryRef : null}>
              <span>{data.username}</span>
              <span>{data.score}</span>
            </li>
          ))}
        </ol>
      </div>
      {isPopupOpen && <AddScorePopup onClose={() => setIsPopupOpen(false)} onAddScore={handleAddScore} />}
    </div>
  );
}
