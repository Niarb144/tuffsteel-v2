"use client";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-8 text-blue-100">
          For trade and project inquiries, reach out to our dedicated team.
        </p>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md text-gray-800"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-md text-gray-800"
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="w-full p-3 rounded-md text-gray-800"
          ></textarea>
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
