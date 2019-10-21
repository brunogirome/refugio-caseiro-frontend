import React from 'react';

import CardSpecialFood from '../../../Components/CardSpecialFood/index';

import { ReactComponent as Stove } from '../../../Assets/stove.svg';
import BackgroundCard from '../../../Assets/bg-card-special.png';

import { Container, DarkGlass, Tittle,
        TextStove, Text, ContainerCards } from './styles';

const special = () => {
    return (
        <Container>
            <DarkGlass>
                <Tittle>
                    Especiais do Dia
                    <span>
                        Pratos especiais disponíveis hoje
                    </span>
                </Tittle>
                <TextStove>
                    <Text>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </Text>
                    <Stove />
                </TextStove>
                <ContainerCards>
                    <CardSpecialFood image={BackgroundCard} name='Yakisoba'/>
                    <CardSpecialFood image={BackgroundCard} name='Yakisoba'/>                    
                    <CardSpecialFood image={BackgroundCard} name='Yakisoba'/>                    
                </ContainerCards>
            </DarkGlass>
        </Container>
    );
}

export default special;