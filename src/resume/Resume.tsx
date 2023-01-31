import React from 'react';
import style from './Resume.module.scss'
import {TitleB} from "../common/componentns/titleB/TitleB";
import {ResumeContent} from "./ResumeColumn/ResumeContent";

export const Resume = () => {
    return (
        <section id={'resume'} className={style.section}>
            <div className={style.container}>
                <TitleB title={'Resume'} bgTitle={'Summary'}/>
                <div className={style.content}>

                    <ResumeContent title={' My Education'}/>


                    <ResumeContent title={' My Experience'}/>


                </div>

            </div>

        </section>
    );
};
