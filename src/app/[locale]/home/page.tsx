"use client";

import CareerSection from "@/app/[locale]/(landing)/components/abovefoot/CareerSection";
import OpportunitiesSection from "@/app/[locale]/(landing)/components/opportunities/OpportunitiesSection";
import GlobalSuccessSection from "@/app/[locale]/(landing)/components/success/GlobalSuccessSection";
// Update the import path below to match the actual location of GradientBackground
import HomeLayout from "../(landing)/components/underhead/HomeLayout"; 
import StepsSection from "@/app/[locale]/(landing)/components/steps/StepsSection";

export default function Home() {
  return (
    <main>
      <HomeLayout />
      <OpportunitiesSection />
      <GlobalSuccessSection />
      <CareerSection />
      <StepsSection />
    </main>
  );
}
