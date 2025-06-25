"use client";

import UnlockPathSection from "./UnlockPathSection";
import BenefitsCard from "./BenefitsCard";

export default function GlobalSuccessSection() {
  return (
    <section className="pt-20 pb-20 bg-golden-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center text-center lg:text-left">
          {/* Left */}
          <div>
            <UnlockPathSection />
          </div>
          {/* Right */}
          <div>
            <BenefitsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
