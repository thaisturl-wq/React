import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import fotoBebe from '../assets/foto-do-bebe.jpg'; 

const HomeLayout = styled.div`
  padding: 40px;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  max-width: 900px;
  margin: 0 auto 40px auto;
`;


const HomePage = () => {
  const navigate = useNavigate();
  
   const handleLogout = () => {
    alert('Sessão encerrada com sucesso!');
    navigate('/'); 
  };
  
  const cardData = {
    title: 'João Ferreira Carvalho Turl',
    description: 'O bebê mais gatos e simpático de todos os tempos',
    imageUrl: fotoBebe,
    status: 'Sem preço definido '
  };

  return (
    <HomeLayout>
      <Header>
        <h1>Bem-vindo ao Painel de Controle!</h1>
        <div style={{ width: '150px' }}>
          <Button onClick={handleLogout}>Sair</Button>
        </div>
      </Header>
      
      <h2>Visualização de Dados (Uso de Componente Card com Props)</h2>
      
      <Card 
        title={cardData.title}
        description={cardData.description}
        imageUrl={cardData.imageUrl}
        status={cardData.status}
      />

      <p style={{ marginTop: '30px', color: '#888' }}>
       *Todos os direitos reservados a mamãe*
      </p>

    </HomeLayout>
  );
};

export default HomePage;