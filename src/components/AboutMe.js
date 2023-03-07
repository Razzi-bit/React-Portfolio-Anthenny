import React from "react";

import { MdArrowForwardIos } from "react-icons/md";

const AboutMe = () => {
  const skills = [
    " HTML & SCSS",
    "Javascript",
    "React Js",
    "Next Js",
    "Node Js",
    "NoSQL & MySQL",
    " PHP",
    "Laravel",
    "Typescript",
    "Docker",
    "Git",
    " C#",
    "Adobe XD",
    "Tailwind",
  ];
  return (
    <section id="aboutMe" className="bg-main h-full md:h-screen py-12 pt-[100px]">
      <div className="flex flex-col justify-center xl:justify-start LayoutContainer">
        <div className="text-center py-12">
          <h1 className="text-3xl font-Poppins">
            <span className="font-Mono text-detailsColor">02. </span>Over mij
          </h1>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full gap-8 pt-12">
          <div className="flex flex-col justify-start w-full max-w-[520px] m-auto md:m-0">
            <p>
              Tijdens de pandemie heb ik de switch gemaakt van gespecialiseerd kok naar student
              software developer. Coderen was vroeger een hobby en nu ik de kans heb om te doen wat
              ik echt leuk vind voelt het als een{" "}
              <span className="text-detailsColor">droom die uitkomt.</span>
            </p>
            <p className="py-10">
              Omdat ik al vanaf mijn 17e aan het koken ben kan ik goed in een team werken. Daarnaast
              kan ik niet wachten om soft/hard skills te leren van mensen die veel meer ervaring als
              mij hebben.
            </p>
            <p className="py-4">Mijn vaardigheden:</p>
            <div className="grid gird-col grid-cols-2 md:grid-cols-3 text-sm md:text-base">
              {skills.map((skill, key) => {
                return (
                  <p
                    key={key}
                    className="flex py-1 hover:underline hover:underline-offset-2 cursor-default"
                  >
                    <span className="text-detailsColor pr-1">
                      <MdArrowForwardIos size={20} />
                    </span>
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex-1 h-full w-full pr-8 pb-8">
            <div className="relative flex justify-center h-full w-full md:min-w-[300px] max-w-[400px] m-auto">
              <img src="ProfileImage.png" alt="mijn profile foto" className="object-contain z-10" />
              <div className="absolute bottom-[-30px] right-[-30px] border border-solid border-detailsColor w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
