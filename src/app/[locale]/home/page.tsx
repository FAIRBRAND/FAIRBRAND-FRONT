"use client";

import CareerSection from "@/app/(components)/abovefoot/CareerSection";
import OpportunitiesSection from "@/app/(components)/opportunities/OpportunitiesSection";
import GlobalSuccessSection from "@/app/(components)/success/GlobalSuccessSection";
// Update the import path below to match the actual location of GradientBackground
import HomeLayout from "@/app/(components)/underhead/HomeLayout";

export default function Home() {
  return (
    <main>
      <HomeLayout />
      <OpportunitiesSection />
      <GlobalSuccessSection />
      <CareerSection />
    </main>
  );
}
