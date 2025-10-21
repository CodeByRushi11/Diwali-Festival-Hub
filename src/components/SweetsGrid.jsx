// components/SweetsGrid.js
import React from "react";

const SweetsGrid = () => {
  const sweets = [
    {
      icon: "🍬",
      name: "Ladoo",
      description: "Sweet round treats made from flour, sugar, and ghee",
      color: "from-yellow-100 to-yellow-300",
    },
    {
      icon: "🥠",
      name: "Kaju Katli",
      description: "Diamond-shaped cashew fudge delicacies",
      color: "from-white to-yellow-100",
    },
    {
      icon: "🍥",
      name: "Jalebi",
      description: "Crispy, syrupy swirls of happiness",
      color: "from-orange-100 to-orange-300",
    },
    {
      icon: "🎂",
      name: "Barfi",
      description: "Rich, condensed milk sweet squares",
      color: "from-white to-pink-100",
    },
    {
      icon: "🍮",
      name: "Gulab Jamun",
      description: "Soft milk balls in rose-flavored syrup",
      color: "from-pink-100 to-red-100",
    },
    {
      icon: "🧁",
      name: "Rasgulla",
      description: "Spongy cottage cheese balls in light syrup",
      color: "from-white to-yellow-50",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-300 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-700 mb-4 font-serif">
            Diwali Sweets Delights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Traditional sweets that make Diwali celebrations even sweeter
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sweets.map((sweet, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`bg-gradient-to-br ${sweet.color} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-white`}
              >
                {/* Sweet Icon */}
                <div className="text-center mb-4">
                  <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {sweet.icon}
                  </div>
                </div>

                {/* Sweet Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-orange-800 mb-2">
                    {sweet.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {sweet.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-orange-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Sparkles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
              <div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-orange-200 inline-block">
            <p className="text-xl text-gray-700 mb-4">
              "May your life be as sweet as these Diwali treats!"
            </p>
            <div className="flex justify-center space-x-4 text-3xl">
              <span className="animate-bounce">🍬</span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                🥠
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                🍥
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SweetsGrid;
