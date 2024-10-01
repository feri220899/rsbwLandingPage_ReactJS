import React from 'react'
import { motion } from 'framer-motion';

function ButtonMotion({ children }) {
  return (
    <motion.div whileHover={{ scale: 1.1, rotate: 0 }} whileTap={{ scale: 0.8 }}>
    { children }
    </motion.div>
  )
}

export default ButtonMotion