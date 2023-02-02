import React, {useEffect, useState} from 'react';
import style from './ClassicHeader.module.scss'


export const ClassicHeader = () => {
    const [stickyHeader, setStickyHeader] = useState<boolean>(false);
    const [isNavModalClose, setIsNavModalClose] = useState<boolean>(true);

    const checkScrollTop = () => {
        let header = document.getElementsByClassName('containerFluid');

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
    useEffect(() => {

        window.addEventListener('scroll', checkScrollTop);

        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        }
    }, []);
    console.log(stickyHeader)
    return (
        <header id='header' className={style.sticky}>
            {/*<nav className={style.menu}>*/}
            <nav className={stickyHeader ?  style.containerFixed  :style.menu  }>
                <div className={style.containerFluid}>
                    <div className={style.contentMenu}>
                        <h1>Hello</h1>


                    </div>

                </div>

            </nav>

        </header>
    );
};
