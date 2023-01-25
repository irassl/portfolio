import React from "react";
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/componentns/title/Titile";

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <Title title={'Contacts'}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>
                        <a href=''>

                        </a>
                    </div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                </div>
                <span className={style.copyright}> 2023 Все права защищены</span>
            </div>
        </div>
    )
}