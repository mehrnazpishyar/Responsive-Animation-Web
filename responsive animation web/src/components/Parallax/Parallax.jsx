import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.css";

import mountains from "/mountains.png";
import { assets } from "../../assets/assets";

const generateStars = (count) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    animationDelay: Math.random() * 2 + "s",
  }));
};

const Parallax = () => {
  const stars = generateStars(100);

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="parallax" ref={ref}>
      <motion.h1 style={{ y: yText }}>Lorem Ipsum</motion.h1>

      <motion.div
        className="mountains"
        style={{ backgroundImage: `url(${mountains})` }}
      ></motion.div>
      <motion.div
        className="sun"
        style={{ backgroundImage: `url(${assets.sun})`, y: yBg }}
      ></motion.div>
      <div className="stars-container">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.animationDelay,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Parallax;
