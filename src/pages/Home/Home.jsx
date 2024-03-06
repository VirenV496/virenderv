import React, { useEffect } from "react";
import "../../assets/scss/style.scss";
import styled from "styled-components";
const Home = () => {
  return (
    <HomePage>
      <HomeLogo>
        <LogoText>Welcome</LogoText>
        <Description> Software Engineer</Description>
      </HomeLogo>
      <div className="welcome">
        <p>
          My name is virender vishwakarma, I'm a Software Engineer based in
          India, pune maharashtra,I have developed many types of front-ends
          Shipping, manufacturing, from well know applications to Ecommerce
          booking platforms.
        </p>

        <p>
          I'm passionate about cutting-edge tech, pixel-perfect, beautiful
          interfaces and intuitively implemented UX.{" "}
        </p>
      </div>
    </HomePage>
  );
};

const HomePage = styled.section`
  overflow-y: hidden;
  overflow-x: hidden;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center horizontally */
  margin-top: 0vh;
`;

const Animation = styled.div`
/* Set position to relative to contain absolutely positioned element */
position: relative;
/* Set width and height to fill the entire viewport */
width: 100vw;
height: 45vh;
/* Add animation */
animation-name: backgroundAnimation;
animation-duration: 10s;
animation-iteration-count: infinite;
animation-timing-function: linear;
`;


const HomeLogo = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -10px;
`;

const HomeText = styled.article`
  font-size: 13px;
  color: black;
  text-align: justify;
  width: 90%; /* Adjusted width for mobile devices */
  @media (min-width: 768px) {
    width: 55vw;
    font-size: 14px;
  }
`;

const Description = styled.div`
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 9px;
  padding-left: 12px;
  font-size: 12px;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0 auto;
    padding-left: 11px;
  }
`;

const LogoText = styled.div`
  font-family: system-ui;
  background-size: 23%;
  background-repeat: no-repeat;
  background-position: center;
  color: transparent;
  background-clip: border-box;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  font-weight: 900;
  font-size: 80px;
  line-height: 1;
  text-align: center;
  color: black;
  text-shadow: -4px 2px 4px rgb(0 0 0 / 40%),
    2px -5px 4px rgb(255 255 255 / 18%);
  padding-top: 10px;

  -webkit-animation: tracking-in-expand 3s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  animation: tracking-in-expand 3s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  @-webkit-keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Home;
