import React, { useEffect, useRef } from 'react'
import "./Header.css"
import {assets} from '../../assets/assets'
import { motion } from "framer-motion";

const Header = () => {
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <div className="header">
    <div className="header-content">
    <motion.h1
          className="gradient__text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Lorem Ipsum is simply dummy text!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Lorem Ipsum has been the industry's standard dummy text...
        </motion.p>

    </div>

    <div className="header-image">
       <motion.img
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView ={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.4,
                  }}
                  src={assets.ai_pic}
                  alt=""
                  className="service-img"
                />
    </div>
    <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Lorem Ipsum
      </motion.div>
  </div>
  )
}

export default Header