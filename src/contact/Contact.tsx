import React, {useRef, useState} from 'react';
import style from './Contact.module.scss'
import {TitleB} from "../common/componentns/titleB/TitleB";
import emailjs from "@emailjs/browser";




export const Contact = () => {
    const form = useRef<HTMLFormElement| any>(null);
    const [sendingMail, setSendingMail] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSendingMail(true);
        emailjs
            .sendForm(
                "service_k59m02c",
                "template_v0j7rim",
                form.current,
                "1_WTNQ0sy4I2nsbWN"
            ).then(
            (result) => {

                //e.target.reset();
                // @ts-ignore
                document.getElementById("contact-form").reset();

                console.log(result.text);
                setSendingMail(false);
            },
            (error) => {
                setSendingMail(false);
            }
        )

    }
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
                            city Ufa,
                            <br/>
                            republic of Bashkortostan,
                            <br/>
                            Russia
                        </p>
                        <p className={style.contentDetailText}>
                            <span  className={style.contentDetailIcon}>
                                {/*<IoIosCall  />*/}
                                <i className="fas fa-phone"></i>
                                {/*<FontAwesomeIcon icon="coffee" size="xs" />*/}
                            </span>
                            +7 987 245-90-06
                        </p>
                        <p className={style.contentDetailText}>
                            <span className={style.contentDetailIcon}>
                                <i className="fa-brands fa-telegram"></i>

                                {/*  <BsTelegram />*/}
                            </span>
                            @mistline
                        </p>
                        <p className={style.contentDetailAddress}>
                            <span className={style.contentDetailIcon}>
                                {/*<FaEnvelope />*/}
                                <i className="fa-solid fa-envelope"></i>
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
                        <form className={style.form} id="contact-form" ref={form} onSubmit={sendEmail}>
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
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
