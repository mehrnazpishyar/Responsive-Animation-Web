import React from "react";
import "./Navbar.css"
import NavSidebar from "../NavSidebar/NavSidebar";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavSidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="#">
            <img src={assets.facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={assets.instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={assets.youtube} alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
