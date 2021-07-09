import React from "react";
import "../../assets/scss/style.scss";
import { Link } from "react-router-dom";
import {skillList} from "../../assets/data/skillsData"
import Skillcard from "../skills/Skillcard";


const Home = () => {
  return (
    <main className="home-container">
      <div class="HomePageLogo hXikou">
        <div class="HomePageLogo dnzAPl  bXsdap">virender</div>
      </div>
   
      <p class="creative-developer">A Creative Developer</p>

         
         <div className="skillcontainer">

           {
             skillList.map(({skillName, skillUrl})=> {
               return <Skillcard skillName = {skillName} skillUrl = { skillUrl}/>
             })
           }
         </div>
    
      <div class="home-page-btn">
        <Link to="/projects">
          <p className=" home-page-btn-clr">see my projects</p>
        </Link>

        <a
          href="https://www.linkedin.com/in/virender-vishwakarma-952381176"
          target="_blank"
          rel="noopener noreferrer"
          class=" home-page-btn-clr"
        >
          let's connect
        </a>
      </div>
    </main>
  );
};

export default Home;
