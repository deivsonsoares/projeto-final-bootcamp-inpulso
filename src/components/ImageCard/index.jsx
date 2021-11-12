import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  width: 90px;
  height: 90px;
  border-radius: 30px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  margin-left: 0;
  margin-top: 10px;  
`;

const Title = styled.span`
    fonte-family: ${(props) => props.theme.fonts.regular};
    color: #ffffff;
    font-size: 16px;
    margin-top 1px;
    margin: 10px;
    margin-left: 5px;  
`;

const ImageCard = ({ photo, title }) => 
<Card photo={photo}>
  <Title>{title}</Title>
</Card>;

export default ImageCard;