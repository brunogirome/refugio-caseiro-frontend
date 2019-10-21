import styled from 'styled-components';

export const Container = styled.div`
    height: ${props => props.containerHeight};
    display: flex;
    flex-direction: row;
    justify-content: right;
    font-size: props;
    font-size: ${props => props.fontSize}
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.color};
    margin-right: ${props => props.marginRight};
    svg {
        width: ${props => props.svgWidth};
        fill: ${props => props.color};
    }
`;
