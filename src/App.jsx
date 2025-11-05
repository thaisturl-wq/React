// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx'; // Extensão correta
import HomePage from './pages/HomePage.jsx';   // Extensão correta

function App() {
  return (
    // Routes deve envolver todos os Route
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      {/* Rota de fallback para qualquer caminho desconhecido */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default App;