import styled from 'styled-components';


const StyledCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(42, 184, 189, 0.1);
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
`;

const AvatarBebe = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 5px solid #542b96ff;
`;

const CardContent = styled.div`
  h2 {
    color: #115196ff;
    margin-bottom: 10px;
  }
  p {
    color: #555;
    margin-bottom: 5px;
    line-height: 1.5;
  }
`;


const Card = ({ title, description, imageUrl, status }) => {
  return (
    <StyledCard>
      <AvatarBebe 
        src={imageUrl} 
        alt="Personalização Engraçada do Bebê" 
      />
      
      <CardContent>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Status: {status}</p>
      </CardContent>
    </StyledCard>
  );
};

export default Card;