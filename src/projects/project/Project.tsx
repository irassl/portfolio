import React from 'react';
import style from './Project.module.css';

type ProjectType = {
    title: string,
    description: string
}

export const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <div className={style.viewBtn}>Show</div>
            </div>
            <h3 className={style.projectTitle}> {props.title}</h3>
            <div className={style.description}>{props.description}</div>

        </div>
    );
}