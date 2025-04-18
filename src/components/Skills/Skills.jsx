"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Image from "next/image";
import Heading from "../widgets/Heading";
import Section from "../widgets/Section";
import { GradientLight } from "../design/Benefits";
import Arrow from "../../assets/svg/Arrow";
import ClipPath from "../../assets/svg/ClipPath";
import { benefits } from "../../constants";
// import { javascriptIcon,
//   nextjsIcon,
//   reactjsIcon,
//   threejsIcon,
//   htmlIcon,
//   cssIcon,
//   tailwindIcon,
//   bootstrapIcon,
//   githubIcon,
//   graphqlIcon,
//   webpackIcon, } from "../assets"
import { techSkills } from "../../constants";

const Skills = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".container",
        pin: true, // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: "labels", // snap to the closest label in the timeline
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        },
      },
    });

    // add animations and labels to the timeline
    tl.addLabel("start")
      .from(".box p", { scale: 0.3, rotation: 45, autoAlpha: 0 })
      .addLabel("color")
      .from(".box", { backgroundColor: "#28a92b" })
      .addLabel("spin")
      .to(".box", { rotation: 360 })
      .addLabel("end");
  }, []);

  return (
    <Section
      crosses
      id="skills"
      className="bg-black"
      // crossesOffset=" lg:translate-y-[0.25rem]"
    >
      <div className="container pb-[1rem] md:pb-[1rem]">
        <Heading
          className="text-[10rem] font-bold my-[2rem!important]"
          title="Tech Skills"
        />

        <div className=" mb-10 ">
          <div
            ref={boxRef}
            className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 w-full mb-2 content-center items-center px-[2rem] py-[1rem] bg-gray-900 bg-transparent border-transparent opacity-[10] border-[1px] border-gray-800 rounded-[10px]"
          >
            {techSkills.map((item, index) => (
              <div
                key={item.id}
                className="relative flex flex-shrink grow justify-center items-center px-[.5rem] py-[1rem] bg-slate-600/50 opacity-[10] border-[1px] rounded-[10px] border-transparent border-slate-600 shadow cursor-pointer hover:border-gray-300/40 hover:bg-gray-400/50 hover:shadow-gray-400/50"
              >
                <Image
                  src={item.imageUrl}
                  width={100}
                  height={100}
                  alt={"xx"}
                />
              </div>
            ))}

            {/* { techSkills.map((item, index) => (

                
                <div 
                key={item.id}
                className="relative flex flex-shrink grow justify-center items-center px-[1rem] py-[1rem] bg-slate-700 opacity-[10] border-[1px] border-transparent border-slate-600 rounded-[10px] cursor-pointer hover:border-gray-300 hover:bg-gray-400 hover:shadow-gray-400">
                  <Image
                    src={item.imageUrl}  
                    width={100}
                    height={100}
                    alt={"xx"}
                  />
                </div>
                ))} */}

            {/* {<GradientLight />} */}
          </div>
        </div>

        
      </div>
    </Section>
  );
};

export default Skills;
