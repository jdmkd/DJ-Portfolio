import Button from "../widgets/Button";
import Heading from "../widgets/Heading";
import Section from "../widgets/Section";
import Tagline from "../widgets/Tagline";
import { check2, grid, loading1 } from "../../assets";
import { Gradient } from "../design/Roadmap";
import Image from "next/image";

import Project from "./project_data.json"
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <Section crosses id="projects" className="bg-black/60">
    <div className="container pb-[1rem] md:pb-[1rem]">
      <Heading
          className="text-[10rem] font-bold my-[2rem!important]"
          // tag="Projects that I am working on" 
          title="Project Works" 
        />
      {/* <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {Project.map((item, index) => (
          <div
            className={`md:flex even:md:translate-y-[5rem] p-0.25 rounded-[.8rem] bg-gray-200`}
            key={index}
          >
            
            <div className="relative p-8 bg-neutral-950 w-full rounded-[.8rem] overflow-hidden xl:p-13 justify-center content-center">
              <div className="absolute top-0 left-0 w-full">
                <Image
                  className="w-[650px] object-contain"
                  src={grid}
                  width={550}
                  height={550}
                  alt="Grid"
                />
              </div>
              <div className="relative z-1">
                <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-[2rem]">
                  <Tagline>{item.title}</Tagline>
                </div>

                <h4 className="h4 my-4">{item.title}</h4>

                <p className="body-2 text-blue-300">
                  {item.tech_stack.join(", ")}
                </p>

                <p className="body-2 my-[1rem]">{item.about}</p>

                <div className="flex gap-4 mt-4">
                  {item.live_demo && (
                    <a
                      href={item.live_demo}
                      className="text-sm underline text-blue-500 hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={item.code}
                    className="text-sm underline text-blue-500 hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Gradient />
      </div> */}

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {Project.map((item, index) => (

          <ProjectCard key={index} item={item} />
          
        ))}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Projects;
