"use client";

import UnlockPathSection from "./UnlockPathSection";
import BenefitsCard from "./BenefitsCard";

export default function GlobalSuccessSection() {
  return (
    <section className="py-16 px-4 bg-golden-beige">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - CTA Content */}
          <div>
            <UnlockPathSection />
          </div>

          {/* Right - Benefits Card */}
          <div>
            <BenefitsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
