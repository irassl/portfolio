import React from 'react';
import { Nav } from '../nav/Nav';
import style from './Header.module.scss';

export function Header() {
    //burgerNav 1:40
    return (
        <header className={style.header}>

            <Nav/>

        </header>
    );
}


