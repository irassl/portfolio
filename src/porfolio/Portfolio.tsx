import React, {useState} from 'react';
import style from './Portfolio.module.scss'
import {AnimatePresence} from "framer-motion";
import {TitleB} from "../common/componentns/titleB/TitleB";
import { motion } from "framer-motion"

import {projectsData} from "./ProjectsData";

export const Portfolio = () => {
    const [selectedId, setSelectedId] = useState<string | null> (null)



    return (
        <>
            <section id="portfolio" className={style.section}>
                <div className={style.container}>
                    <TitleB title={'My Work'} bgTitle={'Portfolio'}/>
                    <div className={style.contentNone}>


                    <div className={style.content}>
                        {projectsData.length > 0 &&
                            projectsData.map((project,index)=>(
                                <div key={index}  className={style.project}>
                                 <div className={style.projectBox}>
                                     <div className={style.projectBoxImg}>
                                         <img src={project.thumbImage} className={style.boxImg} />
                                         <div className={style.projectBoxOverlay}>
                                             <a/>
                                             <div className={style.projectBoxOverlayDetails}>
                                                 <h5>{project.title}</h5>
                                                 <span> Category</span>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                </div>
                            ))
                        }

                    </div>
                    </div>
                </div>

            </section>
        </>
    );
};

