import React from 'react';

import { ReactComponent as Instagram } from '../../Assets/instagram.svg';
import { ReactComponent as Facebook } from '../../Assets/facebook.svg';
import { ReactComponent as Twitter } from '../../Assets/twitter.svg';
import { ReactComponent as YouTube } from '../../Assets/youtube.svg';

import { Container, ButtonContainer } from './styles';

const SocialMedia = ({ size }) => {

    const SvgWidth = size === 1 ? '48px' : '22px';
    const FontSize = size === 1 ? '18px' : '9px';
    const ContainerHeight = size === 1 ? '75px' : '35px';
    const MarginRight = size === 1 ? '30px' : '12px';

    return (
        <Container containerHeight={ContainerHeight} fontSize={FontSize}>
            <ButtonContainer svgWidth={SvgWidth} color='#4F4F4F' marginRight={MarginRight}>
                <Instagram />
                Instagram 
            </ButtonContainer>
            <ButtonContainer svgWidth={SvgWidth} color='#2F80ED' marginRight={MarginRight}>
                <Facebook />
                Facebook
            </ButtonContainer>
            <ButtonContainer svgWidth={SvgWidth} color='#56CCF2' marginRight={MarginRight}>
                <Twitter />
                Twitter
            </ButtonContainer>
            <ButtonContainer svgWidth={SvgWidth} color='#EB5757' marginRight={MarginRight}>
                <YouTube />
                Youtube
            </ButtonContainer>
        </Container>
    );
}

export default SocialMedia;
