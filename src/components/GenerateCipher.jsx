import React, { useState } from 'react';
import axios from 'axios';
import './styles/GenerateCipher.css';

const GenerateCipher = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState("grefwe")

  const handleCopy = () => {
    navigator.clipboard.writeText(cipherText);
    alert("Copied to clipboard!");
  };
  
  const handleGenerate = async () => {
    try {
      const response = await axios.post('/api/generate-cipher', { text: plainText });
      setCipherText(response.data.cipherText);
    } catch (error) {
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
        ></textarea>
        <button onClick={handleGenerate} className="generate-button">Generate</button>
        
      </div>
      {/* <div>
        <button onClick={handleGenerate} className="generate-button">Generate1</button>
        <button onClick={handleGenerate} className="generate-button">Generate2</button>
        <button>Generate2</button>
      </div> */}
      {/* {cipherText && (
        <div className="cipher-result">
          <h2>Cipher Text:</h2>
          <p>{cipherText}</p>
        </div>
      )} */}
      {cipherText && (
        <div className="cipher-result">
          <div className="cipher-header">
            <h2>Cipher Text:</h2>
            <button className="copy-button" onClick={handleCopy}>
              Copy Code
            </button>
          </div>
          <pre className="cipher-output">{cipherText}</pre>
        </div>
      )}
    </div>
  );
};

export default GenerateCipher;
