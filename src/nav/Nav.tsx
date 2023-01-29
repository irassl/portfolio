import React, {useState} from 'react';
import style from './Nav.module.scss';
import {Link} from "react-scroll";


export const Nav = () => {
    const [stickyHeader, setStickyHeader] = useState(false);
    const checkScrollTop = () => {
        let header = document.getElementsByClassName("nav");

        if (header) {
            if (
                document.body.scrollTop > 180 ||
                document.documentElement.scrollTop > 180
            ) {
                setStickyHeader(true);
            } else {
                setStickyHeader(false);
            }
        }
    };

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