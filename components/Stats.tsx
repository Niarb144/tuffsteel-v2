"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Link from "next/link";

export default function StatsSection() {
  const stats = [
    { id: 1, label: "In service", value: 15, prefix: "Over ", suffix: " yrs", color: "bg-green-400", size: 14  },
    { id: 2, label: "Products", value: 5, color: "bg-yellow-400", size: 8 },
    { id: 3, label: "Employees", value: 1000, prefix: "Over ", color: "bg-blue-400", size: 20 },
    { id: 4, label: "Annual Capacity", value: 5.6, suffix: " Million Metric Tons", color: "bg-green-300", size: 22 },
    { id: 5, label: "Established", value: 2007, color: "bg-yellow-300", size: 16 },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto p-6 md:px-12 lg:px-20 bg-gray-200 rounded-[2vw]">
        <div className="md:flex md:items-start md:gap-12 p-4">
          {/* Left Text */}
          <div className="md:w-1/3 mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-6 text-blue-500">
              Tuffsteel Limited <span className="italic">in Numbers</span>
            </h2>
            <p className="text-gray-700 mb-6">
              At Tuffsteel Limited we are dedicated to delivering high-quality steel products
              and construction solutions across the region. With years of industry experience,
              we have built a reputation for strength, durability, and reliability.
            </p>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium shadow cursor-pointer"
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

          {/* Right Circles */}
          <div className="md:w-2/3 flex flex-wrap -m-4 justify-center md:justify-start relative">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: i * 0.2 }}
                whileHover={{ scale: 1.15 }}
                className={`flex flex-col items-center justify-center rounded-full ${stat.color} shadow-lg cursor-pointer`}
                style={{
                  width: `${stat.size}vw`,
                  height: `${stat.size}vw`,
                  margin: '0.2vw', 
                  minWidth: '120px',
                  minHeight: '120px',
                }}
              >
                <span className="text-2xl md:text-3xl font-bold text-gray-800">
                  <CountUp
                    end={stat.value}
                    duration={2}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                </span>
                <span className="mt-2 text-gray-800 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
