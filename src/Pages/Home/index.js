import React from 'react';
import BlackNav from './black-nav/index';
import BannerContainer from './banner-container/index';

const Home = () => {
    return (
        <div>
            <BlackNav />
            <BannerContainer Tittle='Monte a sua marmita fitness'/>
            <h1>
                Home container.
            </h1>
        </div>
    );
}

export default Home;