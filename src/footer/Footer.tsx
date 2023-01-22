import React from "react";
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${style.footerContainer}  ${styleContainer.container}`}>
                <h2 className={style.title}> Контакты</h2>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                </div>
                <span className={style.copyright}> 2022 Все права защищены</span>
            </div>
        </div>
    )
}