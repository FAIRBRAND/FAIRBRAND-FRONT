"use client";

import UnlockPathSection from "./UnlockPathSection";
import BenefitsCard from "./BenefitsCard";

export default function GlobalSuccessSection() {
  return (
    <section className="p-6 pt-20 pb-20 bg-golden-beige">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
