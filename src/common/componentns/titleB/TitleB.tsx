import React from 'react';
import style from './TitleB.module.scss'

type TitleBType={
    title:string,
    bgTitle:string
}

export const TitleB = ( props: TitleBType) => {
    return (
        <div className={style.title}>
            <h2 className={style.aboutTitle}>
                {props.bgTitle}
            </h2>
            <p className={style.aboutTitleBg}>
                {props.title}
                <span className={style.headingSeparatorLine}/>
            </p>
        </div>
    );
};

