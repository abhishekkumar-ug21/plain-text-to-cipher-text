import React, { useState } from 'react';
import axios from 'axios';
import './styles/GenerateCipher.css';

// const apiUrl = process.env.REACT_APP_API_URL; // Use the environment variable

const GenerateCipher = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [copyText, setCopyText] = useState("Copy Code");
  const [error, setError] = useState(''); // State for error messages

  const handleCopy = () => {
    navigator.clipboard.writeText(cipherText);
    setCopyText("Copied!");
    setTimeout(() => {
      setCopyText("Copy Code");
    }, 2000);
  };

  const handleGenerate = async () => {
    try {
      // const response = await axios.post(`${process.env.REACT_APP_API_URL}/generate-cipher`, { plainText });
      const response = await axios.post(`http://localhost:3000/api/generate-cipher`, { plainText });
      setCipherText(response.data.cipherText);
      setError(''); // Clear error if successful
    } catch (error) {
      setError('Error generating cipher. Please try again.'); // Set error message
      console.error('Error generating cipher:', error);
    }
  };

  return (
    <div className="generate-cipher-container">
      <h2>Generate Cipher Text</h2>
      <div className="input-with-button">
        <textarea
          className="cipher-input"
          value={plainText}
          onChange={(e) => setPlainText(e.target.value)}
          placeholder="Enter your plain text here..."
        />
        <button onClick={handleGenerate} className="generate-button">Generate</button>
      </div>

      {error && <div className="error-message">{error}</div>} {/* Display error message */}

      {cipherText && (
        <div className="cipher-result">
          <div className="cipher-header">
            <h2>Cipher Text:</h2>
            <button className="copy-button" onClick={handleCopy}>
              {copyText}
            </button>
          </div>
          <pre className="cipher-output">{cipherText}</pre>
        </div>
      )}
    </div>
  );
};

export default GenerateCipher;
