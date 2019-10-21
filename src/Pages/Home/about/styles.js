import styled from 'styled-components';

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

    h1 {
        font-size: 36px;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--text-green);
    }
`;

export const SocialContainer = styled.div`

`;