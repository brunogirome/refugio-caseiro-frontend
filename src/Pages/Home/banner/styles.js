import styled from 'styled-components';
import Background from '../../../Assets/bg-banner-1.jpg'

export const Container = styled.div`
    width: 100%;
    height: 700px;
    background-image: url(${Background});
    background-color: var(--bg-black);

    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;

`;

export const DarkGlass = styled.div`
    width: 100%;
    height: 700px;
    background-color: rgba(0,0,0, 0.5);
    div
    {
        display: flex;
        justify-content: center;
    }
`;

export const Tittle = styled.h1`
    color: var(--light-1);
    text-transform: uppercase;
    font-size: 64px;
    font-weight: normal;
    text-align: center;
    line-height: 50px;

    display: flex;
    flex-direction: column;
    
    margin-top: 200px;

    span 
    {
        font-size: 36px;
        text-transform: none;
    }
`;