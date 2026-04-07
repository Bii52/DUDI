"use client";

import InfoBar from "./info-bar";
import HomeBanner from "./home-banner";

export default function HomeSection() {
  return (
    <div
      id="home"
      className="relative flex flex-col items-center text-center pb-2"
    >
      {/*Main content*/}
      <div className="relative z-10 mx-auto flex flex-col items-center w-full pt-18 sm:pt-20">
        <HomeBanner />
        <div className="mt-8">
        </div>
      </div>

      <InfoBar />
    </div>
  );
}
