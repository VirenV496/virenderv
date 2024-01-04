import React from 'react';

import styled from 'styled-components';
// import Navbar2 from './navbar2/Navbar2';
import ConnectButton from './buttons/Connect';
import SocialIcons from './buttons/SocialIcon';
import Logo from './common/Logo';

const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1;
    height: 200px;
    background-color: #fff;
`;

const HeaderItems = styled.section`
    position: absolute;
    top: 8.5vh;
    display: flex;
    justify-content: space-around;
    width: calc(100% - 30px);
    @media (max-width: 768px) {
        position: absolute;
        top: 5vh;
    }
`;

const Header = () => (
    <HeaderStyle>
        <HeaderItems>
            <ConnectButton />
            <Logo />
            <SocialIcons />
        </HeaderItems>
        {/* <Navbar2 /> */}
    </HeaderStyle>
);

export default Header;