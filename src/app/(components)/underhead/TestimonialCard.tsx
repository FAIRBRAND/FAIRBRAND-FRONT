"use client";

import Image from "next/image";

export default function TestimonialCard() {
  return (
    <>
      <div className="min-h-scree flex items-center justify-center gap-20">
        <div className="w-full h-auto">
          {/* Top row with 60+ card and testimonial */}
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 gap-4 ">
            <div className="bg-white/7 backdrop-blur-md rounded-[2rem] gap-4 border border-white transition-all duration-300 hover:scale-[1.02] shadow-2xl flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="text-6xl lg:text-7xl font-bold text-white">
                60+
              </div>
              <div className="text-xl lg:text-2xl font-bold text-white leading-tight">
                Professionals
                <br />
                Empowered
              </div>
            </div>

            <div className="bg-white/7 backdrop-blur-md rounded-[2rem] gap-4 p-6 border border-white transition-all duration-300 hover:scale-[1.02] shadow-2xl flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="relative z-10">
                <div className="flex items-start bottom-0 left-0">
                  <div className="flex-1">
                    <div className="font-bold text-white text-lg">
                      Marie L., Successful Candidate
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      width={64}
                      height={64}
                      alt="Marie L."
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-white/95 text-base italic leading-relaxed">
                  Fair Brand helped me land my dream job abroad after feeling
                  stuck for years
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/7 backdrop-blur-md rounded-[2rem] gap-4 mb-4 p-6 border border-white transition-all duration-300 hover:scale-[1.02] shadow-2xl flex flex-col items-center justify-center text-center min-h-[200px]">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <p className="text-white/80 text-base leading-relaxed max-w-sm md:w-1/2">
                We have helped over 60 skilled professionals achieve their
                dreams
              </p>

              <div className="space-y-1 max-w-sm md:w-1/2 md:text-right">
                <h3 className="text-white font-bold text-xl leading-tight">
                  Valuable Career Insights Provided
                </h3>
                <p className="text-white/90 text-base leading-relaxed">
                  Gain insights from our comprehensive coaching experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
