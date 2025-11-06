"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Strength Beyond Measure
        </h1>
        <p className="text-lg md:text-xl">
          Building a sustainable future, one block at a time.
        </p>
      </motion.div>
    </section>
  );
}
