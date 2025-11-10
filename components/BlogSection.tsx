"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Steel Innovations in 2025",
      description: "Discover the latest advancements in steel manufacturing and sustainable construction materials.",
      image: "/images/steel.webp", // replace with your images
      link: "/blog/steel-innovations-2025",
    },
    {
      id: 2,
      title: "Building Strong Foundations",
      description: "Learn about the best practices for steel-based construction projects across Africa.",
      image: "/images/cement.webp",
      link: "/blog/building-strong-foundations",
    },
    {
      id: 3,
      title: "Sustainability in Steel Industry",
      description: "How Tuffsteel Limited is implementing eco-friendly processes and reducing environmental impact.",
      image: "/images/img4.webp",
      link: "/blog/sustainability-steel-industry",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-500">
          Latest News & Updates
        </h2>

        <div className="flex flex-col md:flex-row md:gap-6 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg flex-1 cursor-pointer hover:shadow-2xl transition-shadow"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <Link href={blog.link}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="text-blue-600 font-medium flex items-center gap-1"
                  >
                    Read More →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More News Button */}
        <div className="mt-12 text-center">
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium shadow"
            >
              More News & Updates
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
