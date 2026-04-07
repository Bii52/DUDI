"use client";


import { motion } from "framer-motion";
import ProjectCarousel from "./display-carousel";
import { useLang } from "@/hooks/lang-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PortfolioSection() {
  const { t } = useLang();
  return (
    <motion.section
      id="portfolio"
      className="relative flex flex-col items-center px-6 py-10 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/3 mb-10 md:mb-0 flex flex-col items-start justify-center text-left">
          <span className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue pb-5">
            {t("projectTitle")}
          </span>
          <p className="text-lg text-primary mt-2 pb-6 border-b border-primary">
            {t("projectDescription")}
          </p>

          <motion.div
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button className="mt-4 flex items-center gap-2 text-lg text-primary bg-transparent font-medium hover:bg-transparent transition">
              <Link
                href="/projects"
                className="flex items-center gap-2 group"
              >
                <span className="transition group-hover:bg-gradient-to-r group-hover:from-purple group-hover:to-blue group-hover:bg-clip-text group-hover:text-transparent">
                  {t("projectAll")}
                </span>
                <span className="transition border border-primary rounded-full p-2 group-hover:border-0 group-hover:bg-gradient-to-r group-hover:from-blue group-hover:to-purple">
                  <ArrowRight size={20} />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
        <ProjectCarousel />
      </div>
    </motion.section>
  );
}