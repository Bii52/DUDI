import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  direction: number;
  variants: Variants;
  onAnimationStart: () => void;
  onAnimationComplete: () => void;
}

export default function ProjectCard({
  name,
  description,
  image,
  direction,
  variants,
  onAnimationStart,
  onAnimationComplete,
}: ProjectCardProps) {
  return (
    <motion.div
      key={name}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="absolute inset-0 flex flex-col justify-center items-center p-6"
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
    >
      <div className="h-[240px] w-full bg-glass rounded-xl flex items-center justify-center mb-4 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={240}
          className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
        />
      </div>
      <h3 className="font-bold text-lg text-primary">{name}</h3>
      <p className="text-sm text-sub-text text-center">{description}</p>
    </motion.div>
  );
}
