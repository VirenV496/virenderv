import React from 'react';
import styled from 'styled-components';
import {
    FaGithubSquare,
    FaLinkedin,
    FaInstagramSquare,
    FaTwitterSquare,
    FaYoutubeSquare,
} from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const SocialIcons = () => {
    return (
        <Container
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Icons
                href="https://www.instagram.com/_sublimed__/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Berta.codes on Instagram"
            >
                <FaInstagramSquare />
            </Icons>
            <Icons
                href="https://www.linkedin.com/in/virender-vishwakarma-952381176/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Berta.codes on Linkedin"
            >
                <FaLinkedin />
            </Icons>
            <Icons
                href="https://github.com/VirenV496"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Berta.codes on Github"
            >
                <FaGithubSquare />
            </Icons>
            <Icons
                href="https://github.com/VirenV496"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Berta.codes on Youtube"

            >
                <FaYoutubeSquare />
            </Icons>
            <Icons
                href="https://github.com/VirenV496"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Berta.codes on Twitter"
            >
                <FaTwitterSquare />
            </Icons>
            <Icons
                href="mailto:virenderv329@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '55px' }}
                aria-label="Contact Berta.codes via e-mail"
            >
                <IoIosMail />
            </Icons>
        </Container>
    );
};

export default SocialIcons;

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Icons = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 38px;
    padding: 0 6px;
    align-content: center;
    :hover {
        color: #fa1e3f;
        transition: 0.3s ease-in-out;
    }
`;