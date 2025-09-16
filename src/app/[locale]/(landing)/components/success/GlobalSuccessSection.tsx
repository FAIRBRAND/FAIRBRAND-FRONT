"use client";

import UnlockPathSection from "./UnlockPathSection";
import BenefitsCard from "./BenefitsCard";

export default function GlobalSuccessSection() {
  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 bg-golden-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center text-center lg:text-left">
          {/* Left */}
          <div className="order-1 lg:order-2">
            <UnlockPathSection />
          </div>
          {/* Right */}
          <div className="order-2 lg:order-1">
            <BenefitsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
