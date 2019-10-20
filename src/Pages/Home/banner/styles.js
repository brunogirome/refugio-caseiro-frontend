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
    topnav
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

export const ButtonContainer = styled.div`
    width: 500px;
    margin-top: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-left: auto;
    margin-right: auto;
`; 

export const GuideSection = styled.div`
    width: 100%;
    height: 150px;
    line-height: 150px;
    background-color: var(--bg-black);
    display: flex;
    justify-content: center;
    color: var(--light-1);
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;

    div {
        width: 900px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        button {
            vertical-align: middle;
        }
    }
`;