import React from 'react';
import { Twitter, Instagram, Youtube, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from '../magnetic/Magnetic';


const perspectiveAnime = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
  },
};

const socialLinks = [

  {
    icon: <Facebook size={24} />,
    href: '/',
    label: 'Facebook',
    hoverColor: 'hover:text-blue-700',
  },

  {
    icon: <Instagram size={24} />,
    href: '/',
    label: 'Instagram',
    hoverColor: 'hover:text-pink-500',
  },
  {
    icon: <Youtube size={24} />,
    href: '/',
    label: 'LinkedIn',
    hoverColor: 'hover:text-blue-700',
  },

  {
    icon: <Twitter size={24} />,
    href: '/',
    label: 'Twitter',
    hoverColor: 'hover:text-blue-400',
  },

];

const Footer = () => {
  return (
    
    <footer className="text-white py-20 flex justify-center items-center pl-10 gap-8">
      
      {socialLinks.map((social, index) => (
        <Magnetic key={social.label}>
          <motion.a
            
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`transition-colors duration-300 ${social.hoverColor}`}
            variants={perspectiveAnime}
            initial="initial"
            animate="enter"
            exit="exit"
            custom={index}
          >
            {social.icon}
          </motion.a>
        </Magnetic>
      ))}
      
    </footer>
    
  );
};

export default Footer;