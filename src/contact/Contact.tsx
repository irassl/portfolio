import React, {useRef, useState} from 'react';
import style from './Contact.module.scss'
import {TitleB} from "../common/componentns/titleB/TitleB";
import {IoIosCall} from "react-icons/io";
import {BsTelegram} from "react-icons/bs";
import {FaEnvelope} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const ref = useRef<HTMLFormElement>(null);
    const [sendingMail, setSendingMail] = useState(false);

    const sendEmail = (e: any) => {
        e.preventDefault();
        setSendingMail(true);

    }
    // @ts-ignore
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
                        <p className={style.contentDetailText}>
                            <span  className={style.contentDetailIcon}>
                                <IoIosCall  />
                            </span>
                            (060) 444 434 444
                        </p>
                        <p className={style.contentDetailText}>
                            <span className={style.contentDetailIcon}>
                                  <BsTelegram />
                            </span>
                            (060) 555 545 555
                        </p>
                        <p className={style.contentDetailAddress}>
                            <span className={style.contentDetailIcon}>
                                <FaEnvelope />
                            </span>
                            rassl.ried@icloud.com
                        </p>
                        <h2>
                            Follow Me
                        </h2>
                    </div>
                    <div className={style.contentForm}>
                        <h2>
                            Send us a note
                        </h2>
                        <form className={style.form} id="contact-form" ref={ref} onSubmit={sendEmail}>
                            <div className={style.formRow}>
                                <div className={style.formColm}>
                                    <input
                                        name="user_name"
                                        type="text"
                                        className={style.formControl}
                                        required
                                        placeholder="Name"
                                    />
                                </div>
                                <div className={style.formColm}>
                                    <input
                                        name="user_email"
                                        type="email"
                                        className={style.formControl}
                                        required
                                        placeholder="Email"
                                    />
                                </div>
                                <div className={style.formTextArea}>
                                     <textarea
                                         name="message"
                                         className={style.formControl}
                                         rows={5}
                                         required
                                         placeholder="Tell us more about your needs........"
                                         defaultValue={""}
                                     />
                                </div>
                                <p className={style.fromButtonText}>
                                    <button
                                        id="submit-btn"
                                        // className="btn btn-primary rounded-pill d-inline-flex"
                                        className={style.formButton}
                                        type="submit"
                                    >
                                        {sendingMail ? (
                                            <>
                                                <span
                                                    role="status"
                                                    aria-hidden="true"// class="spinner-border spinner-border-sm align-self-center me-2"
                                                ></span>
                                                Sending.....
                                            </>) : (<>Send Message</>)}
                                    </button>
                                </p>

                            </div>

                        </form>


                    </div>

                </div>
            </div>

        </section>
    );
};
