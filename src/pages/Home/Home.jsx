import React from "react";
import "../../assets/scss/style.scss";
import { Link } from "react-router-dom";
import {skillList} from "../../assets/data/skillsData"
import Skillcard from "../skills/Skillcard";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaReact,

  FaVuejs,
  FaDocker,

  FaNode,
} from "react-icons/fa"
import styled from "styled-components"
import {   DiJava } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io"
import { GrGatsbyjs, GrMysql } from "react-icons/gr"
import { SiTypescript, SiJest, SiPostman } from "react-icons/si"

const Home = () => {
  return (
    <main className="home-container">
      <div class="HomePageLogo hXikou">
        <div class="HomePageLogo dnzAPl  Effect">virender</div>
      </div>
   
      <p class="creative-developer">A Creative Developer</p>

      <Icons>
        <FaHtml5 />
        <FaCss3Alt />
        <FaSass />
        <FaBootstrap />
        <IoLogoJavascript />
        <FaReact />
        <FaNode/>
        <GrGatsbyjs />
        {/* <FaVuejs /> */}
        <SiTypescript />
        {/* <SiJest /> */}
        {/* <FaDocker /> */}
        <DiJava />
        <GrMysql />
        <SiPostman />
        </Icons>


{/*          
         <div className="skillcontainer">

           {
             skillList.map(({skillName, skillUrl})=> {
               return <Skillcard skillName = {skillName} skillUrl = { skillUrl}/>
             })
           }
         </div> */}
    
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


const Icons = styled.p`
  font-size: 24px;
  margin: 0;
  margin-top: -0.5rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 22px;
    margin-top: -16px;
  }
`
export default Home;
