import React from 'react';
import style from "../../../components/contact/Contact.module.scss";

export const SocialIcons = () => {
    return (
        <ul className={style.socialIcons}>
            <li>
                <a
                    href="https://t.me/mistline"
                    target="_blank"
                >
                    <i className="fa-brands fa-telegram" />
                </a>
            </li>
            <li>
                <a href="https://github.com/irassl" target="_blank">
                    <i className="fab fa-github" />
                </a>

            </li>
            <li>
                <a href="https://linkedin.com" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                </a>

            </li>
        </ul>
    );
};

