import React from "react";

import "../../assets/scss/style.scss";
// import github from '../assets/github image.gif'
// import Github from "./Github";

const Projectcard = ({
  projectName,
  projectDescription,
  imageUrl,
  githubUrl,
  SeeLive,
}) => {
  return (
     
    <div className="project-card">  
  
       
      <div className="image-container">
        {/* <a href={githubUrl} className="project-external-link"> */}
           
             <img src={imageUrl} 
                alt="project" 
                className="project-image" 
            /> 
            
          {/* GithubLink */}
        {/* </a> */}
      </div>
     
      <div className="project-details-container">
          <h2 className="project-heading">{projectName}</h2>
          <p className="project-details">{projectDescription}</p>
          
          <div className = "links">
          <a href={SeeLive} className="project-git-link">Live Preview</a> 
          <a href={githubUrl} className="project-external-link">Github-Url</a>
          </div>
         
      </div>
    </div>
  );
};

export default Projectcard;
