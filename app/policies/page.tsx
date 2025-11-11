"use client";

import { motion } from "framer-motion";

 export default function Contact(){
    return(
        <main>
            {/* HERO SECTION */}
            <section
                className="relative h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
                style={{ backgroundImage: "url('/images/about.webp')" }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white text-4xl md:text-5xl font-bold text-center z-10"
                    >
                    Policies
                </motion.h1>
            </section>
        </main>
    );
 }