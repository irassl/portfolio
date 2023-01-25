import React from 'react';
import style from './Button.module.scss'

type ButtonType = {
    text: string
}
export const Button = (props: ButtonType) => {
    return (
        <div>
            <a href='' className={style.btn}>{props.text}</a>
        </div>
    );
};

