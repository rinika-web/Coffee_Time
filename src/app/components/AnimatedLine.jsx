import React from "react";
import { motion } from "framer-motion";

/* ---------------- Variants ---------------- */
const sentenceVariants = {
  hidden: {
    x: -24,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // same editorial ease
    },
  },
};

/* ---------------- Animated Headline ---------------- */
const AnimatedLine = ({ text, className = "" }) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{ fontFamily: "Cormorant, serif" }}
      variants={sentenceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,     // replay on re-entry
        margin: "-20%",
      }}
    >
      {text}
    </motion.span>
  );
};

export default AnimatedLine;
