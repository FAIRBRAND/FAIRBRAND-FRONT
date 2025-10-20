"use client";

import CareerSection from "@/app/[locale]/(landing)/components/abovefoot/CareerSection";
import OpportunitiesSection from "@/app/[locale]/(landing)/components/opportunities/OpportunitiesSection";
import GlobalSuccessSection from "@/app/[locale]/(landing)/components/success/GlobalSuccessSection";
// Update the import path below to match the actual location of GradientBackground
import HomeLayout from "../(landing)/components/underhead/HomeLayout"; 
import StepsSection from "@/app/[locale]/(landing)/components/steps/StepsSection";
import Header from "@/shared/components/layout/navbar/Header";
import Footer from "@/shared/components/layout/footer/Footer";
import ChatButton from "@/app/(components)/home/buttons/chat_button";
import {useState} from "react";
import ChatPopup from "@/app/(components)/home/chat_popup";

export default function Home() {
    const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main>
      <Header/>
      <HomeLayout />
      <OpportunitiesSection />
      <GlobalSuccessSection />
      <CareerSection />
      <StepsSection />
      <Footer/>
      <ChatButton onClick={() => setIsChatOpen(true)} />
      {isChatOpen && <ChatPopup mode="normal" onClose={() => setIsChatOpen(false)} />}
    </main>
  );
}
