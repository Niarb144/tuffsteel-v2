"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="./images/logo.webp" alt="Site Logo" className="h-12 w-auto" />
        </Link>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden md:flex space-x-8 relative">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const isHovered = hoveredLink === link.href;

            return (
              <motion.li
                key={link.href}
                className="relative"
                onHoverStart={() => setHoveredLink(link.href)}
                onHoverEnd={() => setHoveredLink(null)}
              >
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 font-medium pb-1 ${
                    isActive
                      ? "text-blue-700"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>

                {/* ACTIVE underline (persistent) */}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-[2px] bg-blue-700 rounded-full bottom-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* HOVER underline (appears on hover if not active) */}
                {!isActive && isHovered && (
                  <motion.div
                    layoutId="hover-underline"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 right-0 h-[2px] bg-blue-500 rounded-full bottom-0 origin-left"
                  />
                )}
              </motion.li>
            );
          })}
        </ul>

        {/* DESKTOP CTA BUTTON */}
        <Link href="/contact" className="hidden md:inline-block">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors font-medium cursor-pointer"
          >
            Get a Quote
          </motion.button>
        </Link>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-blue-800" />
          ) : (
            <Menu className="h-6 w-6 text-blue-800" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <ul className="flex flex-col items-center space-y-4 py-6">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block text-lg font-medium transition-colors pb-1 ${
                        isActive
                          ? "text-blue-700"
                          : "text-gray-700 hover:text-blue-500"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {isActive && (
                      <motion.div
                        layoutId="mobile-underline"
                        className="absolute left-0 right-0 h-[2px] bg-blue-700 rounded-full bottom-0"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </li>
                );
              })}

              <li>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 transition-colors font-medium cursor-pointer"
                  >
                    Get a Quote
                  </motion.button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
