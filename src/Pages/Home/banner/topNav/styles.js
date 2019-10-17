import styled from 'styled-components';

export const Container = styled.div`
    width: 900px;
    height: 100px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between !important;
`;

export const NavContainer = styled.ul`
    font-size: 14px;
`;

export const NavSection = styled.li`
    text-transform: uppercase;
    color: var(--light-1);
    text-align: center;
    font-weight: bold;
    padding-left: 12px;
    padding-right: 12px;
    line-height: 100px;
    transform: scale(1, 0.98);
    display: inline-block;

    span
    {
        color: var(--text-green);
    }
`;

export const Logo = styled.div`
    width: 150px;
    height: 100px;
    background-color: var(--text-green);
`;