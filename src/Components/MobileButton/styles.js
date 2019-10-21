import styled from 'styled-components';

export const Container = styled.button`
    background-color: var(--bg-black);
    width: 200px;
    height: 50px;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    color: #fafafa;
    display: flex;
    flex-direction: row;
    //align-items: center;
    justify-content: space-between;
    padding: 16px;
    margin-top: 10px;

    div{
        display: flex;
        align-items: flex-end;
        margin-bottom: -16px;
    }

    img {
        width: 60px;
        height: 40px;
        object-fit: cover;
    }
`;
