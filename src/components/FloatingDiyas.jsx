// components/FloatingDiyas.js
import React from "react";

const FloatingDiyas = () => {
  const floatingDiyas = [
    { id: 1, left: 10, delay: 0, size: "w-8 h-8" },
    { id: 2, left: 20, delay: 2, size: "w-6 h-6" },
    { id: 3, left: 30, delay: 4, size: "w-10 h-10" },
    { id: 4, left: 70, delay: 1, size: "w-7 h-7" },
    { id: 5, left: 80, delay: 3, size: "w-9 h-9" },
    { id: 6, left: 90, delay: 5, size: "w-5 h-5" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingDiyas.map((diya) => (
        <div
          key={diya.id}
          className={`absolute ${diya.size} animate-float-diwa`}
          style={{
            left: `${diya.left}%`,
            animationDelay: `${diya.delay}s`,
            animationDuration: "15s",
          }}
        >
          <div className="w-full h-full relative">
            {/* Diya Base */}
            <div className="absolute inset-0 bg-orange-500 rounded-full transform rotate-45"></div>
            {/* Diya Flame */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-3 bg-yellow-400 rounded-full animate-flicker"></div>
              <div className="w-1 h-2 bg-orange-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingDiyas;
