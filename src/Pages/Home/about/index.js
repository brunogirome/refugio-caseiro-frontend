import React from 'react';

import Photo from '../../../Assets/chef.jpg';

import { Container, Content, TextContent, ContainerImage, MainText} from './styles';

const about = () =>
    <Container>
        <Content>
            <ContainerImage>
                <img src ={Photo}/>
            </ContainerImage>
            <TextContent>
                <MainText>
                    <div>
                        <h1>Nossa Cozinha</h1>
                    </div>
                    <div>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                    </div>
                    <div>
                        Social Media
                    </div>
                </MainText>
            </TextContent>
        </Content>
    </Container>;

export default about;
