import styled from 'styled-components';

import Background from '../../../Assets/bg-brick-wall.jpg'

export const Container = styled.div`
  width: 100%;
  height: 640px;
  background-image: url(${Background});
  background-attachment: fixed;
  background-size: cover;
`;

export const DarkGlass = styled.div`
    width: 100%;
    height: 640px;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Tittle = styled.h1`
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--light-1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 18px;
      text-transform: none;
      font-weight: normal;  
    }
`;

export const TextStove = styled.div`
    color: var(--light-1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 600px;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const Text = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerCards = styled.div`
    width: 700px;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;