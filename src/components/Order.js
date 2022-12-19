import React from "react"
import {motion} from "framer-motion"

const containerVariants = {
   hidden: {
      x: "100vw",
      opacity: 0
   },
   visible: {
      opacity: 1,
      x: 0,
      transition:{
         type: "spring",
         delay: 0.5
      }
   }
}

const Order = ({ pizza }) => {
   return (
      <motion.div 
         className="container order"
         variants={containerVariants}
         initial="hidden"
         animate="visible"
      >
         <h2>Thank you for your order :)</h2>
         <p>You ordered a {pizza.base} pizza with:</p>
         {pizza.toppings.map((topping) => (
            <div key={topping}>{topping}</div>
         ))}
      </motion.div>
   )
}

export default Order
