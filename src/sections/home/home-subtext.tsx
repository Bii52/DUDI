'use client';
import { motion } from "framer-motion";
import { useLang } from "@/hooks/lang-context";

export default function HomeSubtext() {
  const { t } = useLang();
  const SlideInText = ({ text = "We turn ideas into powerful software that makes an impact." }: { text?: string }) => {
    return (
      <div>
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.03 + 0.5, ease: "easeOut" }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-4 md:text-xl sm:text-lg text-sm font-medium text-primary">
      <SlideInText text={t("homeDesc")} />
    </div>
  );
}