import React from 'react';
import style from './Footer.module.scss';
import {Link} from "react-scroll";

export const FooterNew = () => {
    return (
        <footer id='footer' className={style.selector}>
            <div className={style.containerFooter}>
                <div className={style.content}>
                    <div className={style.contentCopyright}>
                        <p>
                            Copyright © 2023{" "}
                            <Link to='home'
                                  smooth={true}
                                  spy={true}
                                  duration={2000}
                                  offset={-80}
                                  activeClass={'active'}
                            >Rasul</Link>
                            . All Rights Reserved.
                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );
};
