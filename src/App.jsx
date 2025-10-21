// App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WishList from "./components/WishList";
import DiyaGrid from "./components/DiyaGrid";
import SweetsGrid from "./components/SweetsGrid";
import Fireworks from "./components/Fireworks";
import Firecrackers from "./components/Firecrackers";
import AudioPlayer from "./components/AudioPlayer";
import Footer from "./components/Footer";
import FloatingDiyas from "./components/FloatingDiyas";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [showFirecrackers, setShowFirecrackers] = useState(false);

  useEffect(() => {
    // Show firecrackers occasionally
    const interval = setInterval(() => {
      setShowFirecrackers(true);
      setTimeout(() => setShowFirecrackers(false), 3000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-orange-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-3 h-3 bg-yellow-500 rounded-full animate-ping"></div>

        {/* Sparkles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <FloatingDiyas />
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="relative z-10 pt-20">
        {activeTab === "home" && (
          <>
            <Hero />
            <DiyaGrid />
            <SweetsGrid />
          </>
        )}
        {activeTab === "wishes" && <WishList />}
        {activeTab === "audio" && <AudioPlayer />}
      </div>

      <Fireworks />
      {showFirecrackers && <Firecrackers />}
      <Footer />
    </div>
  );
};

export default App;
