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

const modal = {
   visible: {
      opacity: 1,
      y: "200px",
      transtion:{
         delay: 0.5
      }
   },
   hidden: {
      y: "-100vh",
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
               exit="hidden"
            >
               <motion.div 
                  className="modal"
                  variants={modal}
               >
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
