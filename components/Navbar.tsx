"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Policies", href: "/policies" },
    { name: "News & Blog", href: "/news" },
    { name: "Process", href: "/process" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-800">
          <img src={"/logo.png"} alt="Tuffsteel Logo" className="h-12 w-auto" />
        </Link>
        <ul className="hidden md:flex space-x-8">
          {links.map((link, i) => (
            <motion.li key={i} whileHover={{ scale: 1.1 }}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-blue-700 transition-colors"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
        <Link href="/contact" className="">
            <motion.button 
                whileHover={{ scale: 1.1 }}
                className="hidden md:inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors font-medium cursor-pointer">
                Get a Quote
            </motion.button>
        </Link>
      </div>
    </nav>
  );
}
