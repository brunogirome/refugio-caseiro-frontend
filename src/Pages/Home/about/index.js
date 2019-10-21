import React from 'react';

import Photo from '../../../Assets/chefs.jpg';
import CellFrame from '../../../Assets/cellphone-frame.png';

import SocialMedia from '../../../Components/SocialMedia/index';
import MobileButton from '../../../Components/MobileButton/index';

import { Container, Content, TextContent, 
    ContainerImage, MainText, BrickWall, 
    Tittle, ContainerApp, AppText, 
    ContainerButton, ContentApp, ContainerPhone } from './styles';

const about = () =>
    <>
        <Container>
            <BrickWall />
            <Content>
                <ContainerImage>
                    <img src={Photo} alt='Chefs da Refúgio' />
                </ContainerImage>
                <TextContent>
                    <MainText>
                        <div>
                            <Tittle>Nossa Cozinha</Tittle>
                        </div>
                        <div>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                        </div>
                        <SocialMedia size={1} />
                    </MainText>
                </TextContent>
            </Content>
        </Container>
        <ContainerApp>
            <ContentApp>
                <AppText>
                    <Tittle>
                        Baixe o App:
                    </Tittle>
                    <div>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </div>
                </AppText>
                <ContainerButton>
                    <MobileButton type={1}/>
                    <MobileButton type={2}/>
                </ContainerButton>
                <ContainerPhone src={CellFrame}/> 
            </ContentApp>
        </ContainerApp>
    </>;

export default about;
