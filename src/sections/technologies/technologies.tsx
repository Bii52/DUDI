"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { technologies } from "./technologies-data";
import TechnologyCard from "./technologies-card";
import { useLang } from "@/hooks/lang-context";

export default function TechnologiesSection() {
  const { t } = useLang();
  const autoplay = React.useRef(
    Autoplay({ delay: 1800, stopOnInteraction: false })
  );
  const stopPropagation = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <section
      id="technologies"
      className="relative flex flex-col items-center px-6 overflow-x-hidden"
    >
      {/* Heading */}
      <motion.div
        className="z-10 w-full max-w-6xl text-left"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <span className="md:text-5xl text-4xl font-bold leading-tight bg-gradient-to-r from-red to-purple text-transparent bg-clip-text">
          {t("technologiesTitle")}
        </span>
      </motion.div>

      {/* Carousel */}
      <motion.div
        className="relative z-10 w-full max-w-6xl px-8 pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <Carousel
          plugins={[autoplay.current]}
          opts={{ align: "start", loop: true, duration: 1000 }}
          className="w-full"
          onMouseDown={stopPropagation}
          onTouchStart={stopPropagation}
        >
          <CarouselContent>
            {technologies.map((tech) => (
              <CarouselItem
                key={tech.name}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <TechnologyCard name={tech.name} Icon={tech.icon} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  );
}
