import React from 'react';
import style from './style.module.css';

const BlackNav = () => (
    <div className={style.bg}>
        <div className={style.container}>
            <div className={style.left}>
                    Dúvidas no WhatsAPP
                <div className={style.greenText}>
                    (11) 98787-1021
                </div>
            </div>
            <div className={style.right}>
                    Já sou Cadastrado
                <div className={style.greenText}>
                    Cadastrar
                </div>
            </div>
        </div>
    </div>
);

export default BlackNav;