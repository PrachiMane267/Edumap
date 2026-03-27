import React from "react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient text-white">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/assets/world.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              ⚡ AI-ML Powered Platform
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              EduMap: AI-ML Powered{" "}
              <span className="text-amber-300">
                Global Admission
              </span>{" "}
              Navigator
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Simplify your college selection journey with personalized
              recommendations, real-time comparisons, and structured admission
              guidance — all in one place.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-3 rounded-md font-semibold shadow-lg">
                Start Your Journey →
              </button>

              <button className="border border-white/30 px-8 py-3 rounded-md font-semibold hover:bg-white/10">
                View Recommendations
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="relative">

              {/* IMAGE CARD */}
              <div className="w-[480px] h-[340px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/assets/student.webp"   // ✅ FIXED PATH
                  alt="Students"
                  className="w-full h-full object-cover"
                />

                {/* Overlay for better look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-4 -left-6 bg-white text-black rounded-xl p-3 shadow-lg">
                <div className="text-xs">Match Score</div>
                <div className="font-bold">95% Match</div>
              </div>

              <div className="absolute -top-4 -right-6 bg-white text-black rounded-xl p-3 shadow-lg">
                <div className="text-xs">Countries</div>
                <div className="font-bold">5 Regions</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;