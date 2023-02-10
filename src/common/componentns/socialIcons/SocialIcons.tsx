import React from 'react';
import style from "../../../components/contact/Contact.module.scss";

export const SocialIcons = () => {
    return (
        <ul className={style.socialIcons}>
            <li>
                <a
                    href="https://t.me/mistline"
                   rel="noopener"
                >
                    <i className="fa-brands fa-telegram" />
                </a>
            </li>
            <li>
                <a href="https://github.com/irassl" rel="noopener" >
                    <i className="fab fa-github" />
                </a>

            </li>
            <li>
                <a href="https://linkedin.com" rel="noopener">
                    <i className="fa-brands fa-linkedin"></i>
                </a>

            </li>
        </ul>
    );
};

