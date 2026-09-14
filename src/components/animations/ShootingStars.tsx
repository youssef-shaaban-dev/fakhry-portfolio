"use client";

import { useEffect, useState } from "react";

export function ShootingStars() {
  const [meteors, setMeteors] = useState<{ id: number; top: number; left: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate random meteors
    const generateMeteors = () => {
      const newMeteors = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100, // random start position Y (%)
        left: Math.random() * 100, // random start position X (%)
        delay: Math.random() * 5, // random delay before starting
        duration: Math.random() * 3 + 3, // duration between 3s and 6s
      }));
      setMeteors(newMeteors);
    };

    generateMeteors();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#0a0a0c]">
      {/* Background glow to simulate deep space */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--accent)]/5 via-transparent to-transparent opacity-50 blur-[100px]"></div>
      
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
