// components/Header.js
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.webp";

const Header = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const tabs = [
    { id: "home", label: "Home", icon: "🪔" },
    { id: "wishes", label: "Wishes", icon: "✨" },
    { id: "audio", label: "Music", icon: "🎵" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-yellow-600 to-orange-600 shadow-2xl py-2"
          : "bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="relative">
              <img
                src={logo}
                alt="Diwali Logo"
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white shadow-lg transition-transform duration-300 ${
                  isScrolled ? "scale-90" : "scale-100"
                }`}
              />
              <div className="absolute -inset-1 bg-yellow-400 rounded-full blur-sm opacity-75 animate-pulse"></div>
            </div>
            <div
              className={`transition-all duration-300 ${
                isScrolled ? "scale-95" : "scale-100"
              }`}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white font-serif">
                Diwali Celebrations
              </h1>
              <p className="text-yellow-100 text-sm">
                Spread the light of happiness
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-1 bg-white/20 rounded-xl p-1 backdrop-blur-sm border border-white/30">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? "bg-white text-orange-600 shadow-lg scale-105"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <span className="text-lg animate-bounce">{tab.icon}</span>
                <span className="font-semibold">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-200 to-transparent">
        <div
          className="h-full bg-yellow-300 transition-all duration-300"
          style={{
            width: `${isScrolled ? "100%" : "0%"}`,
            opacity: isScrolled ? 1 : 0,
          }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
