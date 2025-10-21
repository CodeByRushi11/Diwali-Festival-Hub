// components/Hero.js
import React from "react";
import diya from "../assets/diya.jpg";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-48 h-48 bg-orange-400 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-400 rounded-full blur-lg animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-700 mb-6 font-serif leading-tight">
                Happy
                <span className="block text-orange-600 animate-pulse bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text ">
                  Diwali
                </span>
              </h1>

              <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border-2 border-yellow-300 transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-500 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-yellow-500 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-yellow-500 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-500 rounded-br-lg"></div>

                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                  May this Diwali bring light, joy, and prosperity to your life.
                  <br />
                  On behalf of{" "}
                  <span className="font-bold text-orange-600 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">
                    Rushikesh Ingole & Family
                  </span>
                  , we send you our heartfelt wishes.
                </p>

                <div className="flex justify-center lg:justify-start space-x-4">
                  {["✨", "🪔", "🎆", "🌟", "💫"].map((emoji, index) => (
                    <div
                      key={index}
                      className="animate-bounce"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <span className="text-4xl">{emoji}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Diya Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-75 animate-pulse"></div>
              <div className="relative">
                <img
                  src={diya}
                  alt="Beautiful Diya"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl transform hover:rotate-3 transition-transform duration-700 border-4 border-white"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-yellow-200 opacity-20 blur-md animate-pulse"></div>
              </div>

              {/* Floating elements around diya */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
