import React from 'react';

import { Container } from './styles';

const RoundButton = ({children, bgColor = 'var(--bg-black)', txtColor = 'var(--light-1)', hover = 'var(--text-grey)'}) => 
    <Container bgColor = {bgColor} txtColor = {txtColor} hover = {hover}>
        {children}
    </Container>;
export default RoundButton;
