import { projectsData } from "@/utils/data";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h2>{projectsData.title}</h2>
      <p>{projectsData.description}</p>
      <div className="flex flex-col sm:flex-row gap-8">
        {projectsData.projects.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image.src} alt={item.image.alt} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
