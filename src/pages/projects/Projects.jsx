import React from "react";

import "../../assets/scss/style.scss";
import { projectsData } from "../../assets/data/projectsData";
// import Github from "./Github";
import Projectcard from "./Projectcard";
import styled from "styled-components";
const Projects = () => {
  return (
    <ProjectPage>
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
    </ProjectPage>
  );
};

const ProjectPage = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  &:last-child {
    margin-bottom: 10px;
  }
`;

export default Projects;
