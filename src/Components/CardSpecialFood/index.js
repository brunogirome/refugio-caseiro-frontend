import React from 'react';

import { ReactComponent as Star } from '../../Assets/star.svg'

import { Container, LabelName, ContainerStar } from './styles';

const CardSpecialFood = ({ image, name }) =>
    <Container background={image}>
        <ContainerStar>
            <Star />
        </ContainerStar>
        <LabelName>
            {name}
        </LabelName>
    </Container>;


export default CardSpecialFood;
