"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { navData } from "./Data";

const DURATION = 0.45;
const STAGGER = 0.025;

const NavbarElement = () => {
  const router = useRouter();

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ---------- circle hover (desktop CTA only) ---------- */
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });

  /* ---------- scroll hide / show ---------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(!(currentScrollY > lastScrollY && currentScrollY > 100));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ---------- navigation ---------- */
  const handleNavigation = (href) => {
    setMenuOpen(false);

    if (!href.startsWith("#")) {
      router.push(href);
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <motion.nav
        animate={{ y: showNavbar ? 0 : -120 }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 z-50 w-full bg-transparent hidden lg:block"
      >
        <div className="mx-auto max-w-[1280px] h-[72px] px-6 flex items-center justify-between">
          {/* Logo */}
          <span
            className="text-[18px] tracking-[0.25em] uppercase text-[#E8E3D8] font-semibold"
            style={{ fontFamily: "var(--font-geistSans)" }}
          >
            Coffee <br /> Time
          </span>

          {/* Links */}
          <div className="flex items-center gap-10">
          {navData.map((item) => {
            const isPrimary = item.id === 5;
            const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });

            return (
              <motion.a
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.link);
                }}
                onMouseMove={(e) => {
                  if (!isPrimary) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  setCirclePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
                initial="initial"
                whileHover="hovered"
                className={`
                  relative
                  flex items-center justify-center
                  h-[44px]
                  overflow-hidden
                  cursor-pointer
                  text-[14px]
                  tracking-[0.08em]
                  uppercase
                  font-medium
                  ${
                    isPrimary
                      ? "border border-[#E8E3D8] px-6 rounded-md font-semibold"
                      : ""
                  }
                `}
                style={{ fontFamily: "var(--font-geistSans)" }}
              >
                {/* ---- Circular hover fill (ONLY id 5) ---- */}
                {isPrimary && (
                  <motion.span
                    className="absolute rounded-full bg-[#7d553b]/90"
                    style={{
                      width: 220,
                      height: 220,
                      left: circlePos.x - 110,
                      top: circlePos.y - 110,
                      zIndex: 0,
                    }}
                    variants={{
                      initial: { scale: 0, opacity: 0 },
                      hovered: { scale: 1.2, opacity: 1 },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  />
                )}

                {/* ---- Default text ---- */}
                <div
                  className={`relative z-10 flex items-center justify-center text-[#E8E3D8] ${
                    isPrimary ? "text-[#E8E3D8]" : ""
                  }`}
                >
                  {item.title.split("").map((l, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        initial: { y: 0, opacity: 1 },
                        hovered: { y: "-100%", opacity: 0 },
                      }}
                      transition={{
                        duration: DURATION,
                        ease: [0.76, 0, 0.24, 1],
                        delay: STAGGER * i,
                      }}
                      className={`inline-block ${l === " " ? "w-[0.4em]" : ""}`}
                    >
                      {l === " " ? "\u00A0" : l}
                    </motion.span>
                  ))}
                </div>

                {/* ---- Hover text ---- */}
                <div
                  className={`absolute inset-0 z-10 flex items-center justify-center ${
                    isPrimary ? "" : "text-[#E8E3D8]"
                  }`}
                >
                  {item.title.split("").map((l, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        initial: { y: "100%", opacity: 0 },
                        hovered: { y: 0, opacity: 1 },
                      }}
                      transition={{
                        duration: DURATION,
                        ease: [0.76, 0, 0.24, 1],
                        delay: STAGGER * i,
                      }}
                      className={`inline-block ${l === " " ? "w-[0.4em]" : ""}`}
                    >
                      {l === " " ? "\u00A0" : l}
                    </motion.span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE NAV ================= */}
      <nav className="fixed top-0 left-0 z-50 w-full lg:hidden bg-[#1D1D1D]">
        <div className="h-[64px] px-5 flex items-center justify-between">
          <span className="text-[#E8E3D8] tracking-widest uppercase text-sm">
            Coffee Time
          </span>

          <button
            onClick={() => setMenuOpen(true)}
            className="text-[#E8E3D8] text-sm uppercase tracking-widest"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-[#1D1D1D] flex flex-col justify-center items-center gap-8"
          >
            {navData.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.link)}
                className="text-[#E8E3D8] text-[20px] tracking-[0.2em] uppercase"
              >
                {item.title}
              </button>
            ))}

            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-[#E8E3D8] uppercase text-xs"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarElement;
