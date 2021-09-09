import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/style.scss";
import homeanime from "./../../assets/images/home_anime.gif";
import ani from './../../assets/images/virender.codes.webp'

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaReact,
  FaVuejs,
  FaDocker,
  FaNode,
} from "react-icons/fa";
import { DiJava } from "react-icons/di";
import {DiMongodb} from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io";
import { GrGatsbyjs, GrMysql } from "react-icons/gr";
import { SiTypescript, SiJest, SiPostman } from "react-icons/si";

class Home2 extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="header-text">
          
          <h1>HI THERE !</h1>
          
          <p className="header-text">
            {" "}
            A developer and a student{" "}
          </p>
        </div>

        <div className ="skills">
        
            <FaHtml5 />
            <FaCss3Alt />
            <FaSass />
            <FaBootstrap />
            <IoLogoJavascript />
            <FaReact />
            <FaNode />
            <DiMongodb />
            {/* <FaVuejs /> */}
            <SiTypescript />
            {/* <SiJest /> */}
            {/* <FaDocker /> */}
            <DiJava />
            <GrMysql />
            <SiPostman />
         
        </div>

        {/* <div className="splash-image">
          <img src={ani} alt="animation" className="home-anime"></img>
        </div> */}

        {/* <div className="head-btns">
          <Link to="/about" className="btn btn-white">
            <p className="btn-text"> know more about me </p>
          </Link>


          <a
          href="https://www.linkedin.com/in/virender-vishwakarma-952381176"
          target="_blank"
          rel="noopener noreferrer"
            
          className="btn btn-transparent"
          >
         <p  className="btn-text"> Connect with me </p> 
        </a>

        </div> */}
    
        <div className="splash-image">
          <img src={homeanime} alt="animation" className="home-anime"></img>
        </div>
      </div>
    );
  }
}
export default Home2;
