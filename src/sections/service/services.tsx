"use client";

import { motion } from "framer-motion";
import ServiceCard from "./services-card";
import { services } from "./service-data";
import { useLang } from "@/hooks/lang-context";

export default function ServicesSection() {
  const { t } = useLang();
  return (
    <section
      id="services"
      className="relative flex flex-col items-center px-6 py-20 overflow-hidden"
    >
      <div className="max-w-6xl w-full">
        {/* Service heading */}
        <motion.div
          className="flex flex-col items-start bg-glass p-8 rounded-3xl shadow-md"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.h2
            className="md:text-5xl text-3xl font-bold leading-tight bg-gradient-to-r from-red to-blue bg-clip-text text-transparent"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
          >
            {t("servicesTitle")}
          </motion.h2>
          <motion.div
            className="text-primary md:text-xl text-lg mt-3"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            {t("servicesDesc")}
          </motion.div>
        </motion.div>

        {/* Services Card */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
              <ServiceCard
          key={index}
          title={t(service.title)}
          description={t(service.description)}
          href={service.href}
        />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
