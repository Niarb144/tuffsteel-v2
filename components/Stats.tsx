"use client";

import React from "react";
import { motion } from "framer-motion";

// Mombasa Cement "Numbers" hero recreated
// - Tailwind CSS utility classes
// - Framer Motion for subtle float/scale/enter animations
// - TypeScript React component, default export

// Usage: place <NumbersHero /> inside a Next.js page.

export default function NumbersHero() {
  const circles = [
    { labelTop: 'Established', value: '2007', caption: 'At Kilifi County', size: 140, color: 'bg-yellow-400' },
    { labelTop: 'Over', value: '15yrs', caption: 'In service', size: 160, color: 'bg-green-300' },
    { labelTop: '05', value: 'Products', caption: '', size: 115, color: 'bg-amber-300' },
    { labelTop: 'Over', value: '1000', caption: 'Employees', size: 140, color: 'bg-indigo-300' },
    { labelTop: 'Annual Capacity Of', value: '5.6Million', caption: 'Metric Tonnes', size: 220, color: 'bg-green-200' },
  ];

  return (
    <section className="w-full bg-[#e9e6e0] py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#e9e6e0] rounded-[20px] p-10 shadow-sm h-80vh">
          <div className="flex flex-col md:flex-row items-start gap-8 h-96">
            {/* Left text */}
            <div className="md:w-1/3">
              <h3 className="text-3xl font-light text-gray-700">Tuffsteel<br/>Limited (TSL)</h3>
              <h2 className="text-4xl font-semibold italic text-gray-800 mt-2">in <span className="font-black">Numbers</span></h2>
              <p className="mt-4 text-sm text-gray-600">TSL is committed to the manufacture and marketing of quality cement and working towards building a long-term relationship with its customers by ensuring total customer satisfaction.</p>
              <button className="mt-6 inline-flex items-center gap-3 px-4 py-2 border rounded-full bg-white hover:shadow text-black cursor-pointer">Discover More <span className="inline-block w-3 h-3 rounded-full bg-blue-500"/></button>
            </div>

            {/* Right circles area */}
            <div className="md:flex-1 relative h-[340px]">
              {/* absolutely position the circle group to visually match the layout */}
              <div className="absolute left-0 top-6 w-full h-full">
                {circles.map((c, i) => {
                  // positions roughly match the screenshot; tweak as needed
                  const positions = [
                    { left: '10%', top: '50%' },
                    { left: '36%', top: '8%' },
                    { left: '65%', top: '14%' },
                    { left: '80%', top: '54%' },
                    { left: '46%', top: '55%' },
                  ];

                  const style = {
                    width: `${c.size}px`,
                    height: `${c.size}px`,
                    left: positions[i].left,
                    top: positions[i].top,
                    transform: 'translate(-50%, -50%)',
                  } as React.CSSProperties;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.15 * i, type: 'spring', stiffness: 80 }}
                      style={style}
                      className={`absolute flex flex-col items-center justify-center rounded-full ${c.color} shadow-lg`}
                    >
                      <div className="text-sm font-semibold tracking-wide text-gray-800 text-center px-2">{c.labelTop}</div>
                      <div className="text-2xl font-bold text-gray-900 mt-1">{c.value}</div>
                      {c.caption && <div className="text-xs text-gray-700 mt-1">{c.caption}</div>}
                    </motion.div>
                  );
                })}

                {/* subtle floating animation for the whole group */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
