import React from 'react';
import style from './ResumeContent.module.scss'
type ResumeContentType={
    title: string
}
export const ResumeContent = (props:ResumeContentType) => {
    return (
        <div className={style.colEducation}>
            <h2>
                {props.title}
            </h2>
        <div className={style.content}>
            <p className={style.badge}>
                2000 - 2004
            </p>
            <h3>
                Computer Science
            </h3>
            <p className={style.place}>
                International University
            </p>
            <p className={style.desc}>
                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.

            </p>

        </div>
            <div className={style.content}>
                <p className={style.badge}>
                    2000 - 2004
                </p>
                <h3>
                    Computer Science
                </h3>
                <p className={style.place}>
                    International University
                </p>
                <p className={style.desc}>
                    Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.

                </p>

            </div>
            <div className={style.content}>
                <p className={style.badge}>
                    2000 - 2004
                </p>
                <h3>
                    Computer Science
                </h3>
                <p className={style.place}>
                    International University
                </p>
                <p className={style.desc}>
                    Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.

                </p>

            </div>
        </div>
    );
};
