import styled from 'styled-components';


const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s

  &:focus {
    border-color: #091d33ff;
    outline: none;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;
 
const Input = ({ label, type, value, onChange, id, required = false }) => {
  return (
    <InputGroup>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput 
        id={id} 
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </InputGroup>
  );
};

export default Input;