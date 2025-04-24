"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ScrollParallax } from "react-just-parallax";
import AnimatedText from "../widgets/AnimatedText";
import Section from "../widgets/Section";
import {ooorganize,x1,x2,} from "../../assets"
import HoverWordFollowEffect from "../widgets/HoverWordFollowEffect";

const Hero = () => {
  const parallaxRef = useRef(null);
  // const scrollContainerRef = useRef(null);
  const [usingScanner, setusingScanner]=useState(false);

    const toggleNavigation = () => {
      const toggleScannerItem = document.querySelector('.usingScanner');
      if (usingScanner) {
        setusingScanner(false);
        toggleScannerItem.classList.toggle('active');
      } else {
        setusingScanner(true);
        toggleScannerItem.classList.remove('active');
      }
    };
  
    const handleClick = () => {
      if (!usingScanner) return;
  
      setusingScanner(false);
    };
  
  return (
    <Section
      className="py-[1rem] lg:py[1rem] lg:py[1rem] bg-black opacity-[10] z-0"
      crosses
      crossesOffset=" lg:translate-y-[1.25rem]"
      id="hero"
      
    >
      
      <div className="container relative " ref={parallaxRef}>
        <ScrollParallax 
            strength={0.3}
            // parallaxContainerRef={parallaxRef}
            // lerpEase={.3}
            shouldPause={true}
            zIndex={-1}
        >
          
          <Image
              className="w-fit absolute animate-pulse grayscale-5 opacity-1 transition-all px-[3rem] pt-[1.75rem] lg:pt-[2.25rem] z-1"
              src={x2}
              width={100}
              height={100}
              alt="Grid"
          />
        </ScrollParallax>
        
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        
          <ScrollParallax>
            <AnimatedText text="Hi there I'm DJ" />
            <AnimatedText text="Full-stack Developer" />

            {/* <HoverWordFollowEffect text="Welcome to my portfolio showcasing a culmination of my expertise in full-stack web development." /> */}
          </ScrollParallax>
          <h1 className="text-center flex flex-wrap justify-center gap-x-2 leading-relaxed h5 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-10">
              <span className="inline-block cursor-pointer">
              Welcome to my portfolio showcasing a culmination of my expertise in full-stack web development.
              </span>
          </h1>
        </div>
        
      </div>
    </Section>
  );
};

export default Hero;
