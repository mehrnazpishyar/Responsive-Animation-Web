import React, { useEffect, useRef } from 'react'
import "./Header.css"
import {assets} from '../../assets/assets'
import { motion } from "framer-motion";

const Header = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  
  useEffect(() => {
    h1Ref.current.classList.add('slide-in-left');
    pRef.current.classList.add('slide-in-left');
  }, []);

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
    <div className="header" id="home">
    <div className="header-content">
      <h1 className="gradient__text" ref={h1Ref}>
      Lorem Ipsum is simply dummy text!
      </h1>
      <p ref={pRef}>
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      </p>

    </div>

    <div className="header-image">
      <img src={assets.ai_pic} alt="header"/>
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