import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";

const AboutPage = styled.main`
    width: 100%;
    overflow-y: auto;
    margin-top: 5vh;
`;
const AboutText = styled.article`
    margin: 80px auto;
    font-size: 13px;
    color: black;
    text-align: justify;
    width: 90%;
    @media (min-width: 768px) {
        width: 55vw;
        font-size: 14px;
    }
`;
const Link = styled.a`
    text-decoration: none;
    color: #000;
`;
const LinkedIn = styled(FaLinkedin)`
    font-size: 50px;
    margin-right: 0.5rem;
    color: #0e76a8;
`;


const About = () => {
  return (
    <AboutPage>
      {/* <Layout> */}
      <AboutText>
        <header>
          <Link
            href="https://www.linkedin.com/in/virender-vishwakarma-952381176/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <LinkedIn />
          </Link>

          <div
            class="LI-profile-badge"
            data-version="v1"
            data-size="medium"
            data-locale="en_US"
            data-type="horizontal"
            data-theme="dark"
            data-vanity="bertam"
          >
            <a class="LI-simple-link" href="">
              Virender Vishwakarma
            </a>
          </div>

          <b>Hello, I'm Virender! Creative developer.</b>
        </header>
        <hr />
        <p>
          I am a masters student coding enthusiastic I enjoy mostly working with
          javascript and i am always ready to take new tech challenges
        </p>
        <div>
          <b>SKILLS CAN BE TAUGHT, BUT ATTITUDE CAN'T!</b>
          <ul>
            <li>
              Energetic, flexible, highly motivated, positive team player;
            </li>
            <li>Eager to learn and open to new challenges;</li>
            <li>Having the potential to motivate and support others;</li>
          </ul>
        </div>
        <p>
          I finished Bachelors degree 2019 one of the biggest achievement Won
          hackathon National level kaveri hackathon in 2019 team of 5 in
          bachelors degree i started with C language C++ data structures and
          java and i am a Final year masters student batch 2022{" "}
          <Link href="https://www.pibmpune.org.in/" target="_blank" rel="noopener noreferrer">
            University of pune
          </Link>{" "}
          I was a self-taught front-end enthusiast, compeleting daily tasks and
          homework during classes in the front-end module & the backend Node
          Rest Api. We also got familiar with OOPs modern js fundamentals. My
          recent{" "}
          <Link
            href="https://github.com/VirenV496/fullstack-crud"
            target="_blank"
            rel="noopener noreferrer"
          >
            project
          </Link>
          was a web CRUD app to understand the fundamental of rest api and how
          it is Integrated , built React with Node Express js and for database
          Mongo-db.
        </p>
        <p>
          <ul>
            <li>
              In <strong>2021 April</strong> In April 2021, I secured a developer job and since then have honed my,
              skills in JavaScript,Typescript React, React Native, Angular, 
              as well as backend development with Python and Node.js.
            </li>
            {/* <li>
              In <strong>2021 November</strong> I joined another company to get
              more experience in React Js React Native , TypeScript and
             & to explore more Tech
            </li> */}
          </ul>
          <a
            href="https://www.linkedin.com/in/virender-vishwakarma-952381176/"
            target="_blank"
            rel="noopener noreferrer"
          >
            More...
          </a>
        </p>

      </AboutText>
    </AboutPage>
  );
};

export default About;
