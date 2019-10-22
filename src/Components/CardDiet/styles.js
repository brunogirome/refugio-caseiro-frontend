import styled from 'styled-components';

export const Container = styled.div`
    width: 230px;
    height: 330px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    border-radius: 20px;
    display: flex;
    flex-direction: column-reverse;
`;

export const Content = styled.div`
    width: 230px;
    height: 120px;
    background-color: var(--light-1);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Tittle = styled.div`

    margin-bottom: 20px;

    h1 {
        color: ${props => props.color };
        text-transform: uppercase;
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 9px;
    }
    span{
        font-size: 13px;
        color: #797A7C;
    }
`;