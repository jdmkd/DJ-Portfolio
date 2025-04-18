import { useState } from "react";

const HoverWordFollowEffect = ({ text }) => {
  const [positions, setPositions] = useState({});

  const handleMouseMove = (e, index) => {
    const wordRect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - wordRect.left - wordRect.width / 2;
    const offsetY = e.clientY - wordRect.top - wordRect.height / 2;

    setPositions((prev) => ({
      ...prev,
      [index]: {
        x: offsetX * 0.25,
        y: offsetY * 0.25,
      },
    }));
  };

  const handleMouseLeave = (index) => {
    setPositions((prev) => ({
      ...prev,
      [index]: { x: 0, y: 0 },
    }));
  };

  return (
    <p className="text-center flex flex-wrap justify-center gap-x-2 leading-relaxed h5 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-10">
      {text.split(" ").map((word, index) => {
        const pos = positions[index] || { x: 0, y: 0 };

        return (
          <span
            key={index}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="inline-block transition-transform duration-300 ease-linear will-change-transform cursor-pointer"
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px)`,
            }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
};

export default HoverWordFollowEffect;
