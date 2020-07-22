import React, { FC } from "react";
import styled from "styled-components";

import { Grid, Typography } from "@material-ui/core";
import StyledButton from "components/ChildComponents/StyledButton";

import profile from "assets/images/profile.png";
import jsLogo from "assets/images/logo/javascript.svg";
import reactLogo from "assets/images/logo/react.svg";
import tsLogo from "assets/images/logo/typescript.svg";

const About: FC = () => (
  <Container container justify="center" id="about">
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
            Front End Engineer
          </JobTitle>
          <Introduction variant="subtitle1" component="p">
            Front end engineer with 3&#43; years of experience in software
            and systems engineering. Specializes in React.js, TypeScript and
            JavaScript. Keen on writing readable and maintainable code and
            repeating verifying and hypothesis to make a user-first product.
          </Introduction>
          <Strength variant="h6" component="h4">
            Specialties:
          </Strength>
          <Grid container>
            <Grid item>
              <WrapSkillLogo>
                <SkillsLogo src={reactLogo} alt="React" />
                <SkillName> React.js</SkillName>
              </WrapSkillLogo>
            </Grid>
            <Grid item>
              <WrapSkillLogo>
                <SkillsLogo src={tsLogo} alt="TypeScript" />
                <SkillName> TypeScript</SkillName>
              </WrapSkillLogo>
            </Grid>
            <Grid item>
              <WrapSkillLogo>
                <SkillsLogo src={jsLogo} alt="JavaScript" />
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
                <span>&nbsp;Python, Node.js, HTML5, CSS3, Sass, Java</span>
              </StyledLi>
              <StyledLi>
                <Category>Frameworks / Libraries: </Category>
                &nbsp;Next.js, Django, Vue.js, Express.js, Bootstrap,
                Material-UI, Gatsby.js
              </StyledLi>
              <StyledLi>
                <Category>Others: </Category>
                &nbsp;Docker, Google Cloud Platform, MySQL, MongoDB, Git, Ubuntu
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
  </Container>
);

const Container = styled(Grid)`
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

export default About;
