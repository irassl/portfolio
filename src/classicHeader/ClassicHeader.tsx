import React, {useState} from 'react';
import style from 'ClassicHeader.module.scss'

export const ClassicHeader = () => {
    const [isNavModalClose, setIsNavModalClose] = useState(true);
    return (
        <header id='header' className={style.sticky}>
            <nav className={style.menu}>
                <div className={style.containerFluid}>
                    <div className={style.contentMenu}>

                    </div>

                </div>

            </nav>

        </header>
    );
};
