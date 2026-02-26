'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
    z: -200,
    rotateX: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    z: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    z: -160,
    rotateX: -6,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function PageTransitionProvider({ children }) {
  const pathname = usePathname();

  return (
    <div
      style={{
        perspective: 1600,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
