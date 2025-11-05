import styled from 'styled-components';


const StyledButton = styled.button`
  background-color: ${(props) => (props.$primary ? '#3a2538ff' : '#818161ff')};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: ${(props) => (props.$primary ? '#d8cbe9ff' : '#6b19c9ff')};
  }
`;

const Button = ({ children, primary, onClick, type }) => {
  return (
    <StyledButton $primary={primary} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
}

export default Button;