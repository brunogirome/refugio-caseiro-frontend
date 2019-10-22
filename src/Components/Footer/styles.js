import styled from 'styled-components';

let grey1 = '#828282';
let grey2 = '#BDBDBD';

export const Container = styled.div`
    width: 100%;
    height: 290px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-black);
`;

export const Content = styled.div`
    width: 900px;
    height: min-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Text = styled.div`
    width: 720px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContainerNav = styled.div`
    color: var(--light-1);

    h1 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 7px; 
    }
    
`;

export const Navegation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h2 {
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        margin-top: 7px;
    }    

    div {
        margin-right: 20px;
    }
`;

export const Contact = styled.div`
    section {
        margin-bottom: 15px;
    }
`;

export const Grey1 = styled.div`
    color: ${grey1};
    font-weight: 100;
`;

export const Grey2 = styled.div`
    color: ${grey2};
    font-weight: 100;
`;

export const Green = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    color: var(--text-green);
    font-weight: bold;

    svg {
        margin-right: 5px;
        width: 16px;
        height: 16px;
        fill: var(--text-green);
    }
`;

export const GitHub = styled.div`
    margin-top: 20px;
    font-size: 12px;
    color: ${grey1};
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        margin-right: 10px;
    }
`; 