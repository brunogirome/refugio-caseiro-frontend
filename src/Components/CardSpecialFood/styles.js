import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${props => props.background});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LabelName = styled.div`
    width: 200px;
    height: 40px;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--light-1);
    align-self: flex-end;
`;

export const ContainerStar = styled.div`
    width: 32px;
    height: 32px;
    background-color: rgba(0,0,0,0.5);
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
`;
