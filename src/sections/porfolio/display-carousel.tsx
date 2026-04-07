// display-carousel.tsx
"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, useInView } from "framer-motion";
import ProjectCard from "./display-card";
import ProjectPagination from "./display-pagination";
import { projects } from "./display-data";
import { useLang } from "@/hooks/lang-context";
import { useAutoScroll } from "@/hooks/auto-scroll-provider";

export default function ProjectCarousel() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef, { margin: "-100px 0px -100px 0px" });
  const { isAutoScrolling } = useAutoScroll();

  const paginate = useCallback((dir: number) => {
    if (isAnimating) return;
    setPage(([p]) => [(p + dir + projects.length) % projects.length, dir]);
  }, [isAnimating]);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setPage(([p]) => [index, index > p ? 1 : -1]);
  }, [isAnimating]);

  useEffect(() => {
    if (isInView && !isAutoScrolling) {
      const interval = setInterval(() => {
        paginate(1);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isInView, isAutoScrolling, paginate]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, y: 0 },
    exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -40 : 40 }),
  };
  const { t } = useLang();
  const currentProject = projects[page];
  const projectName = t(currentProject.name);
  const projectDesc = t(currentProject.description);
  const projectImage = currentProject.image;
  return (
    <div ref={carouselRef} className="relative w-full md:w-2/3 flex justify-center md:justify-end">
      <div className="bg-glass rounded-3xl shadow-sm p-6 w-[90%] md:w-[500px] h-[420px] flex flex-col justify-center items-center overflow-hidden relative">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <ProjectCard
            name={projectName}
            description={projectDesc}
            image={projectImage}
            direction={direction}
            variants={variants}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
          />
        </AnimatePresence>

        <ProjectPagination total={projects.length} current={page} onGoTo={goTo} />
      </div>
    </div>
  );
}