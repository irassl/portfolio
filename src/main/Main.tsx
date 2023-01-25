import React from "react";
import style from "./Main.module.scss";

import Typewriter from "typewriter-effect";
import intro from "../assets/image/intro-bg.jpg";

export const Main = () => {
    //parallax
    const social = {
        backgroundImage: 'url(' + intro + ')',
        opacity: 0.5,

    }
    return (
        <div className={style.mainBlock}>

            <div className={style.container}  >
                <div className={style.greeting}>
                    <span>He There</span>
                    <Typewriter

                        options={{
                            strings: [
                                "I'm Rasul Rizvanov.",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <h1> Frontend Developer.</h1>
                </div>
            </div>
                <div className={style.photo}>

                </div>

        </div>
    );
}