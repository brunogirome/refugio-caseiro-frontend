import React from 'react';

import { Container, Content, GreenText } from './styles';

import { ReactComponent as WhatsApp } from '../../../Assets/whatsapp.svg';

const blackNav = () =>
    (
        <Container>
            <Content>
                <div>
                    Dúvidas pelo WhatsApp
                    <GreenText>
                        <WhatsApp />
                        (11) 98989-2424
                    </GreenText>
                </div>
                <div>
                    Já sou cadastrado
                <GreenText>
                        Cadastrar
                </GreenText>
                </div>
            </Content>
        </Container>
    );

export default blackNav;
