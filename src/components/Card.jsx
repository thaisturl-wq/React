import styled from 'styled-components';
import React from 'react';

// Mantemos os estilos básicos de container do Card
const StyledCard = styled.div`
  background: white;
  padding: 15px; /* Reduzi um pouco o padding para o novo conteúdo */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Estilo de card mais genérico */
  max-width: 350px; /* Largura reduzida para caber vários na galeria */
  margin: 15px; /* Margem para separar os cards na galeria */
  
  /* Removemos o 'text-align: center;' para melhor layout do conteúdo interno */
`;

// Mantemos o CardContent como um wrapper de estilo
const CardContent = styled.div`
  /* Estilos internos permanecem, mas serão mais genéricos agora */
  h2 {
    color: #115196ff;
    margin-bottom: 10px;
    font-size: 1.5em;
  }
  p {
    color: #555;
    margin-bottom: 5px;
    line-height: 1.5;
  }
`;

// O componente agora aceita a prop 'children'
const Card = ({ children }) => {
  return (
    <StyledCard>
      {/* O conteúdo específico será renderizado aqui */}
      {children}
    </StyledCard>
  );
};

export default Card;