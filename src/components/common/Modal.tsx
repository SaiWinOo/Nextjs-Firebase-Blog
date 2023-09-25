import {AnimatePresence, motion} from "framer-motion";
import React from "react";

type ModalProps = {
    children: React.ReactNode,
    open: boolean,
    closeModal : ()=> void
};

const Modal = (props : ModalProps) => {

    return (
        <AnimatePresence>
            <motion.div
                className={props.open ? 'h-screen w-screen fixed bg-black transition-all duration-300 bg-opacity-40 z-20 top-0 left-0 flex justify-center items-center ' : ''}>
                <div
                    className="modal">
                    <div>
                        <AnimatePresence>
                            {props.open &&
                                <div onClick={(e) => props.closeModal()}
                                     className={'h-screen w-screen fixed inside z-20 top-0 left-0 flex justify-center items-center '}>
                                    <motion.div
                                        initial={{opacity: 0 }}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0 }}
                                        transition={{duration: 0.3}}
                                        onClick={(e) => e.stopPropagation()}
                                        className="w-[95%] max-w-[540px] z-30 !max-h-[90vh] overflow-hidden p-5 overflow-y-auto custom-scrollbar bg-white rounded-md shadow-xl transition-all transform"
                                    >
                                        {props.children}
                                    </motion.div>
                                </div>
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
};

export default Modal;
