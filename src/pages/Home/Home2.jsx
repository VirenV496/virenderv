import React from 'react';
import styled from 'styled-components';


import HomePageLogo from '../../components/common/HomepageLogo';
import ConnectButton from '../../components/buttons/Connect';
import SocialIcons from '../../components/buttons/SocialIcon';
import TechIcons from '../../components/common/Techicons';

const Home2 = ({ data }) => (
    <HomePage>
          <div style = {{}}>
            <Image> 
                <img
                  src="https://media2.giphy.com/media/xT0GqmKmNzEJcyBjNu/200w.webp?cid=ecf05e47gdl75vib2q816srozuaf8nar7rs1b5w53eq5f3h9&rid=200w.webp&ct=g"
                />
            </Image>
            </div>
           <HomePageLogo />
           <TechIcons />
            <ConnectButton />
            <SocialIcons />
  
    </HomePage>     
);



const HomePage = styled.section`
    overflow-y: hidden;
    overflow-x: hidden;
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5vh;
`;

const Image = styled.div`
    max-width: 300px;
    margin: 0 auto;
    // box-shadow: rgba(0, 0, 0, 0.45) 20px 25px 0 -20px;
    // box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

export default Home2;