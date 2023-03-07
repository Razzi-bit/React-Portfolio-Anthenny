import React from "react";
import { Link } from "react-router-dom";

export const ProjectCard = ({ projectImage, projectName, projectLink }) => {
  return (
    <Link to={`${projectLink}`}>
      <div className="h-full max-h-[400px] w-full max-w-[600px] m-auto relative flex items-center justify-center rounded-xl shadow-gray-400 group hover:bg-[#000]/60">
        <img
          className="rounded-xl group-hover:opacity-10 w-full h-full"
          src={`/${projectImage}`}
          alt="project foto"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
          <h1 className="text-sm sm:text-base text-white tracking-wider text-center px-4">
            {projectName}
          </h1>
          <div className="text-base text-center py-1 border rounded-lg cursor-pointer w-[120px] m-auto mt-4 hover:bg-mainText hover:scale-105 ease-in duration-300 group/item">
            <p className="p-1 group-hover/item:text-[#000] ease-in duration-300"> Meer info</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
