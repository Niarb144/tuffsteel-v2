"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-12 lg:px-20">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <img
            src="/images/img5.webp" 
            alt="About Tuffsteel"
            className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-2 flex flex-col justify-between"
        >
          {/* Title Section */}
          <div>
            <h2 className="text-blue-700 text-sm md:text-4xl uppercase font-semibold tracking-wider mb-2">
              About
            </h2>
            <h3 className="text-3xl md:text-7xl text-blue-500 font-bold mb-1 mt-4">
              Tuffsteel Limited
            </h3>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl border border-blue-200 shadow-sm p-8 mt-4">
            {/* LEFT DESCRIPTION + BUTTON */}
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Tuffsteel Limited is one of the leading suppliers of quality
                building and construction materials across the region, ensuring
                durability, innovation, and sustainability in every product we
                deliver.
              </p>
              <Link href="/about">
                <motion.button
                    whileHover={{ scale: 1.05, x: 4 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors shadow cursor-pointer"
                >
                    <span>Learn More</span>
                    <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-5 h-5"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                </motion.button>
                </Link>

            </div>

            {/* RIGHT ACHIEVEMENTS */}
            <div className="border-l md:border-l border-t md:border-t-0 border-blue-200 pl-6 pt-6 md:pt-0">
              <h4 className="text-xl font-semibold text-blue-500 mb-3">
                Our Achievements
              </h4>
              <ul className="text-gray-700 space-y-2">
                <li>Over 25 years of trusted service</li>
                <li>Expanded presence across East Africa</li>
                <li>ISO-certified quality and operations</li>
                <li>Strong partnerships with industry leaders</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
