import React, {useState} from 'react';
import style from './Portfolio.module.scss'
import {AnimatePresence} from "framer-motion";
import {TitleB} from "../common/componentns/titleB/TitleB";
import { motion } from "framer-motion"

import {projectsData} from "./ProjectsData";
import {ProjectDetail} from "../projects/ProjectDetail";

export const Portfolio = () => {
    const [selectedId, setSelectedId] = useState<string >('')
    const [selectedProjectDetails, setSelectedProjectDetails] = useState<any>();
    const handleOpenPopup = (id: string) => {
        const project = projectsData.find((item)=>item.id === id)
        setSelectedProjectDetails(project)
        setSelectedId(id)
    }
    const handleClosePopup = () => {
        setSelectedId('')
    }
    return (
        <>
            <section id="portfolio" className={style.section}>
                <div className={style.container}>
                    <TitleB title={'My Work'} bgTitle={'Portfolio'}/>
                    <div className={style.portfolio}>


                    <div className={style.portfolioFilter}>
                        {projectsData.length > 0 &&
                            projectsData.map((project,index)=>(
                                <motion.div key={index}  className={style.project}  layoutId={project.id} onClick={() => handleOpenPopup(project.id)} >
                                 <motion.div className={style.projectBox}>
                                     <motion.div className={style.projectBoxImg}>
                                         <motion.img src={project.thumbImage} className={style.boxImg} />
                                         <motion.div className={style.projectBoxOverlay}>
                                             {/*<motion.a*/}
                                             {/*    className={style.stretchedLink}*/}
                                             {/*    href=""*/}
                                             {/*    // onClick={() => {*/}
                                             {/*    //     setSelectedProjectDetails(projectsData[index]);*/}
                                             {/*    // }}*/}
                                             {/*    // onClick={() => {*/}
                                             {/*    //     setSelectedProjectDetails(projectsData[index]);*/}
                                             {/*    // }}                                                 // data-bs-toggle="modal"*/}
                                             {/*    // data-bs-target="#exampleModal"*/}
                                             {/*/>*/}
                                             <motion.div className={style.projectBoxOverlayDetails}>
                                                 <motion.h5>{project.title}</motion.h5>
                                             </motion.div>
                                         </motion.div>
                                     </motion.div>
                                 </motion.div>
                                </motion.div>
                            ))
                        }

                    </div>

                    </div>
                </div>

                    <AnimatePresence>
                        {selectedId && (
                            <ProjectDetail  selectedId={selectedId} closePopup={handleClosePopup} project={selectedProjectDetails} />
                        )}
                    </AnimatePresence>

            </section>


        </>
    );
};

