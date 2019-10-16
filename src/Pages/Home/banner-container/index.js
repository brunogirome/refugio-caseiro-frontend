import React from 'react';

import TopNav from './logo-top-nav/index';

import style from './style.module.css';


function BannerContainer({ Tittle }) {
    return (
        <div className={style.container}>
            <div className={style.banner} />
            <div className={style.blackGlass}>
                <div className={style.tittle}>
                    {Tittle}
                </div>
            </div>
        </div>
    );
}

export default BannerContainer;