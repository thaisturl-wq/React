
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import { FaBaby } from "react-icons/fa";


const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f2f5;
`;

const LoginForm = styled.form`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const IconePersonalizado = styled(FaBaby)`
  font-size: 4em;
  margin: 0 auto 20px auto;
  color: #6607ffff; 
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

   
  const handleLogin = (e) => {
    e.preventDefault();
    
    
    if (email === 'teste@mail.com' && password === '123') {
      alert('Login bem-sucedido! Aguarde a surpresa!.');
      navigate('/home'); 
    } else {
      alert('Credenciais incorretas. Tente: teste@mail.com / 123');
      setPassword(''); 
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <IconePersonalizado />
        <h2></h2>
        
        <Input 
          label="Email"
          id="email-input" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        
           <Input 
          label="Senha"
          id="senha-input" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        
          <Button primary type="submit">Entrar</Button> 

      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;