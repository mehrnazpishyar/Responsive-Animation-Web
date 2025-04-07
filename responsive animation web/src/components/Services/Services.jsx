import React from "react";
import { assets } from "../../assets/assets";
import "./Services.css";
import { motion } from "framer-motion";


const Services = () => {
  return (
    <main className="services-section" id="Services">
      <div className="services-wrapper">
        <div className="left-section">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView ={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            className="main-title"
          >
            Lorem <br /> Ipsum
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView ={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.2,
            }}
            className="content-box"
          >
            <div className="text-box">
              <h1 className="subheading">Hello! Lorem Ipsum!</h1>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>
            <div className="decor-box-left"></div>
          </motion.div>
        </div>

     
        <div className="image-container">
          <motion.img
            initial={{ opacity: 0,  y: -100 }}
            whileInView ={{ opacity: 1,  y: 0}}
            transition={{
              type: "spring",
              stiffness: 30,
              damping: 5,
              delay: 0.4,
            }}
            src={assets.ai_2}
            alt=""
            className="service-img"
          />
          <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView ={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
            className="highlight-circle"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView ={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className="large-text"
          >
            Artificial Intelligence
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView ={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1.2,
          }}
          className="right-section"
        >
          <div className="content-box">
            <div className="text-box">
              <h1 className="subheading">Hello! Lorem Ipsum!</h1>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>
            <div className="decor-box-right"></div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Services;
