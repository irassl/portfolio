import React from 'react';
import style from './ProjectDetail.module.scss'
import {motion} from "framer-motion"

type ProjectPopupPropsType = {
    selectedId: string
    closePopup: () => void
    children?: React.ReactNode,
    project: any

}
export const ProjectDetail = ({closePopup, selectedId,  project}: ProjectPopupPropsType) => {
    console.log(project)
    return (
        <motion.div className={style.modal} tabIndex={-1}>
            <motion.div layoutId={selectedId} className={style.dialog}>
                <motion.div className={style.content}>
                    <div className={style.contentBody}>
                        <button
                            type="button"
                            className={style.btnClose}
                            onClick={closePopup}
                            // data-bs-dismiss="modal"
                            // aria-label="Close"
                        />
                        <div className={style.container}>
                            <h2>
                                {project.title}
                            </h2>
                            <div className={style.containerRow}>
                                <div className={style.containerPhoto}>
                                    <img className="img-fluid"
                                         alt=""
                                         src={project?.thumbImage}/>

                                </div>
                                <div className={style.containerContent}>
                                    <h4 className={"text-4 font-weight-600"}>
                                        Project Info:
                                    </h4>
                                    <p>
                                        {project?.projectInfo}
                                    </p>
                                    <h4>
                                        Project Details:
                                    </h4>
                                    <ul className={style.list}>
                                        <li>
                                            <span>
                                                Technologies:
                                            </span>
                                            {project?.technologies}
                                        </li>
                                        <li>
                                            <span>
                                                URL:
                                            </span>
                                            <a
                                                href={project?.url?.link}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                {project?.url?.name}
                                            </a>
                                        </li>
                                    </ul>

                                </div>

                            </div>
                        </div>

                    </div>

                </motion.div>

                {/*<motion.button onClick={() => closePopup()} />*/}
            </motion.div>

        </motion.div>
    );
};
