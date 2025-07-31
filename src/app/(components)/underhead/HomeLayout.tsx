"use client";

import { useEffect, useState } from "react";
import ExploreCareerCard from "./ExploreCareerCard";
import TestimonialCard from "./TestimonialCard";
import GradientBackground from "./GradientBackground";

export default function HomeLayout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="h-full relative overflow-hidden" id="about">
      <GradientBackground />
      <div className="relative z-10 pt-45 sm:pt-42 md:pt-50 lg:pt-42 pb-8 sm:pb-12 md:pb-8 lg:pb-5 px-2 sm:px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
        <div className="flex justify-center items-center min-h-[calc(100vh-13rem)]">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 sm:gap-6 lg:gap-12 xl:gap-16 w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center lg:text-left">
            <div className={`flex-1 w-full flex flex-col justify-center h-full animate-slide-in-left ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'} smooth-transition-slow`}>
              <ExploreCareerCard />
            </div>
            <div className={`flex-1 w-full flex flex-col justify-center h-full animate-slide-in-right ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'} smooth-transition-slow`} style={{ transitionDelay: '0.2s' }}>
              <TestimonialCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
