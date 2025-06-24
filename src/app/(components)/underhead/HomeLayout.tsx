import ExploreCareerCard from "@/app/(components)/underhead/ExploreCareerCard";
import TestimonialCard from "@/app/(components)/underhead/TestimonialCard";
import GradientBackground from "@/app/(components)/underhead/GradientBackground";

export default function HomeLayout() {
  return (
    <div className="h-full relative overflow-hidden">
      <GradientBackground />
      <div className="relative z-10 pt-52 pb-20 px-4 lg:px-30">
        <div className="flex justify-center items-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full max-w-7xl mx-auto text-center lg:text-left">
            <div className="flex-1">
              <ExploreCareerCard />
            </div>
            <div className="flex-1 space-y-6 pt-4">
              <TestimonialCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
