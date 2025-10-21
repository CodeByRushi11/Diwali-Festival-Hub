// components/DiyaGrid.js
import React from "react";

const DiyaGrid = () => {
  const diyaFacts = [
    {
      icon: "🪔",
      title: "Symbol of Light",
      description:
        "Diyas represent the victory of light over darkness and knowledge over ignorance",
      color: "from-yellow-100 to-yellow-300",
      flame: "🔥",
    },
    {
      icon: "🔥",
      title: "Purity & Goodness",
      description:
        "The sacred flame symbolizes purity, clarity, and the goodness within every soul",
      color: "from-orange-100 to-orange-300",
      flame: "✨",
    },
    {
      icon: "🙏",
      title: "Divine Prayer",
      description:
        "Lighting diyas is a spiritual form of prayer inviting divine blessings",
      color: "from-red-100 to-red-300",
      flame: "💫",
    },
    {
      icon: "💫",
      title: "Hope & Prosperity",
      description:
        "Each diya carries hopes for a brighter future and attracts positive energy",
      color: "from-purple-100 to-purple-300",
      flame: "🌟",
    },
    {
      icon: "🕉️",
      title: "Cosmic Energy",
      description:
        "Represents the cosmic energy that illuminates the path of righteousness",
      color: "from-blue-100 to-blue-300",
      flame: "☀️",
    },
    {
      icon: "❤️",
      title: "Unity & Love",
      description:
        "Brings families together, strengthening bonds with love and warmth",
      color: "from-pink-100 to-pink-300",
      flame: "💝",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full mb-4 animate-pulse-glow">
            <span className="text-2xl">🪔</span>
          </div>
          <h2 className="text-5xl font-bold text-yellow-700 mb-4 font-serif">
            The Sacred Diya
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Understanding the deep cultural, spiritual, and philosophical
            meaning behind the traditional lamp that illuminates our Diwali
            celebrations
          </p>
        </div>

        {/* Diya Facts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diyaFacts.map((fact, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Main Card */}
              <div
                className={`bg-gradient-to-br ${fact.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-2 border-white relative overflow-hidden h-full`}
              >
                {/* Animated Flame */}
                <div className="absolute top-4 right-4 text-2xl animate-flicker">
                  {fact.flame}
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {fact.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
                    {fact.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    {fact.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-3 left-3 w-6 h-6 bg-yellow-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 left-3 w-4 h-4 bg-orange-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Sparkles on Hover */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
              <div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 shadow-lg border border-yellow-200 inline-block max-w-2xl">
            <p className="text-2xl text-gray-800 italic mb-4 font-serif">
              "As we light the diya, we ignite the light within ourselves -
              removing darkness from our hearts and minds"
            </p>
            <div className="flex justify-center space-x-4 text-3xl">
              <span className="animate-bounce">🪔</span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                ✨
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                🌟
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiyaGrid;
