import styled from 'styled-components';

import BrickTexture from '../../../Assets/brick-wall.png';

export const Container = styled.div`
    width: 100%;
    height: 530px;
    background-color: var(--light-1);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    //width: 860px;
    width: 1000px;
    height: 460px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
`;

export const TextContent = styled.div`
    display: flex;
    justify-content: center;
    height: 430px;
    width: 480px;
    margin-right: 140px;
    color: var(--light-2);
`;

export const ContainerImage = styled.div`
    img {
        width: 300px;
        height: 430px;
        border-radius: 20px;
        object-fit: cover;
        object-position: 30%;
    }
`;

export const MainText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

export const Tittle = styled.h1`
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--text-green);
    font-family: 'Roboto Slab', serif;
`;

export const BrickWall = styled.div`
    width: 100%;
    height: 530px;
    background-image: url(${BrickTexture});
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;

export const ContainerApp = styled.div`
    width: 100%;
    height: 220px;
    background-color: var(--light-1);
    font-family: 'Montserrat', sans-serif;
    color: #333;
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const AppText = styled.div`
    font-size: 18px;
    width: 270px;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    padding-bottom: 16px;
`;

export const ContainerButton = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-left: 16px;
    margin-right: 16px;
`;

export const ContentApp = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ContainerPhone = styled.img`
    width: 180px;
    height: 180px;
    align-self: flex-end;
`;