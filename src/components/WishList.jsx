// components/WishList.js
import React, { useState } from "react";

const WishList = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const wishCategories = {
    traditional: {
      name: "Traditional",
      icon: "🪔",
      color: "from-yellow-500 to-orange-500",
    },
    modern: {
      name: "Modern",
      icon: "✨",
      color: "from-blue-500 to-purple-500",
    },
    spiritual: {
      name: "Spiritual",
      icon: "🙏",
      color: "from-green-500 to-teal-500",
    },
  };

  const wishes = [
    {
      text: "May the divine light of Diwali bring peace, prosperity, and happiness to your life!",
      emoji: "🌟",
      category: "spiritual",
    },
    {
      text: "Wishing you a sparkling festival of lights filled with endless joy and laughter!",
      emoji: "🎇",
      category: "modern",
    },
    {
      text: "Let the diyas shine bright and bring prosperity, health, and wealth to your life!",
      emoji: "🪔",
      category: "traditional",
    },
    {
      text: "Happy Diwali! May your home be blessed with peace, happiness, and abundance.",
      emoji: "🏮",
      category: "traditional",
    },
    {
      text: "Celebrate this Diwali with warmth, wisdom, and wonderful memories to cherish forever!",
      emoji: "💫",
      category: "modern",
    },
    {
      text: "May the lamps of joy, peace, and prosperity illuminate your life this Diwali!",
      emoji: "🔥",
      category: "spiritual",
    },
    {
      text: "Wishing you and your family a Diwali filled with sweet moments and brighter beginnings!",
      emoji: "🍬",
      category: "modern",
    },
    {
      text: "May Goddess Lakshmi bless you with wealth and success in all your endeavors!",
      emoji: "💰",
      category: "spiritual",
    },
    {
      text: "Let's celebrate the victory of light over darkness and good over evil! Shubh Deepawali!",
      emoji: "⭐",
      category: "traditional",
    },
  ];

  const filteredWishes =
    selectedCategory === "all"
      ? wishes
      : wishes.filter((wish) => wish.category === selectedCategory);

  const copyWish = async (wish, index) => {
    try {
      await navigator.clipboard.writeText(wish.text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      alert("Failed to copy wish");
    }
  };

  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full mb-4 animate-pulse-glow">
            <span className="text-2xl">✨</span>
          </div>
          <h2 className="text-5xl font-bold text-purple-700 mb-4 font-serif">
            Diwali Wishes Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beautiful Diwali wishes to share with your loved ones. Click copy to
            spread the joy!
          </p>
        </div>

        {/* Category Filters */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                : "bg-white text-gray-700 shadow-md hover:shadow-lg"
            }`}
          >
            🌈 All Wishes
          </button>
          {Object.entries(wishCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-white text-gray-700 shadow-md hover:shadow-lg"
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Wishes Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredWishes.map((wish, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-yellow-200 overflow-hidden h-full flex flex-col">
                {/* Category Header */}
                <div
                  className={`bg-gradient-to-r ${
                    wishCategories[wish.category].color
                  } py-3 px-6 text-white text-center`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-xl">
                      {wishCategories[wish.category].icon}
                    </span>
                    <span className="font-semibold">
                      {wishCategories[wish.category].name}
                    </span>
                  </div>
                </div>

                {/* Wish Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-4xl mb-4 text-center animate-wiggle">
                    {wish.emoji}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed text-center flex-1">
                    {wish.text}
                  </p>{" "}
                  {/* Fixed: Added closing p tag */}
                  <button
                    onClick={() => copyWish(wish, index)}
                    className={`w-full py-4 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 mt-4 ${
                      copiedIndex === index
                        ? "bg-green-500 text-white shadow-lg"
                        : "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-lg"
                    }`}
                  >
                    {copiedIndex === index ? (
                      <span className="flex items-center justify-center space-x-2">
                        <span>✅</span>
                        <span>Copied!</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>📋</span>
                        <span>Copy Wish</span>
                      </span>
                    )}
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                  <div className="absolute inset-[2px] rounded-3xl bg-white"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
            </div>
          ))}
        </div>

        {/* Share Message */}
        <div
          className="text-center mt-12 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="glass-effect rounded-2xl p-6 inline-block">
            <p className="text-xl text-gray-700 mb-2">
              Share these wishes and spread the Diwali cheer! 🎉
            </p>
            <div className="flex justify-center space-x-4 text-2xl">
              <span className="animate-bounce">📱</span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.1s" }}
              >
                💬
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                📤
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishList;
