import React from 'react';
import style from './Portfolio.module.scss'
import {AnimatePresence} from "framer-motion";
import {TitleB} from "../common/componentns/titleB/TitleB";

export const Portfolio = () => {
    return (
        <section id="portfolio" className={style.section}>
            <div className={style.container}>
             <TitleB title={'My Work'} bgTitle={'Portfolio'}/>

            </div>

        </section>
    );
};

