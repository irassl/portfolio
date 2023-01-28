import React from 'react';
import style from './Home.module.scss'

import intro from "../assets/image/intro-bg.jpg";
import Typewriter from "typewriter-effect";
import {Link} from "react-scroll";
import {ChevronDownIcon} from "@primer/octicons-react";

export const Home = () => {
    const social = {
        backgroundImage: 'url(' + intro + ')'
    }
    return (
        <section className={style.section} id='home'>
            <div className={style.homeWrap}>
                <div className={style.homeMask}/>
                <div className={style.homeBg} style={social}
                ></div>
                <div className={style.homeContent}>
                    <div className={style.homeContainer}>
                        <div className={style.homeRow}>
                            <div className={style.column}>
                                <p className={style.contentWelcome}>Welcome</p>
                                <h2 className={style.contentName}>
                                    <Typewriter
                                        options={{
                                            strings: [

                                                "I'm a Designer.",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h2>
                                <p className={style.contentLocation}>
                                    based in Los Angeles, California.
                                </p>
                                <Link
                                    // to="contacts"
                                    to=""
                                    smooth={true}
                                    spy={true}
                                    duration={500}
                                    offset={-80}
                                    activeClass={'active'}
                                    className={style.btnContact}
                                    onClick={() => {
                                        // e.preventDefault();
                                        // handleNavClick("contact");
                                    }}
                                >
                                    Hire Me
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>
                <a
                    href={'#about'}
                    className={style.scrollDownArrow}
                    onClick={() => {
                    }}
                >

            <span className={style.animated}>
                <ChevronDownIcon size={24}/>

            </span>
                </a>

            </div>

        </section>
    );
};
