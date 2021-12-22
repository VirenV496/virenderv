import React from "react"
// import Layout from "../components/layout"
import styled from "styled-components"
import data from "../../assets/data/data.json"
import { FaInstagramSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"

const links = data.links

const javascriptLinks = links
  .map(link => {
    return link
  })
  .filter(link => link.type.includes("javascript"))

const roadmapsLinks = links
  .map(link => {
    return link
  })
  .filter(link => link.type.includes("roadmap"))

const personalLinks = links
  .map(link => {
    return link
  })
  .filter(link => link.type.includes("personal"))

const mustReadLinks = links
  .map(link => {
    return link
  })
  .filter(link => link.type.includes("mustread"))

const Links = data => (
//   <Layout>
    <LinksContainer>
      <Picture
        src="https://avatars.githubusercontent.com/u/65226860?s=400&u=a3e6764717e9abc78e1023e33805a9e0e2f7c7f4&v=4"
        alt=""
      />
      <span style={{ display: "flex" }}>
        <Icon
          href="https://www.instagram.com/_sublimed__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </Icon>

        <Icon
          href="https://www.linkedin.com/in/virender-vishwakarma-952381176/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Icon>

        <Icon
          href="https://github.com/VirenV496"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </Icon>
      </span>

      {personalLinks.map(link => {
        return (
          <LinkButton href={link.url} target="_blank" key={link.id}>
            {link.title}
          </LinkButton>
        )
      })}

      <br />
      <SectionTitle>Developer roadmaps</SectionTitle>
      {roadmapsLinks.map(link => {
        return (
          <LinkButton href={link.url} target="_blank" key={link.id}>
            {link.title}
          </LinkButton>
        )
      })}

      <br />
      <SectionTitle>Javascript</SectionTitle>
      {javascriptLinks.map(link => {
        return (
          <LinkButton href={link.url} target="_blank" key={link.id}>
            {link.title}
          </LinkButton>
        )
      })}

      <br />
      <SectionTitle>must read</SectionTitle>
      {mustReadLinks.map(link => {
        return (
          <LinkButton href={link.url} target="_blank" key={link.id}>
            {link.title}
          </LinkButton>
        )
      })}
    </LinksContainer>
//   </Layout>
)

export default Links

const LinksContainer = styled.section`
  height: 100vh;
  max-width: 400px;
  width: 100%;
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`
const Picture = styled.img`
  border-radius: 50%;
  height: 120px;
  margin-bottom: 10px;
`

const Icon = styled.a`
  font-size: 30px;
  margin-bottom: 14px;
  font-weight: 900;
  color: rgb(32 31 31 / 90%);
  padding: 0 4px;
`

const SectionTitle = styled.b`
  color: #ff2249;
  text-transform: uppercase;
  font-size: 14px;
`
const LinkButton = styled.a`
  max-width: 400px;
  width: 95%;
  height: 50px;
  border-radius: 32px;
  text-align: center;
  cursor: pointer;
  background: rgb(32 31 31 / 90%);
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px;
  margin-bottom: 5px;
  transition: all 300ms ease-in-out;
  // rgb(32 31 31 / 20%)
  &:hover {
    background: grey;
    color: black;
  }
`