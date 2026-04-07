"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/hooks/lang-context";

type TranslationKey = 
|"mileStone1"
|"mileStone2"
|"mileStone3"
|"mileStone4"
export default function Milestone() {
  const stats: { value: number; label: TranslationKey; suffix: string }[] = [
    { value: 150, label: "mileStone1", suffix: "+" },
    { value: 50, label: "mileStone2", suffix: "+" },
    { value: 30, label: "mileStone3", suffix: "+" },
    { value: 5, label: "mileStone4", suffix: "+" },
  ];
  const { t } = useLang();
  return (
    <section
      id="stats"
      className="flex items-center justify-center w-full px-6 py-20"
    >
      <motion.div
        className="flex flex-wrap justify-center md:justify-between gap-8 bg-glass px-10 py-8 rounded-3xl max-w-6xl w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        {stats.map((stat, index) => (
          <AnimatedStat
            key={t(stat.label)}
            value={stat.value}
            suffix={stat.suffix}
            label={t(stat.label)}
            delay={index * 0.2}
          />
        ))}
      </motion.div>
    </section>
  );
}

function AnimatedStat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, scale: 1, y: 0 });
      let start = 0;
      const duration = 1500;
      const stepTime = 20;
      const increment = value / (duration / stepTime);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(timer);
        }
        setDisplayValue(Math.floor(start));
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={controls}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
        type: "spring",
        stiffness: 120,
      }}
      className="text-center flex-1 min-w-[120px] group cursor-pointer"
    >
      {/* Value */}
      <motion.h3
        className="text-3xl md:text-4xl font-extrabold text-primary transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-pink group-hover:to-blue group-hover:text-transparent group-hover:bg-clip-text"
      >
        {displayValue}
        {suffix}
      </motion.h3>

      {/* Label */}
      <motion.p
        className="text-sub-text font-medium mt-2 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-pink group-hover:to-purple group-hover:text-transparent group-hover:bg-clip-text"
      >
        {label}
      </motion.p>
    </motion.div>
  );
}
