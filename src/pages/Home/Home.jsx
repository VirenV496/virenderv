import React from "react";
import "../../assets/scss/style.scss";
import styled from "styled-components";
const Home = () => {
  return (
    <HomePage>
      <LogoText>Welcome</LogoText>
      <Description> Software Engineer</Description>
      <div></div>
      <div className="welcome">
        <span></span>
        <p>
          My name is virender vishwakarma, I'm a front-end developer based in
          India, pune maharashtra,I have developed many types of front-ends Shipping, manufacturing, from
          well know applications to Ecommerce booking platforms.
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
  margin-top: 5vh;
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
  font-size: 94px;
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
