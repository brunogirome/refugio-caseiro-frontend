import React from 'react';

import CardDiet from '../../../Components/CardDiet/index.js';

import { Container, Tittle, Text, ContainerCards} from './styles';

const diet = () => 
    <Container>
        <Tittle>
            <h1>
                Escolha de acordo com a sua <span>dieta</span>
            </h1>
            <div>
                Diversas opções filtradas para você montar seu prato
            </div>
        </Tittle>
        <Text>
            It is a long established fact th    at a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </Text>
        <ContainerCards>
            <CardDiet type={1}/>
            <CardDiet type={2}/>
            <CardDiet type={3}/>
        </ContainerCards>
    </Container>;

export default diet;

