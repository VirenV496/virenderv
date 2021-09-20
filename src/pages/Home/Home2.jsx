
import React from 'react';
// import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/style.scss";
import homeanime from "./../../assets/images/home_anime.gif";
import ani from './../../assets/images/virender.codes.webp'
import styled from 'styled-components';

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
import SocialIcons from '../../components/buttons/Socialicon';
const IndexPage = ({ data }) => (
  <HomePage>
      {/* <Layout> */}
          {/* <Seo title="Home" /> */}
          <FrontEndDev>
              <Image
                  src={homeanime} alt="animation" className="home-anime"
                  alt="virender.codes. Learning to code."
              />
              {/* <HomePageLogo /> */}
              <div
                  style={{
                      fontSize: '40px',
                      marginBottom: '10px',
                      color: '#fff',
                      fontWeight: '900',
                  }}
              >
                  Virender.codes
              </div>
              <Icons>
                  <FaHtml5 />
                  <FaCss3Alt />
                  <FaSass />
                  <FaBootstrap />
                  <IoLogoJavascript />
                  <FaReact />
                  <GrGatsbyjs />
                  <FaVuejs />
                  <SiTypescript />
                  <SiJest />
                  <FaDocker />
                  <GrMysql />
                  <SiPostman />
              </Icons>
              <div style={{ color: '#fff', fontSize: '16px' }}>
                  zero to mastery
              </div>
              <SocialIcons />
          </FrontEndDev>
      {/* </Layout> */}
  </HomePage>
);

const HomePage = styled.section`
  overflow-y: hidden;
  overflow-x: hidden;
  height: 86vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
  background-color: black;
`;
const FrontEndDev = styled.p`
  font-family: Roboto;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
`;
const Image = styled.img`
  border-radius: 50%;
  height: 400px;
  transform: rotate(0deg);
  @media (max-width: 768px) {
      margin-top: 5vh;
  }
`;
const Icons = styled.p`
  font-size: 20px;
  color: #fff;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
      font-size: 22px;
  }
`;
export default IndexPage;






// class Home2 extends Component {
//   render() {
//     return (
//       <div className="home-container">
//         <div className="header-text">
          
//           <h1>HI THERE !</h1>
          
//           <p className="header-text">
//             {" "}
//             A developer and a student{" "}
//           </p>
//         </div>

//         <div className ="skills">
        
//             <FaHtml5 />
//             <FaCss3Alt />
//             <FaSass />
//             <FaBootstrap />
//             <IoLogoJavascript />
//             <FaReact />
//             <FaNode />
//             <DiMongodb />
//             {/* <FaVuejs /> */}
//             <SiTypescript />
//             {/* <SiJest /> */}
//             {/* <FaDocker /> */}
//             <DiJava />
//             <GrMysql />
//             <SiPostman />
         
//         </div>

//         <div className="splash-image">
//           <img src={homeanime} alt="animation" className="home-anime"></img>
//         </div>
//       </div>
//     );
//   }



  
// }
// export default Home2;
