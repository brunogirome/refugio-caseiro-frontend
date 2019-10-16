import React from 'react';

import TopNav from './logo-top-nav/index';

import './style.css';


function BannerContainer({ Tittle }) {
    return (
        <div className='container-banner'>
            <div className='banner-img' />
            <div className='black-glass'>
                <div className='tittle'>
                    {Tittle}
                </div>
            </div>
        </div>
    );
}

export default BannerContainer;