import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './styles/Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Generate Cipher Text</h1>
      <p className="home-description">
        Transform your plain text into secure cipher text with ease. Choose from Caesar, Playfair, or Vigenère ciphers and learn how these timeless techniques work. Encrypt your messages with just a few clicks!
      </p>
      
      <div className="features-section">
        <h2 className="features-title">Our Features</h2>
        <ul className="features-list">
          <li><strong>Caesar Cipher</strong> - Shift each character in the text by a set number of positions.</li>
          <li><strong>Playfair Cipher</strong> - Encode text in pairs of letters using a 5x5 grid.</li>
          <li><strong>Vigenère Cipher</strong> - Use a keyword to apply a repeating shift pattern for stronger encryption.</li>
          <li><strong>Customizable Keys</strong> - Enter your own key for Playfair and Vigenère ciphers for added security.</li>
        </ul>
      </div>

      <Button color="inherit" component={Link} to="/generate-cipher" className="home-button">
        Generate Cipher
      </Button>
      <footer className="home-footer">
        <p>Ready to secure your messages? Start exploring cipher techniques with us today!</p>
        <small>&copy; 2024 Cipher Text Generator. All rights reserved.</small>
      </footer>
    </div>
  );
};

export default Home;
