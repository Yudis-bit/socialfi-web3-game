import React from 'react';
import '../styles/ConnectWallet.css';

function WalletModal({ connectWallet, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Connect Wallet</h5>
          <button className="close-btn" onClick={closeModal}>&times;</button>
        </div>
        <div className="modal-body">
          <p>Select your wallet to connect:</p>
          <button className="wallet-btn" onClick={connectWallet}>
            <img
              src="https://cdn.jsdelivr.net/gh/MetaMask/brand-resources/SVG/metamask-fox.svg"
              alt="MetaMask Logo"
              className="metamask-logo"
            />
            Connect with MetaMask
          </button>
        </div>
      </div>
    </div>
  );
}

export default WalletModal;
