"use client";

import { useEffect, useState } from "react";
import UnlockPathSection from "./UnlockPathSection";
import BenefitsCard from "./BenefitsCard";

export default function GlobalSuccessSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('success');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 bg-golden-beige" id="success">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center text-center lg:text-left">
          {/* Left */}
          <div className={`order-1 lg:order-2 smooth-transition-slow ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <UnlockPathSection />
          </div>
          {/* Right */}
          <div className={`order-2 lg:order-1 smooth-transition-slow ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-10px]'}`} style={{ transitionDelay: '0.2s' }}>
            <BenefitsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
