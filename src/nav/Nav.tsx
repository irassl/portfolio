import React, {useState} from 'react';
import style from './Nav.module.scss';
import {Link} from "react-scroll";


export const Nav = () => {
    return (
        <nav className={style.nav}>
            <a href=''>Главное</a>
            <a href=''>Скилы</a>
            {/*<a href='#projects'>Projects</a>*/}
            <Link to='projects'
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-80}
                  activeClass={'active'}
            >Projects</Link>
            <a href=''>Контакты</a>
        </nav>
    );
}