import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: var(--bg-black);
    display: flex;
    justify-content: center;
    font-size: 14px;
`;

export const Content = styled.div`
    width: 900px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: var(--text-grey);
`;

export const GreenText = styled.span`
    font-weight: bold;
    color: var(--text-green);
    margin-left: 10px;
    text-transform: uppercase;

    svg
    {
        width: 18px;
        height: 18px;
        fill: var(--text-green);
        vertical-align: middle;
        margin-right: 3px;
    }
`;