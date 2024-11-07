import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './styles/GenerateCipher.css';

const GenerateCipher = () => {
  const mode = import.meta.env.VITE_MODE; // Accessing the mode variable

  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [copyText, setCopyText] = useState("Copy cipher");
  const [error, setError] = useState('');
  const [key, setKey] = useState(''); // New state for the key

  const cipherResultRef = useRef(null); // Create a ref for the cipher result container

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

      console.log(`${mode} req`);
      
      // Prepare the request payload
      const requestData = {
        plainText,
        encryptionType,
      };

      // Conditionally add the key for certain encryption types
      if (encryptionType === 'Playfair' || encryptionType === 'Vigenere') { // Add more conditions for other encryption types if needed
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
      console.error('Error response data:', error.response.data);
    } else if (error.request) {
      setError('No response received from the server. Please check your network connection.');
      console.error('Error request:', error.request);
    } else {
      setError(`Unexpected error: ${error.message}`);
      console.error('Error message:', error.message);
    }
  };

  // Effect to handle error display for 2 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(''); // Clear error after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [error]);

  // Use ResizeObserver to observe changes in cipher result container
  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        console.log('Size changed:', entry.contentRect.width, entry.contentRect.height);
      }
    });

    if (cipherResultRef.current) {
      observer.observe(cipherResultRef.current);
    }

    return () => {
      observer.disconnect(); // Clean up the observer on component unmount
    };
  }, [cipherResultRef]);

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
        
        {/* Conditionally render key input for specific encryption types */}
        <input
          type="text"
          className="key-input"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter key if needed"
        />

        <div className='req-button'>
          <button onClick={() => handleGenerate('Caesar')} className="generate-button">Caesar</button>
          <button onClick={() => handleGenerate('Playfair')} className="generate-button">Playfair</button>
          <button onClick={() => handleGenerate('Vigenere')} className="generate-button">Vigenere</button>

        </div>
      </div>

      {error && <div className="error-message">{error}</div>} {/* Display error message */}

      <div className='cipher-container'>
        {cipherText && (
          <div className="cipher-result" ref={cipherResultRef}>
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
    </div>
  );
};

export default GenerateCipher;
