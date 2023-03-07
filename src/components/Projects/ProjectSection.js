import { Link } from "react-router-dom";

import { BsGithub } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";

const ProjectSection = ({
  projectImage1,
  projectName,
  projectGithubLink,
  projectDescription,
  projectLanguage,
}) => {
  const ProjectLanguageArray = projectLanguage?.slice(0, 3).map((language) => {
    return language;
  });

  return (
    <section className="bg-main h-full min-h-screen w-full pb-12">
      <div className="w-full h-[30vh] lg:h-[35vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[35vh]">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[35vh] bg-[#000]/60 z-20" />
          <img
            className="absolute object-cover w-full h-full z-[5]"
            src={"/" + projectImage1}
            alt="project"
          />
        </div>
        <div className="absolute top-[70%] max-w-[1440px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-mainText text-sm md:text-xl z-30 p-2">
          <h2 className="py-2">{projectName}</h2>
          <div className="flex">{ProjectLanguageArray?.join(" / ")}</div>
        </div>
      </div>
      <div className="LayoutContainer flex flex-col md:flex-row justify-between font-Poppins ">
        <div className="flex-1 flex justify-center lg:justify-start text-center lg:text-start">
          <div>
            <h1 className="text-2xl text-detailsColor py-10 tracking-wide">P r o j e c t</h1>
            <p className="w-full max-w-[480px] text-xl font-light tracking-wide">
              {projectDescription}
            </p>
            <div className="flex justify-between lg:justify-start gap-10 py-10 text-base md:text-xl">
              <Link
                to={"/"}
                className="flex-1 h-full flex justify-center text-center py-3 border border-solid border-mainText bg-mainText w-full hover:scale-105 ease-in duration-300"
              >
                <p className="text-[#000]">Ga terug</p>
              </Link>
              <Link
                to={`${projectGithubLink}`}
                className="flex-1 h-full py-3 flex justify-center text-center w-full border-solid border border-detailsColor hover:scale-105 hover:border-mainText group/item1 duration-300 ease-in"
              >
                <p className="flex justify-center text-center gap-4 group-hover/item1:text-detailsColor  duration-300 ease-in">
                  Beijk op
                  <span className="text-detailsColor">
                    <BsGithub className="text-2xl md:text-3xl" />
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:flex-1 flex justify-center font-Poppins p-10">
          <div className="rounded-xl px-4 pt-4 pb-12 w-full max-w-[350px]">
            <h1 className="p-4 text-xl text-mainText">Technologieen:</h1>
            <ul className="flex flex-col justify-center text-start list-disc p-4 text-base">
              {projectLanguage &&
                projectLanguage.map((language, index) => {
                  return (
                    <li key={index} className="flex justify-start items-center py-1">
                      <MdArrowForwardIos size={20} className="text-detailsColor" />
                      <p className="pl-4 text-lg">{language}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
