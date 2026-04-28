import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";
import Logo from "../assets/logo3.PNG";
import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 400);
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-container"
      animate={done ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="loading-logo-wrap">
        <div className="loading-ring" />
        <div className="loading-ring-2" />
        <motion.img
          src={Logo}
          alt="Advik Maniar"
          style={{ height: 64, objectFit: "contain", borderRadius: 12 }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="loading-dots">
        <div className="loading-dot" />
        <div className="loading-dot" />
        <div className="loading-dot" />
      </div>

      <span className="loading-text">Loading Portfolio</span>
    </motion.div>
  );
};

export default LoadingScreen;
