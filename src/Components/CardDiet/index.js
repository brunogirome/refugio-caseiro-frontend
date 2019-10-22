import React from 'react';

import Common from '../../Assets/diet-common.png'
import Fitness from '../../Assets/diet-fitness.png'
import Vegan from '../../Assets/diet-vegan.png';

import { Container, Content, Tittle } from './styles';

const CardDiet = ({ type }) => {
    
    let Attributes = { color: null, image: null, tittle: null, sub: null };

    switch (type) {
        case 1:
            Attributes.color = '#9E8376';
            Attributes.image = Common;
            Attributes.tittle = 'Comum';
            Attributes.sub = 'Para aqueles que comem de tudo!';
            break;
        case 2:
            Attributes.color = '#DDC700';
            Attributes.image = Fitness;
            Attributes.tittle = 'Fitness';
            Attributes.sub = 'Baixa calorias e dieta equilibrada.';
            break;
        case 3:
            Attributes.color = '#6ED178';
            Attributes.image = Vegan;
            Attributes.tittle = 'Vegana';
            Attributes.sub = 'Apenas Verde! Sem origem animal.';
            break;
        default:
            break;
    }

    const { color, image, tittle, sub } = Attributes;

    return (
        <Container image={image} >
            <Content>
                <Tittle color={color} >
                    <h1>
                        {tittle}
                    </h1>
                    <span>
                        {sub}
                    </span>
                </Tittle>
            </Content>
        </Container>
    );
}

export default CardDiet;
