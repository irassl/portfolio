import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/componentns/title/Titile";
import todoImage from '../assets/image/todolist.png'


export const Projects = () => {
    const social ={
        backgroundImage: 'url(' + todoImage +')'
    }

    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Мои работы'}/>
                <div className={style.projects}>
                    <Project title={'Social network'} description={'some'} style={social}/>
                    <Project title={'Todo list'} description={'some'} style={social}/>
                </div>

            </div>
        </div>

    );
}