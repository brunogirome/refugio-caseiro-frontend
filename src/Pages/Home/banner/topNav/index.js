import React from 'react';

import { Container, NavContainer, NavSection, Logo } from './styles';

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
