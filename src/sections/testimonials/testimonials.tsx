"use client";

import { motion } from "framer-motion";
import { testimonials } from "./testimonials-data";
import TestimonialCard from "./testimonials-card";
import { useLang } from "@/hooks/lang-context";

export default function Testimonials() {
  const { t } = useLang();
  return (
    <section id="testimonials" className="text-gray-800 py-18 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="md:text-5xl text-4xl font-bold mb-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <span className="bg-gradient-to-r from-pink to-red text-transparent bg-clip-text">
            {t("testimonialsTitle")}
          </span>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <TestimonialCard name = {t(testimonial.name)} title={t(testimonial.title)} text={t(testimonial.text)} avatar={testimonial.avatar}/>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
