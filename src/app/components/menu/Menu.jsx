"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { menuItems } from "./MenuData";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedHeadline from "../AnimatedHeadline";
import AnimatedLine from "../AnimatedLine";
import { motion } from "framer-motion";



const Menu = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
 

  useEffect(() => {
    const cards = cardsRef.current;
 gsap.registerPlugin(ScrollTrigger);
    const setTilted = () => {
      gsap.set(cards, {
        rotateX: 80,
        rotateY: (i) => (i % 2 === 0 ? -24 : 24),
        y: 60,
        opacity: 0,
        transformPerspective: 1400,
        transformStyle: "preserve-3d",
      });
    };

    setTilted();

    const tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 1.6,
        ease: "power3.out",
      },
    });

    tl.to(cards, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      opacity: 1,
      stagger: 0.12,
    });

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: false,
      onEnter: () => tl.play(),
      onLeaveBack: () => {
        tl.pause(0);
        setTilted();
      },
    });

    return () => {
      trigger.kill();
      tl.kill();
    };
  }, []);

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

  return (
    <motion.section
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="relative w-full min-h-screen flex items-center justify-center z-50 px-4 sm:px-6"
    >
      <div className="grid grid-rows-[auto_1fr] gap-14 md:gap-20 w-full max-w-6xl px-4 sm:px-8 md:px-10">

        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1
            className="
              text-[36px] sm:text-[44px] md:text-[64px]
              tracking-[0.08em]
              text-[#E8E3D8]
            "
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <AnimatedHeadline text="OUR MENU" />
          </h1>

          <p
            className="
              mt-4 sm:mt-6
              max-w-md sm:max-w-lg md:max-w-xl
              text-center
              text-[12px] sm:text-[13px] md:text-[14px]
              tracking-[0.12em]
              text-[#E8E3D8]/70
            "
            style={{ fontFamily: "var(--font-geistSans)" }}
          >
            <AnimatedLine text="Rooted in tradition and refined through process, our menu reflects a commitment to simplicity, balance, and the experience of good coffee." />
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-10 gap-y-14 md:gap-y-16 place-items-center">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-5 md:gap-6 text-center">

              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className="flip-card w-[180px] h-[220px] sm:w-[200px] sm:h-[240px]"
              >
                <div className="flip-inner">

                  {/* Front */}
                  <div className="flip-face bg-black/20 border border-white/10 backdrop-blur-xl flex items-center justify-center">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain p-5 sm:p-6 rounded-2xl"
                    />
                  </div>

                  {/* Back */}
                  <div className="flip-face flip-back bg-[#141414]/90 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center px-4 sm:px-5">
                    <p className="text-[18px] sm:text-[20px] text-[#E8E3D8]">
                      {item.price}
                    </p>
                    <p
                      className="mt-2 sm:mt-3 text-[11px] sm:text-[12px] text-[#E8E3D8]/70"
                      style={{ fontFamily: "var(--font-geistSans)" }}
                    >
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>

              <h2
                className="
                  text-[14px] sm:text-[16px]
                  tracking-[0.14em]
                  uppercase
                  text-[#E8E3D8]
                "
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <AnimatedHeadline text={item.title} />
              </h2>

            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Menu;
