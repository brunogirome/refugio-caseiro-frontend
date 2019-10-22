import styled from 'styled-components';

import Texture from '../../../Assets/bg-cardboard.png';

export const Container = styled.div`
    width: 100%;
    height: 660px;
    background-color: var(--light-1);
    background-image: url(${Texture});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--light-2);
`;

export const Tittle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 36px;
        font-weight: bold;
        text-transform: uppercase;

        span {
            color: var(--text-green);
        }
    }
    div {
        font-size: 18px;
    }
`;

export const Text = styled.div`
    width: 450px;
    height: 150px;
    display: flex;
    align-items: center;
`;

export const ContainerCards = styled.div`
    width: 930px;
    height: 330px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;