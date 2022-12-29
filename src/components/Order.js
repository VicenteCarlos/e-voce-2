import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '100vw',
    transition: {
      staggerChildren: 0.5,
    } 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    }
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const Order = ({ pizza, setShowModal }) => {
  // useEffect lifecycle hook, array with only setShowModal as dep 


  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Obrigado por sempre estar comigo, mesmo que tenha vivido me enchendooo, quero te mostrar, que gosto muito, muito mesmo de você ❤️</h2>
     
    </motion.div>
  )
}

export default Order;