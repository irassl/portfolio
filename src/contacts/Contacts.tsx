import React from "react";
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/componentns/title/Titile";
import {Fade} from "react-awesome-reveal";
;


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <Title title={'Get in Touch'}/>
                <Fade direction={"left"}>
                <form className={style.form}>
                    <input type='text' className={style.formArea}/>
                    <input type='text'className={style.formArea}/>
                    <textarea className={style.messageArea}/>
                    <button type='submit' className={style.submitBtn}>Отправить</button>
                </form>
                </Fade>
            </div>
        </div>
    )
}