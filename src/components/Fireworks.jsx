// components/Fireworks.js
import React, { useState, useEffect } from "react";

const Fireworks = () => {
  const [fireworks, setFireworks] = useState([]);
  const [sparkles, setSparkles] = useState([]);

  // Firework colors for variety
  const fireworkColors = [
    "bg-yellow-400",
    "bg-orange-400",
    "bg-red-400",
    "bg-pink-400",
    "bg-purple-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-teal-400",
  ];

  useEffect(() => {
    // Create initial fireworks
    const createFireworks = () => {
      const newFireworks = [];
      for (let i = 0; i < 8; i++) {
        newFireworks.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 3,
          color:
            fireworkColors[Math.floor(Math.random() * fireworkColors.length)],
          size: Math.random() * 3 + 2,
          particles: 8 + Math.floor(Math.random() * 8),
        });
      }
      setFireworks(newFireworks);
    };

    // Create initial sparkles
    const createSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 30; i++) {
        newSparkles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 2 + Math.random() * 3,
          size: Math.random() * 2 + 1,
        });
      }
      setSparkles(newSparkles);
    };

    createFireworks();
    createSparkles();

    // Add new fireworks periodically
    const fireworkInterval = setInterval(() => {
      setFireworks((prev) => {
        const newFirework = {
          id: Date.now(),
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: 0,
          color:
            fireworkColors[Math.floor(Math.random() * fireworkColors.length)],
          size: Math.random() * 3 + 2,
          particles: 8 + Math.floor(Math.random() * 8),
        };
        return [...prev.slice(-6), newFirework];
      });
    }, 2000);

    return () => clearInterval(fireworkInterval);
  }, []);

  return (
    <>
      {/* Main Fireworks */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {fireworks.map((fw) => (
          <div
            key={fw.id}
            className="absolute"
            style={{
              left: `${fw.left}%`,
              top: `${fw.top}%`,
            }}
          >
            {/* Firework Burst */}
            <div
              className={`absolute rounded-full ${fw.color} animate-firework-burst`}
              style={{
                width: `${fw.size}px`,
                height: `${fw.size}px`,
                animationDelay: `${fw.delay}s`,
              }}
            >
              {/* Firework Particles */}
              {[...Array(fw.particles)].map((_, i) => {
                const angle = (i * 360) / fw.particles;
                const distance = 20 + Math.random() * 30;
                return (
                  <div
                    key={i}
                    className={`absolute rounded-full ${fw.color} animate-firework-particle`}
                    style={{
                      width: `${fw.size * 0.8}px`,
                      height: `${fw.size * 0.8}px`,
                      "--particle-angle": `${angle}deg`,
                      "--particle-distance": `${distance}px`,
                      animationDelay: `${fw.delay + 0.2}s`,
                    }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Sparkle Effects */}
      <div className="fixed inset-0 pointer-events-none z-20">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute bg-yellow-300 rounded-full animate-twinkle"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Embers */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float-ember ${
              i % 3 === 0
                ? "bg-yellow-400"
                : i % 3 === 1
                ? "bg-orange-400"
                : "bg-red-400"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-200 animate-pulse-glow"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              width: `${50 + i * 20}px`,
              height: `${50 + i * 20}px`,
              opacity: 0.1 + i * 0.02,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Fireworks;
