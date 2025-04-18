// src/components/AnimatedText.js
import React from "react";

const AnimatedText = ({ text, className="", rotateClass, baseColor, as: Tag = "h1", }) => {
  const colors = [
    "text-red-500", "text-green-600", "text-blue-600",
    "text-yellow-500", "text-pink-500", "text-orange-500",
    "text-gray-600", "text-slate-500", "text-purple-500"
  ];

  const hoverColors = [
    "hover:text-red-600", "hover:text-green-700", "hover:text-blue-700",
    "hover:text-yellow-600", "hover:text-pink-600", "hover:text-orange-600",
    "hover:text-gray-700", "hover:text-slate-600", "hover:text-purple-600"
  ];

  const defaultClasses = "text-[2rem] sm:text-[3.3rem] md:text-[4rem] lg:text-[5rem] font-bold my-[1rem] sm:my-[2rem] md:my-[2.5rem] pb-[1rem] sm:pb-[2rem] md:pb-[2.3rem] flex flex-wrap transition-all-400 justify-center items-center cursor-pointer"

  return (
    <h1 className={`${className || defaultClasses}`}>
      {text.split("").map((char, index) => {
        const base = colors[index % colors.length];
        const hover = hoverColors[index % hoverColors.length];
        
        // const hover = hoverColors[Math.floor(Math.random() * hoverColors.length)];
        // const rotateClass = `rotate-[${(index % 5) * 3 - 6}deg]`;
        return (
          <span
            key={`char-${char}-${index}`}
            className={`${baseColor ? base : ''} ${hover} inline-block hover:translate-y-2 ${rotateClass}  hover:${'rotate-0'} relative transition-all duration-300 ease-in-out`}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </h1>
  );
};

export default AnimatedText;
