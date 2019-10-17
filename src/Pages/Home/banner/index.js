import React from 'react';

import TopNav from './topNav/index';

import { Container, DarkGlass, Tittle } from './styles';

const banner = () => {
    return (
      <Container>
        <DarkGlass>
            <div>
                <TopNav />
            </div>
            <Tittle>
                Monte a sua marmita fitness
                <span>
                    Confira as calorias na hora de montar seu prato
                </span>
            </Tittle>
        </DarkGlass>
      </Container>  
    );
};

export default banner;
