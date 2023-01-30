import React from 'react';
import style from './Service.module.scss'

import {IconContext} from 'react-icons';

type ServiceType = {
    children: React.ReactNode,
    name: string,
    desc: string
}

export const Service = ({children, name, desc}: ServiceType) => {

    return (

        <div className={style.contentService}>
            <div className={style.boxService}>
                <div className={style.featureBox}>
                    {/*<i className={'fas fa-palette'}/>*/}
                    <IconContext.Provider value={{size: '36'}}>
                        {children}
                    </IconContext.Provider>

                </div>
                <h3>
                    {name}
                </h3>
                <p>
                    {desc}
                </p>
            </div>

        </div>

    );
};
