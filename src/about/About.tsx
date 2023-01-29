import React from 'react';
import style from './Abount.module.scss'
import {TitleB} from "../common/componentns/titleB/TitleB";

export const About = () => {
    return (
        <div id={'about'}  className={style.aboutBlock}>
            <div className={style.container}>
                {/*<div className={style.title}>*/}
                {/*    <h2 className={style.aboutTitle}>*/}
                {/*        About Me*/}
                {/*    </h2>*/}
                {/*    <p className={style.aboutTitleBg}>*/}
                {/*        Know Me More*/}
                {/*        <span className={style.headingSeparatorLine}/>*/}
                {/*    </p>*/}
                {/*</div>*/}
                <TitleB title={' Know Me More'} bgTitle={' About Me'}/>
                <div className={style.content}>
                    <div className={style.aboutMe}>
                        <h2>
                            I'm <span>Rasul Rizvanov,</span> a Web
                            Developer
                        </h2>
                        <p className={"text-white-50"}>
                            I help you build brand for your business at an affordable price.
                            Thousands of clients have procured exceptional results while
                            working with our dedicated team. when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p className={"text-white-50"}>
                            Delivering work within time and budget which meets client’s
                            requirements is our moto. Lorem Ipsum has been the industry's
                            standard dummy text ever when an unknown printer took a galley.
                        </p>
                    </div>
                    <div className={style.personal}>
                        <div className={style.personalDetail}>
                            <ul>
                                <li>
                                    <span >Name:</span>Rasul Rizvanov
                                </li>
                                <li>
                                    <span >Email:</span>
                                    <a href="mailto:4ybk123@gmail.com">4ybk123@gmail.com</a>
                                </li>
                                <li>
                                    <span>Age:</span>32
                                </li>
                                <li className="border-0">
                                    <span className="fw-600 me-2">From:</span>Ufa, Baskortostan
                                </li>
                            </ul>
                            <a
                                href={'resumeFile'}
                                download
                                className={style.btn}
                            >
                                Download CV
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};
