import React from 'react';
import Header from './components/Header';
import GameCard from './components/GameCard';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div
          className="hero-section"
          style={{
            backgroundImage: `url('/assets/images/background.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1>MultiGaming Platform for NFT Communities</h1>
          <p>Gglab is a multigaming platform for NFT communities to come together, compete, and have fun.</p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="game-display">
          <GameCard
            title="Poker Night"
            description="Play now and join the fun with NFTs!"
            imgUrl="/assets/images/hero.jpeg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
