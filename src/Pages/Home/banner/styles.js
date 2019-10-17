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
`;
