import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 530px;
    background-color: var(--light-1);
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    width: 860px;
    height: 460px;
    border: 1px solid grey;
    display: flex;
    flex-direction: row;
    padding-top: 35px;
`;

export const TextContent = styled.div`
    display: flex;
    justify-content: center;
`;

export const ContainerImage = styled.div `
    img {
        width: 300px;
        height: 430px;
        border-radius: 20px;
    }
`;

export const MainText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: blue;
    

    h1 {
        font-size: 36px;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--text-green);
    }
`;