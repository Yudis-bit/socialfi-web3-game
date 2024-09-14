import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import WalletModal from './WalletModal';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert('MetaMask is not installed!');
    }
  };

  const disconnectWallet = () => {
    setWalletAddress('');
  };

  return (
    <>
      <header className={`App-header ${scrolled ? 'scrolled' : ''}`}>
        <h1 className="logo">GGLAB</h1>
        <nav>
          <ul>
            <li>Who we are</li>
            <li>Features</li>
            <li>Roadmap</li>
            <li>Team</li>
            <li>FAQ</li>
          </ul>
        </nav>
        <div className="wallet-connect">
          {walletAddress ? (
            <>
              <p className="wallet-connected">Wallet Connected</p>
              <button className="disconnect-btn" onClick={disconnectWallet}>Disconnect</button>
            </>
          ) : (
            <button onClick={connectWallet}>Connect Wallet</button>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
