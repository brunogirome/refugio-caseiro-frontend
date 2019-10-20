import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${props => props.bgColor};
  color: ${props => props.txtColor};
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 18px 24px 18px 24px;
  font-family: 'Roboto Slab', sans-serif;
  border-radius: 30px;
  height: min-content;
`;
