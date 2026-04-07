'use client';
import { motion } from "framer-motion";
import { useLang } from "@/hooks/lang-context";

const SlideInText = ({ text = "Smarter software solutions" }: { text?: string }) => {
  return (
    // 'whitespace-pre-wrap' (mobile default) - preserves spaces and wraps
    // 'md:whitespace-pre' (medium screens and up) - preserves spaces, NO wrapping
    <div className="whitespace-pre-wrap lg:whitespace-pre">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: i * 0.03,
            duration: 0.5,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: text.length * 0.08 + 1,
          }}
          // Add 'inline-block' here.
          // This is needed for 'y' animations to work reliably.
          // This is also WHY you need 'whitespace-pre' on the parent,
          // otherwise, your ' ' spaces would collapse.
          className="italic"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default function HomeHeading() {
  const { t } = useLang();
  return (
    <div className="leading-normal text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red to-pink font-[Be_Vietnam_Pro]">
      <SlideInText text={t('homeTitle')} />
    </div>
  );
}