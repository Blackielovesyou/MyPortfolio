import React, { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, duration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

const generateStars = () => {
  const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

  const newStars = [];

  for (let i = 0; i < numberOfStars; i++) {
    newStars.push({
      id: i,
      size: Math.random() * 2.5 + 0.5, // More subtle size
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.7 + 0.3,
      animationDuration: Math.random() * 3 + 2, // 2s to 5s
      animationDelay: Math.random() * 5, // random delay for twinkle
      color: Math.random() > 0.97 ? "#ffe9c4" : "#fff", // occasional yellowish star
    });
  }

  setStars(newStars);
};



const generateMeteors = () => {
  const numberOfMeteors = 30;
  const newMeteors = [];

  for (let i = 0; i < numberOfMeteors; i++) {
    newMeteors.push({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 120 - 10, // Range: -10% (off-screen left) to 110% (off-screen right)
      y: Math.random() * 30,
      delay: Math.random() * 8,
      animationDuration: Math.random() * 2 + 2.5,
      angle: 210 + Math.random() * 20,
      opacity: Math.random() * 0.5 + 0.5,
    });
  }

  setMeteors(newMeteors);
};

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}



           {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size *30 + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};