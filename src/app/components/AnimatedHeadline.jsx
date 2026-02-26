import React from "react";
import { motion } from "framer-motion";

/* ---------------- Variants ---------------- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letterVariants = {
  hidden: {
    x: -24,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // editorial ease
    },
  },
};

/* ---------------- Animated Headline ---------------- */
const AnimatedHeadline = ({ text, className = "" }) => {
  const letters = text.split("");

  return (
    <motion.span
      className={`flex ${className}`}
      style={{ fontFamily: "Cormorant, serif" }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,      // 🔥 replay every time
        margin: "-20%",   // start slightly before full view
      }}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          className="relative inline-block overflow-hidden"
        >
          <motion.span
            variants={letterVariants}
            className="inline-block will-change-transform"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default AnimatedHeadline;