import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './styles/GenerateCipher.css';

const GenerateCipher = () => {
  const mode = import.meta.env.VITE_MODE;

  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [copyText, setCopyText] = useState("Copy cipher");
  const [error, setError] = useState('');
  const [key, setKey] = useState('');
  const cipherResultRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(cipherText);
    setCopyText("Copied!");
    setTimeout(() => {
      setCopyText("Copy cipher");
    }, 2000);
  };

  const handleGenerate = async (encryptionType) => {
    try {
      const url = mode === "pro" 
        ? `${import.meta.env.VITE_API_URL}/generate-cipher` 
        : `http://localhost:3000/api/generate-cipher`;
      
      const requestData = { plainText, encryptionType };

      if (encryptionType === 'Playfair' || encryptionType === 'Vigenere') {
        requestData.key = key;
      }

      const response = await axios.post(url, requestData);
      setCipherText(response.data.cipherText);
      setError(''); 
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    if (error.response) {
      setError(`Error: ${error.response.data.message || 'Error generating cipher. Please try again.'}`);
    } else if (error.request) {
      setError('No response received from the server. Please check your network connection.');
    } else {
      setError(`Unexpected error: ${error.message}`);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="generate-cipher-container">
      <h2 className="generate-title">Generate Cipher Text</h2>
      <p className="generate-description">Enter your text and select a cipher type to encrypt.</p>
      
      <div className="input-section">
        <textarea
          className="cipher-input"
          value={plainText}
          onChange={(e) => setPlainText(e.target.value)}
          placeholder="Enter your plain text here..."
        />
        
        <input
          type="text"
          className="key-input"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter key if needed"
        />
        
        <div className="button-group">
          <button onClick={() => handleGenerate('Caesar')} className="generate-button">Caesar</button>
          <button onClick={() => handleGenerate('Playfair')} className="generate-button">Playfair</button>
          <button onClick={() => handleGenerate('Vigenere')} className="generate-button">Vigenere</button>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      {cipherText && (
        <div className="cipher-result" ref={cipherResultRef}>
          <div className="cipher-header">
            <h2>Cipher Text:</h2>
            <button className="copy-button" onClick={handleCopy}>{copyText}</button>
          </div>
          <pre className="cipher-output">{cipherText}</pre>
        </div>
      )}
    </div>
  );
};

export default GenerateCipher;
