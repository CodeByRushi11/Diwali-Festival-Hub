// components/Footer.js
import React from "react";
import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-12 relative overflow-hidden">
      {/* Footer Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img
              src={logo}
              alt="Diwali Logo"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div>
              <h3 className="text-xl font-bold font-serif">
                Diwali Celebrations
              </h3>
              <p className="text-yellow-100 text-sm">
                Lighting up lives since eternity
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            {["✨", "🪔", "🎆", "🌟"].map((emoji, index) => (
              <div
                key={index}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg hover:bg-white/30 transition-colors duration-300 cursor-pointer transform hover:scale-110"
              >
                {emoji}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-yellow-100">
              Made with ❤️ by Rushikesh Ingole & Family
            </p>
            <p className="text-yellow-200 text-sm mt-1">
              Wishing you a prosperous and joyful Diwali!
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-yellow-400/30 text-center">
          <p className="text-yellow-200">
            "May the divine light of Diwali bring peace, prosperity, and
            happiness to your life"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
