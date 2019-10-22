import React from 'react';

import Android from '../../Assets/android-frame.png';
import Apple from '../../Assets/apple-frame.png';

import { Container } from './styles';

const MobileButton = ({ type }) => {
    const Type = type === 1 ? Android : Apple;
    const Label = type === 1 ? 'Android' : 'iPhone';

    return (
        <Container>
            {Label}
            <div>
                <img src={Type} alt ='PhoneLogo' />
            </div>
        </Container>
    );
}

export default MobileButton;
