'use client'
import React from "react";
import Image from "next/image";
import ContactFooter from "./ContactFooter";
import AnimatedLine from "../AnimatedLine";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.section 
      initial={{
        opacity: 0,
        scale: 0.85,
        y: 120,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-200px" }}
      className="
        relative 
        z-10
        min-h-[50vh]
        bg-[#1D1D1D]
        w-screen
        py-16 sm:py-20 md:py-24
        flex items-center justify-center
        px-4 sm:px-6 md:px-12
      "
    >
      <div className="
        w-full max-w-6xl
        grid grid-cols-1 md:grid-cols-2
        gap-12 md:gap-16
        text-white
      ">
        {/* Left: Map + Quote */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Map */}
          <div className="
            relative
            w-full
            h-[220px] sm:h-[240px] md:h-[260px]
            rounded-2xl
            overflow-hidden
            flex justify-center items-center
          ">
            <Image
              src="/features/Coffee/map.png"
              alt="Sample map location"
              fill
              className="object-cover opacity-90"
            />

            <span className="
              absolute bottom-3 right-4
              text-[10px] sm:text-xs
              tracking-wide
              bg-black/60
              px-3 py-1
              rounded-full
            ">
              Sample location
            </span>
          </div>

          {/* Quote */}
          <p
            className="
              max-w-md
              mx-auto
              text-center
              text-base sm:text-lg md:text-xl
              leading-relaxed
              font-light
              tracking-wide
            "
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            <AnimatedLine text="“ Reach out for reservations or collaborations, we’re always happy to hear from you. ”" />
          </p>
        </div>

        {/* Right: Contact Details */}
        <div className="
          grid
          grid-cols-1 sm:grid-cols-2
          gap-10 sm:gap-12
        ">
          {/* Contact */}
          <div className="flex flex-col justify-center items-center  gap-3 sm:gap-4">
            <h2 className="
              text-xl sm:text-2xl
              font-medium
              tracking-wide
            ">
              <AnimatedLine text="Contact Us" />
            </h2>
            <p className="text-xs sm:text-sm opacity-80">
              <AnimatedLine text="hello@yourcafename.com" />
            </p>
            <p className="text-xs sm:text-sm opacity-80">
              <AnimatedLine text="+91 666666" />
            </p>
          </div>

          {/* Address */}
          <div className="flex flex-col justify-center items-center gap-3 sm:gap-4">
            <h2 className="
              text-xl sm:text-2xl
              font-medium
              tracking-wide
            ">
              <AnimatedLine text="Address" />
            </h2>
            <p className="text-xs sm:text-sm opacity-80">
              <AnimatedLine text="24B, Linking Road, Bandra West" />
            </p>
            <p className="text-xs sm:text-sm opacity-80">
              <AnimatedLine text="Mumbai 400050, Maharashtra, India" />  
            </p>
          </div>

          {/* Footer */}
          <div className="
            sm:col-span-2
            flex justify-center items-center
            pt-6 sm:pt-8
          ">
            <ContactFooter />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacts;
