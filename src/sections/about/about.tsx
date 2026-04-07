
"use client";

import { motion } from "framer-motion";
import AboutCard from "./about-card";
import { aboutCards } from "./aboutData";
import { useLang } from "@/hooks/lang-context";

export default function About() {
  const { t } = useLang();
  return (
    <section
      id="about"
      className="relative flex flex-col items-center px-6 py-20 overflow-hidden"
    >
      <div className="max-w-6xl w-full text-left">
        {/* About heading */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-glass md:p-8 p-6 rounded-3xl shadow-md"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          
          <motion.div
            className="md:text-5xl text-3xl font-bold leading-tight bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent md:w-1/3"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.4 }}
          >
            {t("aboutTitle")}
          </motion.div>

          <motion.div
            className="text-primary text-lg md:text-2xl md:w-2/3"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            {t("aboutDesc")}
          </motion.div>
        </motion.div>

        {/* About Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          {aboutCards.map((card) => (
            <motion.div
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
              whileHover={{
                scale: 1.05,
                transition: { type: 'spring', stiffness: 300 },
              }}
            >
              <AboutCard title={t(card.title)} description={t(card.description)} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
