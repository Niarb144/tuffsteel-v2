"use client";

import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <main className="bg-white-500">
    <footer className="bg-[#3b3b3b] text-gray-300 py-12 px-6 md:px-20 rounded-t-[80px] mt-0">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div>
          <img
            src="/logo.png"
            alt="Tuffsteel"
            className="mb-4 w-44"
          />
          <p className="text-sm leading-relaxed">
            Tuffsteel Limited is one of East Africa’s leading construction
            products retailers with an annual capacity of 5.6 million metric tonnes. Tuffsteel
            is the most technologically advanced and environmentally friendly
            cement producer in East Africa.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase">
            About Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Policies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Get in Touch
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase">
            Addresses & Contacts
          </h3>
          <p className="text-sm mb-4 leading-relaxed">
            Imaara Daima–Nairobi,
            <br />
            P.O. Box 10757 – 00200,
            <br />
            Nairobi, Kenya.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone /> +254 722 204848
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +254 727 605899
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +254 733 615465
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@tuffsteel.co.ke
            </li>
          </ul>
        </div>

        {/* Partner Logo */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm mb-2">A member of the</p>
          <img
            src="/nyumba-logo.png"
            alt="Nyumba Group"
            className="w-28 grayscale hover:grayscale-0 transition"
          />
          <p className="text-xs mt-1 text-gray-400">Since 1958</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-600" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm">
        <p>{new Date().getFullYear()} Tuffsteel Limited. All Rights Reserved.</p>
        <div className="flex items-center gap-3 mt-3 md:mt-0">
          <span className="font-semibold text-white">FOLLOW US</span>
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaLinkedinIn className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
    </main>
  );
}
