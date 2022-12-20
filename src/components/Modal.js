import { AnimatePresence, motion } from "framer-motion"
import React from "react"

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

            </motion.div>
         )}
      </AnimatePresence>
   )
}

export default Modal
