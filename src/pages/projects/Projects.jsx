import React from "react";

import "../../assets/scss/style.scss";
import { projectsData } from "../../assets/data/projectsData";
// import Github from "./Github";
import Projectcard from "./Projectcard";

const Projects = () => {
  return (
    <div className="project-cards-container">
      {projectsData.map(
        ({ projectName, projectDescription, imageUrl, githubUrl, SeeLive }) => {
          return (
            <Projectcard
              projectDescription={projectDescription}
              imageUrl={imageUrl}
              projectName={projectName}
              githubUrl={githubUrl}
              SeeLive={SeeLive}
            />
          );
        }
      )}
    </div>
  );
};

export default Projects;
