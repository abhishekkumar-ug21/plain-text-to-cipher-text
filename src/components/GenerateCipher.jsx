import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/GenerateCipher.css';


const GenerateCipher = () => {
  const mode = import.meta.env.VITE_MODE; // Accessing the mode variable

  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [copyText, setCopyText] = useState("Copy Code");
  const [error, setError] = useState(''); 

  const handleCopy = () => {
    navigator.clipboard.writeText(cipherText);
    setCopyText("Copied!");
    setTimeout(() => {
      setCopyText("Copy Code");
    }, 2000);
  };

  const handleGenerate = async (encryptionType) => {
    try {
      if (mode === "pro") {
        console.log("pro req");

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/generate-cipher`, { 
            plainText,
            encryptionType // Send the encryption type to the API
        });
        setCipherText(response.data.cipherText);

    } else if (mode === "dev") {
        console.log("dev req");
        const response = await axios.post(`http://localhost:3000/api/generate-cipher`, { 
            plainText,
            encryptionType // Send the encryption type to the API
        });
        console.log(response.data);
        setCipherText(response.data.cipherText);

    }
            
      // setCipherText(response.data.cipherText);
      setError(''); 
    } catch (error) {
      if (error.response) {
        setError(`Error: ${error.response.data.message || 'Error generating cipher. Please try again. from client'}`);
        console.error('Error response data:', error.response.data);
      } else if (error.request) {
        setError('No response received from the server. Please check your network connection.');
        console.error('Error request:', error.request);
      } else {
        setError(`Unexpected error: ${error.message}`);
        console.error('Error message:', error.message);
      }
    }
  };

    // Effect to handle error display for 1 second
    useEffect(() => {
      if (error) {
        const timer = setTimeout(() => {
          setError(''); // Clear error after 1 second
        }, 2000);
  
        return () => clearTimeout(timer); // Clean up the timer
      }
    }, [error]);

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
        <div className='req-button'>
          {/* <button onClick={() => handleGenerate('AES')} className="generate-button">AES</button> */}
          {/* <button onClick={() => handleGenerate('RSA')} className="generate-button">RSA</button> */}
          <button onClick={() => handleGenerate('Caesar')} className="generate-button">Caesar</button>
          {/* <button onClick={() => handleGenerate('DES')} className="generate-button">DES</button> */}
          <button onClick={() => handleGenerate('Playfair')} className="generate-button">Playfair</button>

        </div>
      </div>

      {error && <div className="error-message">{error}</div>} {/* Display error message */}

      <div className='cipher-container'>
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
    </div>
  );
};

export default GenerateCipher;
