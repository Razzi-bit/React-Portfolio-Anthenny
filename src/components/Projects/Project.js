import React from "react";
import jsonData from "../../json/data.json";
import ProjectCart from "../Projects/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-main py-12 pt-[100px]">
      <div className="LayoutContainer">
        <div className="text-center py-12">
          <h1 className="text-3xl font-Poppins">
            <span className="font-Mono text-detailsColor">03. </span>Projecten
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 py-12">
          {jsonData.map((project) => {
            return (
              <ProjectCart
                key={project.projectId}
                projectName={project.projectName}
                projectImage={project.projectImage}
                projectLink={project.projectLink}
                projectDescription={project.projectDescription}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
