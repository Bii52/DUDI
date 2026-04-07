"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useLang } from "@/hooks/lang-context";
import { useEffect, useRef, useCallback } from "react";
import { useAutoScroll } from "@/hooks/auto-scroll-provider"; 

export default function ExploreButton() {
  const { t } = useLang();
  const { isAutoScrolling, setIsAutoScrolling } = useAutoScroll(); 
  const scrollRef = useRef<number | null>(null);
  const scrollSpeed = 4; // scroll speed

  const autoScroll = () => {
    window.scrollBy(0, scrollSpeed);
    scrollRef.current = requestAnimationFrame(autoScroll);
  };

  const startAutoScroll = () => {
    if (!isAutoScrolling) {
      document.documentElement.classList.remove('scroll-smooth');

      setIsAutoScrolling(true);
      scrollRef.current = requestAnimationFrame(autoScroll);
    }
  };

  const stopAutoScroll = useCallback(() => {
    if (scrollRef.current) { 
      cancelAnimationFrame(scrollRef.current);
      scrollRef.current = null;
      document.documentElement.classList.add('scroll-smooth');
      
      setIsAutoScrolling(false);
    }
  }, [setIsAutoScrolling]);

  useEffect(() => {
    window.addEventListener("mousedown", stopAutoScroll);
    window.addEventListener("wheel", stopAutoScroll);
    window.addEventListener("touchstart", stopAutoScroll);

    return () => {
      window.removeEventListener("mousedown", stopAutoScroll);
      window.removeEventListener("wheel", stopAutoScroll);
      window.removeEventListener("touchstart", stopAutoScroll);
      
      stopAutoScroll();
    };
  }, [stopAutoScroll]); 

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Button
        onClick={startAutoScroll}
        className="px-4 py-2 text-sm font-medium rounded-3xl 
        bg-gradient-to-r from-red to-blue text-white hover:opacity-90 transition flex items-center gap-2"
      >
        {isAutoScrolling ? t("scroll") ?? "Scrolling..." : t("homeButton")} 
        <ArrowRightCircleIcon className="size-5 text-white" />
      </Button>
    </motion.div>
  );
}