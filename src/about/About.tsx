import React from 'react';
import style from './Abount.module.scss'

export const About = () => {
    return (
        <div className={style.aboutBlock}>
            <div className={style.container}>
                <div className={style.title}>
                    <h2>
                        About Me
                    </h2>
                    <p>
                        Know Me More
                        <span/>
                    </p>
                </div>

            </div>

        </div>
    );
};
