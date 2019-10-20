import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 530px;
    background-color: var(--light-1);
`;

export const Text = styled.div`

    color: var(--light-2);
    width: 480px;
    height: 310px;
    background-color: blue;
    
    h1 {
        font-size: 36px;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--text-green);
        background-color: red;
    }

    div {
        background-color: green;
    }
    
`;