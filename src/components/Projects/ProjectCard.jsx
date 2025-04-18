// src/components/ProjectCard.jsx
import Image from "next/image";
import Tagline from "../widgets/Tagline";
import { grid } from "../../assets"; // Assuming you're using the grid image here
import TechTags from "./TechTags";

const ProjectCard = ({ item }) => (
  <div className={`md:flex even:md:translate-y-[5rem] p-0.25 rounded-[.8rem] bg-gray-200`}>
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

        {/* <p className="body-2 text-blue-300">
          {item.tech_stack.join(", ")}
        </p> */}
        <TechTags tags={item.tech_stack} />

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
);

export default ProjectCard;
