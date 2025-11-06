"use client";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "2007", label: "Established" },
    { value: "15+", label: "Years of Excellence" },
    { value: "5.6M", label: "Tonnes Annual Capacity" },
    { value: "05", label: "Products" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-blue-700">{s.value}</h3>
            <p className="text-gray-600">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
