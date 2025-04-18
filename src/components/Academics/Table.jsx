// import dynamic from "next/dynamic";

import AnimatedText from "../widgets/AnimatedText";

// const AnimatedText = dynamic(() => import("../widgets/AnimatedText"), { ssr: false });

const AcademicData = [
    {
      id:"0",
      university: "LJ University",
      degree:"Master of Computer Application",
      admission_year: 2023,
      passout_year: 2025,
      sgpa: 7.5,
      cgpa: 7.8,
      // logo: "/images/brand/brand-01.svg",
    },
    {
      id:"1",
      university: "Gujarat University",
      degree:"Bachelor of Computer Applications",
      admission_year: 2023,
      passout_year: 2023,
      sgpa: 7.5,
      cgpa: 7.8,
      // logo: "/images/brand/brand-02.svg",
    },
    
    
  ];
  
  const Table = () => {
    return (
      <div className="rounded-[10px]  mx-[.3rem] lg:mx-[5rem] pt-7.5 shadow-1 bg-gray dark:bg-gray-dark">
        
  
        <div className="flex flex-col text-white">  
          {AcademicData.map((acadamic, key) => (
            <div
              className={` flex justify-between items-center text-white ${
                key === AcademicData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-dark-3"
              }`}
              key={key}
            >  
              <div className="px-1 py-4">
                <p className="font-medium text-[.9rem] sm:text-[1.5rem]">
                  {acadamic.degree}
                </p>
              </div>
  
              <div className=" px-1 py-4">
                {/* <div className="flex-shrink-0">
                  <Image src={acadamic.logo} alt="acadamic" width={48} height={48} />
                </div> */}
                <p className=" font-medium text-[.9rem] sm:text-[1.5rem]">
                  {acadamic.university}
                </p>
              </div>
              
              <div className="px-1 py-4 text-end">
                <div className="font-bold text-[2rem] sm:text-[2.5rem] my-[1rem] transition-all-400 flex flex-1 justify-center items-center">
                  <AnimatedText
                    key={`passout-${acadamic.id}`}
                    rotateClass="rotate-6"
                    baseColor
                    text={acadamic.passout_year.toString()}
                    className="relative  font-bold text transition-transform duration-300 ease-in-out cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Table;