import React from "react";
import "../../assets/scss/style.scss";
import gifcontact from "../../assets/images/gif_contact.webp";
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import Footer from "../../components/Footer";
import styled from 'styled-components';
const Contact = () => {
  return (
    <>
    <ContactContainer>
        <img
            src={gifcontact}
            alt="virender tech"
            style={{ height: 300, marginTop: 20, marginBottom: 0 }}
        />
        <Icons
            href="mailto:virenderv329@@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 120, margin: '0 auto' }}
        >
            <IoIosMail />
        </Icons>
        <h6>
            <code>Let's talk!</code>
        </h6>
        <div>
            <Icons
                href="https://linkedin.com/in/virender-vishwakarma-952381176"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedinIn />
            </Icons>
            <Icons
                href="https://github.com/VirenV496"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub />
            </Icons>
            <Icons
                href="https://github.com/VirenV496"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagram />
            </Icons>
        </div>
    </ContactContainer>
    <Footer />
    </>
  );
};

export default Contact;
const ContactContainer = styled.section`
    margin-top: 5%;
    text-align: center;
    overflow-y: hidden;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Icons = styled.a`
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 3rem;
    padding: 1rem;
`;
