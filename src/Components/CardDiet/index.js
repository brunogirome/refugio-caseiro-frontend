import React from 'react';

import Common from '../../Assets/diet-common.png'
import Fitness from '../../Assets/diet-fitness.png'
import Vegan from '../../Assets/diet-vegan.png';

import { Container, Content, Tittle} from './styles';

const CardDiet = ({ type }) => {

    let color, image, tittle, sub;

    const setAttributes = (c, i, t, s) => {
        color = c;
        image = i;
        tittle = t;
        sub = s;
    }

    switch (type) {
        case 1:
            setAttributes
                (
                    "#9E8376",
                    Common,
                    "Comum",
                    "Para aqueles que comem de tudo!"
                );
            break;
        case 2:
            setAttributes
                (
                    "#DDC700",
                    Fitness,
                    "Fitness",
                    "Baixa calorias e dieta equilibrada."
                );
            break;
        case 3:
            setAttributes
                (
                    "#6ED178",
                    Vegan,
                    "Vegana",
                    "Apenas Verde! Sem origem animal."
                );
            break;
    }

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
