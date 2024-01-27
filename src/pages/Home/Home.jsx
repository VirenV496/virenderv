import React from "react";
import "../../assets/scss/style.scss";
import { WelcomeSvg } from "../../assets/Svgs/SVGS";
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <HomePage>
    <Zoom>
    <WelcomeSvg/>
    </Zoom>
      <div>
      </div>
      <div  className="welcome" >
        <span></span>
      <p>
        My name is virender vishwakarma, I'm a front-end developer based in India,
        pune maharashtra,I have developed many types of front-ends from well know
        applications to Ecommerce booking platforms.
      </p>

      <p>
        I'm passionate about cutting-edge tech, pixel-perfect, beautiful interfaces
        and intuitively implemented UX.{" "}
      </p>
      </div>
      <Footer />
      </HomePage>
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
`;

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


export default Home;
