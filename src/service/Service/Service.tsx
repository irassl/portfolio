import React from 'react';
import style from './Service.module.scss'


type ServiceType = {
    icon: string,
    name: string,
    desc: string,

}

export const Service = ({name, desc,icon}: ServiceType) => {

    return (

        <div className={style.contentService} >
            <div className={style.boxService}>
                <div className={style.featureBox}>
                    <i className={icon}/>
                    {/*<IconContext.Provider value={{size: '36'}}>*/}
                    {/*    {children}*/}
                    {/*</IconContext.Provider>*/}

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
