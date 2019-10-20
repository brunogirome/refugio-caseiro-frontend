import React from 'react';

import { Container, NavContainer, NavSection } from './styles';

import { ReactComponent as Logo } from '../../../../Assets/refugio-logo.svg';

const topNav = () =>
    <Container>
        <Logo />
        <NavContainer>
            <NavSection><span>Home</span></NavSection>
            <NavSection>Cardápio</NavSection>
            <NavSection>Como Pedir</NavSection>
            <NavSection>Sobre Nós</NavSection>
            <NavSection>Unidades</NavSection>
            <NavSection>Contato</NavSection>
        </NavContainer>
    </Container>;

export default topNav;
