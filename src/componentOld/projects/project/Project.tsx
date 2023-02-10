import React from 'react';
import style from './Project.module.scss';

type ProjectType = {
    title: string,
    description: string,
    style: any
}

export const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <div className={style.viewBtn}>Show</div>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}> {props.title}</h3>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}