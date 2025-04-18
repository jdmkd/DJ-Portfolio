"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import SectionSvg from "../../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, {
      x: -100,
      opacity: 0,
      // delay:.4,
      duration: 1,
    });
    gsap.to(boxRef.current, {
      x: 0,
      opacity: 1,
      delay: 0.1,
      duration: 1,
    });
  }, []);

  return (
    <div
      ref={boxRef}
      id={id}
      className={`
      relative opacity-0
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-25 ${crosses ? "lg:py-20 xl:py-25" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
