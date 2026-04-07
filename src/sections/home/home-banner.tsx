"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAutoScroll } from "@/hooks/auto-scroll-provider";
import { useLang } from "@/hooks/lang-context";
import { useTheme } from "next-themes";

export default function HomeBanner() {
  const { t, lang } = useLang();
  const { isAutoScrolling, setIsAutoScrolling } = useAutoScroll();
  const { resolvedTheme } = useTheme();
  const scrollRef = useRef<number | null>(null);
  const scrollSpeed = 2; // Reduced speed for smoother scrolling
  
  // Mounted state để tránh hydration mismatch
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Theme-based styles - chỉ sử dụng khi đã mounted
  const isDark = mounted && resolvedTheme === "dark";
  const gradientFrom = isDark ? "#FFFFFF" : "#000000";

  // Font changes based on language
  const fontFamily = lang === "vi" ? "'Montserrat', sans-serif" : "'Clash Display', sans-serif";
  
  // Heading sizes: Restored English to original, Vietnamese slightly smaller to fit
  const mobileHeadingSize = lang === "vi" ? "text-[2.7rem]" : "text-5xl";
  const tabletHeadingSize = lang === "vi" 
    ? "sm:text-[2.7rem] md:text-[3.2rem] lg:text-[4.2rem] xl:text-[5.2rem]" 
    : "sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl";

  // Description width logic - force wrap for Vietnamese "sự đột phá"
  const mobileDescWidth = lang === "vi" ? "max-w-[250px]" : "max-w-none";
  const tabletDescWidth = lang === "vi" 
    ? "sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px] xl:max-w-[550px]" 
    : "max-w-none";

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
    if (isAutoScrolling && scrollRef.current) {
      cancelAnimationFrame(scrollRef.current);
      scrollRef.current = null;
      document.documentElement.classList.add('scroll-smooth');
      setIsAutoScrolling(false);
    }
  }, [isAutoScrolling, setIsAutoScrolling]);

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
    <div className={`w-full transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>      
      
      <div className={`hidden lg:block w-full h-auto transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src={isDark ? "/LightRed.png" : "/LightRedWhite.png"}
          alt="Light Red"
          fill
          className="z-[-1]"
          />
      </div>
      {/* Star - hidden on mobile */}
      <Image
        src="/HomeBannerStar.svg"
        alt="Home Banner Star"
        width={80}
        height={80}
        className="hidden lg:block absolute top-42 right-8 w-12 h-12 lg:right-3 lg:w-20 lg:h-20 xl:right-42 2xl:right-49"
      />
      
      {/* Mobile Layout - with border, text left */}
      <div className="sm:hidden w-full px-4">
        <div className="flex flex-col w-full px-4 pt-6 rounded-2xl border-2 border-foreground/30 backdrop-blur-sm bg-white/3 overflow-hidden">
          <div className="text-left w-full" style={{ fontFamily }}>
            <p className="text-xl font-light mb-2 text-foreground">{t("bannerIntro")}</p>
            <h1 className={`${mobileHeadingSize} font-semibold leading-[1.1] mb-4 bg-gradient-to-b bg-clip-text text-transparent`} style={{ backgroundImage: `linear-gradient(to bottom, ${gradientFrom}, #FF0000)` }}>
              <span>{t("bannerWord1")}</span>
              <br />
              <span>{t("bannerWord2")}</span>
              <br />
              <span>{t("bannerWord3")}</span>
            </h1>
            <p className={`text-sm mb-6 text-muted-foreground ${mobileDescWidth}`}>
              {t("homeDesc")}
            </p>
          </div>
          <Image
            src="/HomeBannerRobot.svg"
            alt="Home Banner Robot"
            width={300}
            height={300}
            className="w-[280px] h-auto self-center"
          />
        </div>
      </div>

      {/* Tablet+ Layout - card with border */}
      <div className="hidden sm:block relative sm:w-[600px] sm:h-[400px] md:w-[720px] md:h-[450px] lg:w-[900px] lg:h-[500px] xl:w-[1000px] xl:h-[530px] 2xl:w-[1040px] 2xl:h-[550px] mx-auto overflow-hidden rounded-3xl border-2 border-foreground/30 backdrop-blur-sm bg-white/3 z-0">
        <div className="absolute sm:top-6 sm:left-8 md:top-8 md:left-10 lg:top-10 lg:left-12 z-20 sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px] text-left" style={{ fontFamily }}>
          {/* INTRODUCING label */}
          <p className="sm:text-xl md:text-2xl lg:text-3xl font-light sm:mb-2 text-foreground">{t("bannerIntro")}</p>
          
          {/* Main heading with gradient */}
          <h1 className={`${tabletHeadingSize} font-semibold leading-[1.1] sm:mb-2 bg-gradient-to-b bg-clip-text text-transparent`} style={{ backgroundImage: `linear-gradient(to bottom, ${gradientFrom}, #FF0000)` }}>
            <span>
              {t("bannerWord1")}
            </span>
            <br />
            <span>
              {t("bannerWord2")}
            </span>
            <br />
            <span>
              {t("bannerWord3")}
            </span>
          </h1>
          
          {/* Description text */}
          <p className={`sm:text-base md:text-lg mb-6 text-muted-foreground ${tabletDescWidth}`}>
            {t("homeDesc")}
          </p>
          
          {/* Get Started button */}
          <button 
            onClick={startAutoScroll}
            className="sm:px-4 sm:py-3 rounded-3xl border border-foreground/50 text-foreground text-xs hover:bg-foreground/10 transition-colors cursor-pointer"
          >
            {t("bannerButton")}
          </button>
        </div>
        <Image
          src="/HomeBannerRobot.svg"
          alt="Home Banner Robot"
          width={500}
          height={204}
          className="absolute bottom-0 sm:right-0 sm:w-[240px] md:w-[300px] lg:w-[380px] xl:w-[450px] z-10 opacity-80 sm:opacity-100"
        />
      </div>
    </div>
  );
}
