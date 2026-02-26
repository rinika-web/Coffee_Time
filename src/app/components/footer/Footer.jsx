"use client";

import React, { useRef, useState } from "react";
import { motion, useAnimationFrame, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

import Magnetic from "../magnetic/Magnetic";
import AnimatedHeadline from "../AnimatedHeadline";
import AnimatedLine from "../AnimatedLine";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Footer = () => {
  const borderRef = useRef<HTMLDivElement | null>(null);
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });

  // ✅ NEW STATE (only addition)
  const [showComingSoon, setShowComingSoon] = useState(false);

  useAnimationFrame((t) => {
    if (borderRef.current) {
      const angle = (t / 10) % 360;
      borderRef.current.style.setProperty("--border-angle", `${angle}deg`);
    }
  });

  // ✅ MODIFIED: now shows modal instead of routing
  const handleNavigation = () => {
    setShowComingSoon(true);
  };

  return (
    <>
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="relative w-full min-h-[70vh] mt-16 md:mt-20 overflow-hidden flex justify-center items-center px-4 sm:px-6"
      >
        {/* Background */}
        <Image
          src="/features/Coffee/Coffee_POWDER.jpg"
          alt="Coffee background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65 z-10" />

        {/* Content */}
        <div className="relative z-40 w-full h-full flex justify-center items-center px-4 sm:px-10 md:px-20">
          <motion.div
            ref={borderRef}
            className="w-full flex justify-center items-center"
          >
            <div className="
              w-full
              flex flex-col md:flex-row
              items-center
              justify-center
              gap-14 md:gap-32 lg:gap-40
              text-center md:text-left
            ">
              {/* Text Block */}
              <div className="flex flex-col gap-4 max-w-md sm:max-w-lg md:max-w-xl">
                <h1
                  className="
                    text-[28px] sm:text-[36px] md:text-[56px]
                    leading-[1.15]
                    tracking-[0.12em]
                    text-[#E8E3D8] 
                  "
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  <AnimatedHeadline text="Visit Our Café" />
                </h1>

                <hr className="h-[0.01vh] text-white/40" />

                <p
                  className="
                    text-[12px] sm:text-[13px] md:text-[14px]
                    leading-relaxed
                    tracking-[0.08em]
                    text-[#E8E3D8]/75
                  "
                  style={{ fontFamily: "var(--font-geistSans)" }}
                >
                  <AnimatedLine
                    text="
                    A space shaped by craft, calm, and conversation.
                    Join us for thoughtfully brewed coffee, warm interiors,
                    and moments meant to be savored—one cup at a time."
                  />
                </p>
              </div>

              {/* CTA Button */}
              <Magnetic>
                <motion.button
                  onClick={handleNavigation}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setCirclePos({
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top,
                    });
                  }}
                  initial="initial"
                  whileHover="hovered"
                  className="
                    relative
                    w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40
                    flex items-center justify-center
                    rounded-full
                    overflow-hidden
                    border border-white/90
                    backdrop-blur-2xl
                    text-[#E8E3D8]
                    text-[11px] sm:text-[12px]
                    tracking-[0.18em]
                    uppercase
                    z-40
                  "
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  <motion.span
                    className="absolute rounded-full bg-[#7d553b]/90"
                    style={{
                      width: 240,
                      height: 240,
                      left: circlePos.x - 120,
                      top: circlePos.y - 120,
                      zIndex: 0,
                    }}
                    variants={{
                      initial: { scale: 0, opacity: 0 },
                      hovered: { scale: 1.15, opacity: 1 },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  />

                  <span className="relative z-10 text-[#E8E3D8] text-center text-[12px] sm:text-[13px] md:text-[14px] leading-tight">
                    Reserve
                    <br />
                    the Experience
                  </span>
                </motion.button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ✅ COMING SOON MODAL */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#1D1D1D] border border-white/20 px-12 py-10 rounded-xl text-center"
            >
              <h2 className="text-[28px] tracking-[0.2em] uppercase text-[#E8E3D8] mb-4">
                Coming Soon
              </h2>

              <p className="text-[#E8E3D8]/70 text-sm tracking-wide">
                Table reservations will be available shortly.
              </p>

              <button
                onClick={() => setShowComingSoon(false)}
                className="mt-6 text-xs uppercase tracking-widest text-[#E8E3D8] border border-white/30 px-6 py-2 rounded-md hover:bg-[#4b2c18] hover:text-black transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;