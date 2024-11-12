import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';
import './styles/About.css'; // Import the CSS file

const About = () => {
  return (
    <Box className="about-container">
      <Typography variant="h4" className="about-title">
        About Cipher Text Generator
      </Typography>
      <Typography variant="body1" className="about-description">
        The Cipher Text Generator is a tool designed to make encryption simple and accessible. It allows you to input plain text and instantly converts it into cipher text using three classic encryption techniques: Caesar's Cipher, Playfair Cipher, and Vigenère Cipher.
      </Typography>

      <div className="features-section">
        <Typography variant="h5" className="features-title">
          Features
        </Typography>
        <ul className="features-list">
          <li><strong>Caesar Cipher</strong> - Shifts each letter in the text by a fixed number of positions.</li>
          <li><strong>Playfair Cipher</strong> - Uses a keyword to create a 5x5 grid for encoding letter pairs.</li>
          <li><strong>Vigenère Cipher</strong> - Uses a repeating keyword for a varied shift pattern.</li>
          <li><strong>Customizable Keys</strong> - Allows custom keys for Playfair and Vigenère ciphers.</li>
        </ul>
      </div>

      {/* Back to Home Button */}
      <Button color="inherit" component={Link} to="/" className="about-button">
        Back to Home
      </Button>
    </Box>
  );
};

export default About;
