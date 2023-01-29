import React from 'react';
import style from './Services.module.scss'
import {TitleB} from "../common/componentns/titleB/TitleB";
import {Service} from "./Service/Service";
import {FaPalette} from 'react-icons/fa';

export const Services = () => {
    return (
        <section id='services' className={style.bgDark}>
            <div className={style.container}>
                <TitleB title={'What I Do?'} bgTitle={'Services'}/>
                <div className={style.content}>
                    <div className={style.contentCol}>
                        <div className={style.contentBox}>
                        <Service name={'Graphic Design'}
                                 desc={"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."}>
                            <FaPalette/>
                        </Service>
                        <Service name={'Graphic Design'}
                                 desc={"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."}>
                            <FaPalette/>
                        </Service>
                        <Service name={'Graphic Design'} desc={"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."}>
                            <FaPalette/>
                        </Service>
                        <Service name={'Graphic Design'} desc={"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."}>
                            <FaPalette/>
                        </Service>



                    </div>
                    </div>
                </div>

            </div>

        </section>
    );
};
