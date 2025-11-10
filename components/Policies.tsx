"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PoliciesSection() {
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
            src="/images/img9.webp" 
            alt="Policies"
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
            <h3 className="text-blue-700 text-sm md:text-4xl uppercase font-semibold tracking-wider mb-2">
              OUR POLICIES & COMMITMENT
            </h3>
            <h2 className="text-3xl md:text-7xl text-blue-500 font-bold mb-1 mt-4">
              Safety, Health & Corporate Policy
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl border border-blue-200 shadow-sm p-8 mt-4">
            {/* LEFT DESCRIPTION + BUTTON */}
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Looking for cement, steel products, wire products, pipes and tubes, water tanks or nails? We
                 are the distributors of choice! With over 200 products we cater for fabrication of both
                  personal and large-scale commercial developments.
              </p>

            </div>

            {/* RIGHT ACHIEVEMENTS */}
            <div className="border-l md:border-l border-t md:border-t-0 border-blue-200 pl-6 pt-6 md:pt-0">
              <p className="text-gray-700 mb-6 leading-relaxed">
                We pride ourselves in our ability to deliver on demand for each project through our strong
                 logistics network which caters for all types of construction projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
