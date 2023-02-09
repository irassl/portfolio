import React from 'react';
import style from './ResumeContent.module.scss'
type ResumeContentType={
    yearRange: string,
    title: string,
    place: string,
    desc: string,

}
export const ResumeContent = ({yearRange,title,place,desc}:ResumeContentType) => {
    return (

        <div className={style.content}  >
            <p className={style.badge}>
                {yearRange}
            </p>
            <h3>
                {title}
            </h3>
            <p className={style.place}>
                {place}
            </p>
            <p className={style.desc}>
                {desc}

            </p>

        </div>

    );
};
