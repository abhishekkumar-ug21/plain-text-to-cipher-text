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
      // console.log("API URL: 1");

      // console.log("API URL:", import.meta.env.VITE_API_URL); // Logging the API URL

        // Make the API request
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/generate-cipher`, { plainText });

      // console.log("API URL: 2");

      //above code work but below code do not work

      // console.log("API URL: 1");
      // console.log("API URL:", import.meta.env.VITE_API_URL);

      // console.log("Process object:", process);

      // console.log("API URL:", import.meta.env.VITE_API_URL);

      // // const response = await axios.post(`${import.meta.env.VITE_API_URL}/generate-cipher`, { plainText });
      // const response = await axios.post(`${import.meta.env.VITE_API_URL}/generate-cipher`, { plainText });


      // // const response = await axios.post(`${process.env.REACT_APP_API_URL}/generate-cipher`, { plainText });
      // console.log("API URL: 2");

      // const response = await axios.post(`${process.env.REACT_APP_API_URL}/generate-cipher`, { plainText });
      // const response = await axios.post(`http://localhost:3000/api/generate-cipher`, { plainText });
      setCipherText(response.data.cipherText);
      setError(''); // Clear error if successful
    } catch (error) {
      // Check if the error is a response from the server
      if (error.response) {
        // The request was made, but the server responded with a status code that falls out of the range of 2xx
        setError(`Error: ${error.response.data.message || 'Error generating cipher. Please try again.'}`);
        console.error('Error response data:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response received from the server. Please check your network connection.');
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(`Unexpected error: ${error.message}`);
        console.error('Error message:', error.message);
      }
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
