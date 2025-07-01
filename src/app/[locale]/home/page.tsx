"use client";

import CareerSection from "@/app/(components)/abovefoot/CareerSection";
import OpportunitiesSection from "@/app/(components)/opportunities/OpportunitiesSection";
import GlobalSuccessSection from "@/app/(components)/success/GlobalSuccessSection";
// Update the import path below to match the actual location of GradientBackground
import HomeLayout from "@/app/(components)/underhead/HomeLayout";
import StepsSection from "@/app/(components)/steps/StepsSection";

export default function Home() {
  return (
    <main>
      <HomeLayout />
      <StepsSection />
      <OpportunitiesSection />
      <GlobalSuccessSection />
      <CareerSection />
    </main>
  );
}
