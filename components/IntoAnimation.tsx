"use client";

import { motion } from "framer-motion";

export default function IntroAnimation() {
  return (
    <motion.div
      className="introWrapper"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 3.5,
        duration: 0.5
      }}
    >
      <motion.img
        src="/images/hp.png"
        alt="AFX FRAMES"
        initial={{
          scale: 1.4,
          x: 0,
          y: 0,
          opacity: 0
        }}
        animate={{
          scale: 0.3,
          x: -600,
          y: -300,
          opacity: 1
        }}
        transition={{
          duration: 3,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}