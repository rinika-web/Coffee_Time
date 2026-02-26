'use client';
import React from "react";
import HomeImage from "./HomeImage";
import AnimatedHeadline from "../AnimatedHeadline";
import AnimatedLine from "../AnimatedLine";

const Home = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:p-16 z-10">
        <div className="grid grid-cols-12 gap-6">

          {/* Background Wrapper */}
          <div className="relative col-span-12 min-h-[100vh] lg:min-h-screen rounded-lg overflow-hidden flex items-center justify-center">

            {/* Background Image / Video */}
            <div className="absolute inset-0 z-20 grid grid-cols-1 border border-white/10 rounded-lg overflow-hidden">
              <HomeImage />
            </div>

            <div className="relative z-50 h-full w-full flex items-center justify-center px-4">
              <div className="grid grid-cols-12 w-full">

                <div className="col-span-12 text-center px-4 py-8 md:px-6 md:py-10 rounded-lg">

                  <h1
                    className="
                      text-[42px] sm:text-[56px] md:text-[80px] lg:text-[96px]
                      leading-[1.15] md:leading-[1.05]
                      tracking-[0.06em] md:tracking-[0.08em]
                      font-light text-[#E8E3D8] text-center flex justify-center items-center
                    "
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    <AnimatedHeadline text="COFFEE TIME" />
                  </h1>

                  <p
                    className="
                      mt-4 sm:mt-6
                      max-w-[520px] md:max-w-[560px]
                      mx-auto
                      text-[14px] sm:text-[15px] md:text-[16px]
                      leading-[1.6] md:leading-[1.7]
                      tracking-[0.01em]
                      text-white/80 text-center
                    "
                    style={{ fontFamily: "var(--font-geistSans)" }}
                  >
                    <AnimatedLine text="Thoughtfully brewed coffee, presented in a calm, intentional digital space." />
                  </p>

                </div>

              </div>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 z-30 bg-black/40" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
