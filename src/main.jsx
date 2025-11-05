// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; // Certifique-se que a extensão está correta
import { GlobalStyle } from './styles/GlobalStyles.js'; // A IMPORTAÇÃO DEVE SER COM CHAVES {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* O GlobalStyle é renderizado fora do App */}
      <GlobalStyle /> 
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);