import React from 'react';

import { Container } from './styles';

const RoundButton = ({children, bgColor = 'var(--bg-black)', txtColor = 'var(--light-1)'}) => 
    <Container bgColor = {bgColor} txtColor = {txtColor}>
        {children}
    </Container>;
export default RoundButton;
