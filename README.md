# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





.generate-cipher-container {
    padding: 20px;
    text-align: center;
    color: white;
    background-color: #121212;
}

h2 {
    margin-bottom: 20px;
}

.input-with-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}

.cipher-input {
    width: 100%; /* Full width within the container */
    max-width: 600px;
    height: 150px;
    padding: 10px;
    color: white;
    background-color: #333;
    border: 1px solid #777;
    border-radius: 4px;
    font-size: 16px;
    resize: none;
}

.req-button {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    max-width: 600px;
    margin: 0 auto;
}

.generate-button {
    width: 40%; /* Each button takes about 30% of the row */
    background-color: #1976d2;
    color: white;
    padding: 10px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    box-sizing: border-box;
}

.generate-button:hover {
    background-color: #1565c0;
}

.cipher-container {
    width: 80%; /* Reduced width for better fit on small screens */
    max-width: 600px;
    margin: 0 auto;
}

.cipher-result {
    margin-top: 20px;
    padding: 10px;
    background-color: #222;
    border: 1px solid #444;
    border-radius: 4px;
    color: #f5f5f5;
    word-wrap: break-word;
    position: relative;
}

.cipher-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.copy-button {
    background-color: #333;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.copy-button:hover {
    background-color: #444;
}

.cipher-output {
    background-color: #1a1a1a;
    color: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    font-family: monospace;
    white-space: pre-wrap;
}

/* Responsive styling */
@media (max-width: 768px) {
    .cipher-input {
        width: 100%;
        height: 120px;
    }

    .generate-button {
        width: 45%; /* Adjust button size to fit two per row */
    }

    .cipher-container {
        width: 90%;
    }
}

@media (max-width: 480px) {
    .cipher-input {
        width: 100%;
        height: 100px;
        font-size: 14px;
    }

    .generate-button {
        width: 100%; /* Stack buttons vertically */
    }

    .cipher-container {
        width: 100%;
    }

    .copy-button {
        font-size: 12px;
        padding: 4px 8px;
    }

    .cipher-output {
        font-size: 14px;
    }
}
