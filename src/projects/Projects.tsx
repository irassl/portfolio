import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/componentns/title/Titile";


export const Projects = () => {
    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Мои работы'}/>
                <div className={style.projects}>
                    <Project title={'Social network'} description={'some'}/>
                    <Project title={'Todo list'} description={'some'}/>
                </div>

            </div>
        </div>

    );
}