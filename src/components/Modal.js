import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { Link } from "react-router-dom"

const backdrop = {
   visible: {
      opacity: 1
   },
   hidden: {
      opacity: 0
   }
}

const Modal = ({showModal}) => {
   return (
      <AnimatePresence exitBeforeEnter>
         {showModal && (
            <motion.div 
               className="backdrop"
               variants={backdrop}
               animate="visible"
               initial="hidden"
            >
               <motion.div className="modal">
                  <p>Want to make another pizza?</p>
                  <Link to={"/"}>
                     <button>Start again</button>
                  </Link>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   )
}

export default Modal
