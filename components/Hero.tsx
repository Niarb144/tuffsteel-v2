"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main>
    <section
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between bg-fixed bg-cover bg-center overflow-hidden px-6 md:px-16"
      style={{ backgroundImage: "url('/images/img5.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* LEFT CONTENT (Text) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center md:text-left text-white max-w-xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Building For Generations
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Building a sustainable future, one block at a time.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded font-semibold shadow-md transition-all cursor-pointer"
        >
          Discover More
        </motion.button>
      </motion.div>

      {/* RIGHT SIDE FLOATING IMAGE */}
      <div className="relative z-20 mt-10 md:mt-0">
        <motion.img
          src="/images/floating-cement.webp"
          alt="Floating Cement Bag"
          className="w-60 md:w-200 drop-shadow-[0_8px_8px_rgba(0,0,0,0.4)]"
          animate={{
            y: [0, -30, 0], 
            // rotate: [0, 2, 0], 
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
    </main>
  );
}
