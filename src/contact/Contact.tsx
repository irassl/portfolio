import React from 'react';
import style from './Contact.module.scss'
import {TitleB} from "../common/componentns/titleB/TitleB";
import { IoIosCall } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
export const Contact = () => {
    return (
        <section id={'contact'} className={style.selector}>
            <div className={style.container}>
                <TitleB title={'Get in Touch'} bgTitle={'Contact'}/>
                <div className={style.content}>
                    <div className={style.contentDetail}>
                        <h2>
                            Address
                        </h2>
                        <p className={style.contentDetailAddress}>
                            4th Floor, Plot No.22,
                            <br/>
                            145 Murphy Canyon Rd.
                            <br/>
                            San Diego CA 2028
                        </p>
                        <p className={"text-3 mb-1 "}>
              <span className="text-primary text-4 me-2">
                {/*<i className="fas fa-phone"/>*/}
                  <IoIosCall/>
              {/*    BsTelephone*/}
              </span>
                            (060) 444 434 444
                        </p>
                        <p className={"text-3 mb-1 "}>
              <span className="text-primary text-4 me-2">
                {/*  BsTelegram*/}
                {/*<i className="fas fa-fax"/>*/}
                  <BsTelegram/>
              </span>
                            (060) 555 545 555
                        </p>
                        <p className={style.contentDetailAddress}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-envelope"/>
              {/*    FaEnvelope*/}
                  <FaEnvelope/>
              </span>
                            chat@simone.com
                        </p>
                        <h2
                            className={
                                "mb-3 text-5 text-uppercase "
                            }
                        >
                            Follow Me
                        </h2>

                    </div>
                    <div className={style.contentForm}>
                        <h2
                            className={
                                "mb-3 text-5 text-uppercase text-center text-md-start "
                            }
                        >
                            Send us a note
                        </h2>


                    </div>

                </div>
            </div>

        </section>
    );
};
