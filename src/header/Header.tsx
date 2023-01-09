import React from 'react';
import { Nav } from '../nav/Nav';
import style from './Header.module.css';

export function Header() {
    return (
        <div className={style.header}>
            <Nav/>

        </div>
    );
}


