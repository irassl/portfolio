import React from 'react';
import style from './Services.module.scss'
import {TitleB} from "../../common/componentns/titleB/TitleB";
import {Service} from "./Service/Service";

import {services} from "./ServicesData";

export const Services = () => {
    return (
        <section id='services' className={style.bgDark}>
            <div className={style.container}>
                <TitleB title={'What I Do?'} bgTitle={'Services'}/>
                <div className={style.content}>
                    <div className={style.contentCol}>
                        <div className={style.contentBox}>
                            {services.length > 0 && services.map((service,index)=>(
                                <Service key={index} icon={service.icon} name={service.name} desc={service.desc}/>
                            ))}

                    </div>
                    </div>
                </div>

            </div>

        </section>
    );
};
