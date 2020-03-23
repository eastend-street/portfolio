import React from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import profile from "../../assets/images/profile.png";
import { Typography } from "@material-ui/core";
import StyledButton from "../StyledButton/StyledButton";
import javascriptLogo from "../../assets/images/logo/javascript.svg";
import reactLogo from "../../assets/images/logo/react.svg";
import vueLogo from "../../assets/images/logo/vue.svg";
// import typescriptLogo from "../../assets/images/logo/typescript.svg";

const ContentAbout = styled(Grid)`
  && {
    background-color: #fff;
    padding-top: 5rem;
    padding-bottom: 10rem;
  }
`;

const Title = styled(Typography)`
  && {
    font-family: inherit;
    text-align: center;
    font-weight: bold;
    margin-bottom: 5rem;
  }
`;

const IntroSentence = styled(Typography)`
  && {
    font-family: inherit;
    @media (max-width: 600px) {
      margin-top: 2rem;
      text-align: center;
    }
  }
`;
const JobTitle = styled(Typography)`
  && {
    font-family: inherit;
    color: inherit;
    margin-bottom: 1rem;
    opacity: 0.7;
    @media (max-width: 600px) {
      text-align: center;
    }
  }
`;

const Introduction = styled(Typography)`
  && {
    font-family: inherit;
    @media (max-width: 600px) {
      margin-top: 2rem;
    }
  }
`;

const Strength = styled(Typography)`
  && {
    font-family: inherit;
    color: inherit;
    opacity: 0.7;
    margin: 4rem auto 1rem auto;
  }
`;

const Skills = styled(Typography)`
  && {
    font-family: inherit;
    color: inherit;
    opacity: 0.7;
    margin-top: 3.5rem;
  }
`;

const StyledUl = styled.ul`
  font-family: inherit;
  margin-top: 0.7rem;
  padding-left: 0rem;
  list-style: none;
`;

const StyledLi = styled.li`
  font-family: "Open Sans", sans-serif;
  margin-bottom: 0.5rem;
  color: inherit;
`;

const Category = styled.span`
  font-family: "Open Sans", sans-serif;
  color: inherit;
  opacity: 0.7;
`;

const ProfilePhoto = styled.img`
  max-width: 50%;
`;

const ProfileGrid = styled(Grid)`
  && {
    text-align: center;
  }
`;

const ContentButton = styled.div`
  margin: 3rem auto;
  font-family: inherit;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const WrapSkillLogo = styled.div`
  text-align: center;
  margin-right: 3rem;
  @media (max-width: 960px) {
    margin-right: 2rem;
  }
  @media (max-width: 600px) {
    margin-right: 1rem;
  }
  @media (max-width: 400px) {
    margin-right: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const SkillsLogo = styled.img`
  height: 3rem;
  margin: 0 auto;
`;

const SkillName = styled.div`
  margin-top: 1rem;
`;

const About: React.FC = () => {
  return (
    <ContentAbout container justify="center" id="about">
      <Grid item xs={11} sm={10}>
        <Title variant="h4" component="h2">
          ABOUT
        </Title>
        <Grid container justify="center">
          <ProfileGrid item xs={12} sm={5} md={6}>
            <ProfilePhoto src={profile} alt="profile" />
          </ProfileGrid>
          <Grid item xs={12} sm={7} md={6}>
            <IntroSentence variant="h4" component="h3">
              Jun Yamada
            </IntroSentence>
            <JobTitle variant="h6" component="h4">
              Front-End Web Developer
            </JobTitle>
            <Introduction variant="subtitle1" component="p">
              Front-end web developer with a background as a software and
              systems engineer for more than 3 years. My strength is a
              software-focused front-end using React.js, Vue.js, and JavaScript.
              Passionate about writing readable and robust code, designing
              intuitive UI, and repeating verifying and hypothesis to make a
              user-first product. In my free time, I like working out, watching
              movies.
            </Introduction>
            <Strength variant="h6" component="h4">
              Specialties:
            </Strength>
            <Grid container>
              <Grid item>
                <WrapSkillLogo>
                  <SkillsLogo src={reactLogo} alt="React Logo" />
                  <SkillName> React.js</SkillName>
                </WrapSkillLogo>
              </Grid>
              <Grid item>
                <WrapSkillLogo>
                  <SkillsLogo src={vueLogo} alt="Vue Logo" />
                  <SkillName> Vue.js</SkillName>
                </WrapSkillLogo>
              </Grid>
              <Grid item>
                <WrapSkillLogo>
                  <SkillsLogo src={javascriptLogo} alt="JavaScriptLogo" />
                  <SkillName> JavaScript</SkillName>
                </WrapSkillLogo>
              </Grid>
            </Grid>
            <Skills variant="h6" component="h4">
              Other skills:
            </Skills>
            <Typography variant="subtitle1" component="div">
              <StyledUl>
                <StyledLi>
                  <Category>Languages: </Category>
                  <span>
                    &nbsp;TypeScript, Python, Node.js, HTML5, CSS3, Sass, Java
                  </span>
                </StyledLi>
                <StyledLi>
                  <Category>Frameworks / Libraries: </Category>
                  &nbsp;Django, Express.js, jQuery, Bootstrap, Material-UI,
                  Gatsby.js
                </StyledLi>
                <StyledLi>
                  <Category>Others: </Category>
                  &nbsp;Docker, Google Cloud Platform, MySQL, MongoDB, Git,
                  Ubuntu
                </StyledLi>
              </StyledUl>
            </Typography>
            <ContentButton>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <StyledButton
                    name="Resume"
                    url={process.env.PUBLIC_URL + "/resume_jun_yamada.pdf"}
                    target="_blank"
                    rel="nofollow"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledButton
                    name="Email"
                    url="mailto:jun.yamada0097@gmail.com"
                  />
                </Grid>
              </Grid>
            </ContentButton>
          </Grid>
        </Grid>
      </Grid>
    </ContentAbout>
  );
};

export default About;
