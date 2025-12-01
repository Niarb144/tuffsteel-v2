"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// News Card Component
interface NewsItem {
  date: string;
  title: string;
  image: string;
}

const news: NewsItem[] = [
  {
    date: "Feb, 21, 2020",
    title:
      "From a smelly dumpsite to a relaxing public park: The alluring tale of Kibarani",
    image: "/images/img18.jpg",
  },
  {
    date: "Nov, 16, 2020",
    title: "Umoja Rubber emerges top at Energy Management Awards",
    image: "/images/img19.jpg",
  },
  {
    date: "Sep, 11, 2020",
    title: "THE DIFFERENT CLASSES OF CEMENT",
    image: "/images/img20.jpg",
  },
];

export default function NewsUpdates() {
  return (
    <section className="w-full bg-[#e9e9e7] py-14 px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Title Row */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-700 font-semibold text-lg">
            Latest News & Updates
          </h2>

          <button className="text-blue-600 flex items-center gap-2 font-medium hover:underline">
            More News & Updates
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white">
              +
            </span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm p-4 pb-6"
            >
              {/* Image */}
              <div className="w-full h-48 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  width={600}
                  height={400}
                  alt="News"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Date Tag */}
              <div className="flex items-center gap-0 mt-3">
                <div className="w-8 h-6 bg-blue-600 rounded-bl-lg rounded-tl-lg" />
                <span className="text-xs font-semibold bg-black/70 text-white px-2 py-1 rounded-br-lg rounded-tr-lg">
                  {item.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-gray-800 font-semibold text-sm mt-3 leading-snug">
                {item.title}
              </h3>

              {/* Arrow Button */}
              <button className="mt-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-400 hover:bg-gray-200 text-white cursor-pointer">
                →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

