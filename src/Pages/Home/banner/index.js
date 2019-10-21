import React from 'react';

import TopNav from './topNav/index';
import RoundButton from '../../../Components/RoundButton/index';

import { Container, DarkGlass, Tittle, ButtonContainer, GuideSection, TopContainer } from './styles';

const banner = () => {
    return (
        <>
            <Container>
                <DarkGlass>
                    <TopContainer>
                        <TopNav />
                    </TopContainer>
                    <Tittle>
                        Monte a sua marmita fitness
                        <span>
                            Confira as calorias na hora de montar seu prato
                        </span>
                    </Tittle>
                    <ButtonContainer>
                        <RoundButton bgColor='var(--text-green)'>
                            Monte a sua
                        </RoundButton>
                        <RoundButton>
                            Cardápio
                        </RoundButton>
                    </ButtonContainer>
                </DarkGlass>
            </Container>
            <GuideSection>
                <div>
                    Dúvidas em como montar seu prato?
                    <RoundButton bgColor='var(--light-1)' txtColor='var(--bg-black)'>
                        Confira o guia
                    </RoundButton>
                </div>
            </GuideSection>
        </>
    );
};

export default banner;
