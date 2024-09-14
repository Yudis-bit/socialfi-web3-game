import React, { useState } from 'react';
import WalletModal from './WalletModal';
import './styles/ConnectWallet.css';

function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState(''); // Menyimpan alamat wallet
  const [showModal, setShowModal] = useState(false); // Kontrol untuk modal

  // Function to connect to the wallet (Only in modal)
  const connectWallet = async () => {
    console.log("Mencoba menghubungkan MetaMask...");
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]); // Simpan alamat wallet setelah koneksi
        setShowModal(false); // Tutup modal setelah koneksi
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert('MetaMask is not installed!');
    }
  };

  // Function to disconnect the wallet
  const disconnectWallet = () => {
    setWalletAddress(''); // Kosongkan wallet address untuk simulasi disconnect
    console.log("Wallet disconnected");
  };

  return (
    <div className="wallet-connect">
      {walletAddress ? (
        <>
          <p>Connected: {walletAddress}</p>
          <button className="disconnect-btn" onClick={disconnectWallet}>Disconnect Wallet</button>
        </>
      ) : (
        <>
          {/* Trigger modal to open */}
          <button onClick={() => setShowModal(true)}>Connect Wallet</button>
          {showModal && (
            <WalletModal
              connectWallet={connectWallet}
              closeModal={() => setShowModal(false)} // Fungsi untuk menutup modal
            />
          )}
        </>
      )}
    </div>
  );
}

export default ConnectWallet;
