import React from 'react';

import Social from '../../Components/SocialMedia/index';

import { ReactComponent as Logo } from '../../Assets/refugio-logo.svg';
import { ReactComponent as WhatsApp } from '../../Assets/whatsapp.svg';
import { ReactComponent as GitLogo } from '../../Assets/git-logo.svg';

import {
    Container, Content, Navegation,
    Text, Contact, ContainerNav,
    Grey1, Grey2, Green, GitHub
} from './styles';

const Footer = () =>
    <Container>
        <Content>
            <Logo />
            <Text>
                <ContainerNav>
                    <h1>Navegação</h1>
                    <Navegation>
                        <div>
                            <ul>
                                <li>
                                    <h2>Home</h2>
                                </li>
                                <li>
                                    <h2>Cardápio</h2>
                                    <li>
                                        Pratos prontos
                                </li>
                                    <li>
                                        Self Service
                                </li>
                                </li>
                                <li>
                                    <h2>Como Pedir</h2>
                                    <li>
                                        Guia do Site
                                </li>
                                    <li>
                                        Aplicativo
                                </li>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <h2>Sobre Nós</h2>
                                    <li>
                                        Cozinheiros
                                </li>
                                    <li>
                                        Restaurante
                                </li>
                                </li>
                                <li>
                                    <h2>Unidades</h2>
                                </li>
                                <li>
                                    <h2>Contato</h2>
                                </li>
                            </ul>
                        </div>
                    </Navegation>
                </ContainerNav>
                <Contact>
                    <section>
                        <Grey1>
                            Av. Paulista, 09321-321, N 666 - São Paulo SP
                        </Grey1>
                        <Grey2>
                            (11) 2425-9965 - (11) 2425-9966
                        </Grey2>
                        <Green>
                            <WhatsApp />
                            (11) 90800-1514
                        </Green>
                    </section>
                    <section>
                        <Grey1>
                            Rua Luis Messias Fernando, 09321-321, N 666 - Campinas SP
                        </Grey1>
                        <Grey2>
                            (11) 2425-9965 - (11) 2425-9966
                        </Grey2>
                        <Green>
                            <WhatsApp />
                            (11) 90800-1514
                        </Green>
                    </section>
                    <Social size={2} />
                </Contact>
            </Text>
        </Content>
        <GitHub>
            <GitLogo />
            github.com/brunogirome/refugio-caseiro-frontend
        </GitHub>
    </Container>;

export default Footer;
