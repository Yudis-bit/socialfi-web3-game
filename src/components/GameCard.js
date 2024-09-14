import React from 'react';

function GameCard({ title, description, imgUrl }) {
  return (
    <div className="game-card">
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="play-now-btn">Play Now</button>
    </div>
  );
}

export default GameCard;
