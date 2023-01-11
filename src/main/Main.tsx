import React from "react";
import style from "./Main.module.css";

export const Main =()=> {
    return (
        <div className={style.mainBlock}>
            <div className={style.text}></div>
            <span>He There</span>
            <h1> I Am Rasul </h1>
            <p> hello</p>
            <div className={style.photo}></div>

        </div>
    );
}