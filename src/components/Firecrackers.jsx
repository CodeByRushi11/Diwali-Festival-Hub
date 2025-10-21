// components/Firecrackers.js
import React, { useEffect, useState } from "react";

const Firecrackers = () => {
  const [firecrackers, setFirecrackers] = useState([]);

  useEffect(() => {
    // Create multiple firecracker bursts
    const newFirecrackers = [];
    for (let i = 0; i < 8; i++) {
      newFirecrackers.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
      });
    }
    setFirecrackers(newFirecrackers);

    // Auto-remove after animation
    const timer = setTimeout(() => {
      setFirecrackers([]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {firecrackers.map((fc) => (
        <div
          key={fc.id}
          className="absolute firecracker-burst"
          style={{
            left: `${fc.left}%`,
            top: `${fc.top}%`,
            animationDelay: `${fc.delay}s`,
          }}
        >
          {/* Firecracker Burst */}
          <div className="relative w-4 h-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 firecracker-particle"
                style={{
                  transform: `rotate(${i * 30}deg)`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full absolute firecracker-trail"></div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Sound Effect Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full animate-pulse">
        🎆 Firecrackers Bursting! 🎆
      </div>
    </div>
  );
};

export default Firecrackers;
