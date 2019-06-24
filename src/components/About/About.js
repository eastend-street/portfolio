import React, { Component } from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import profile from "../../static/images/profile.png";
import { Typography } from "@material-ui/core";
import StyledButton from "../StyledButton/StyledButton";
import resume from "../../static/pdf/resume_jun_yamada.pdf";

import githubLogo from "../../static/images/logo/github.png";
import linkedInLogo from "../../static/images/logo/linkedin.png";
import FacebookLogo from "../../static/images/logo/facebook.png";

const ContentAbout = styled(Grid)`
  && {
    background-color: #fcfcfc;
    padding-top: 5rem;
    padding-bottom: 10rem;
  }
`;

const Title = styled(Typography)`
  && {
    text-align: center;
    color: inherit;
    font-weight: bold;
    margin-bottom: 5rem;
  }
`;

const IntroSentence = styled(Typography)`
  && {
    color: inherit;
    margin-bottom: 1rem;
  }
`;

const Strength = styled(Typography)`
  && {
    color: inherit;
    margin-top: 4rem;
  }
`;

const Skills = styled(Typography)`
  && {
    color: inherit;
    margin-top: 2.5rem;
  }
`;

const StyledUl = styled.ul`
  margin-top: 0.1rem;
  padding-left: 2rem;
`;

const StyledLi = styled.li`
  /* margin-top: 0.5rem; */
  color: inherit;
`;

const Category = styled.span`
  color: inherit;
`;

// const StrongSkills = styled.span`
//   color: inherit;
//   font-weight: bold;
// `;

const ProfilePhoto = styled.img`
  max-width: 50%;
`;

const ProfileGrid = styled(Grid)`
  && {
    text-align: center;
  }
`;

const ContentButton = styled.div`
  margin: 2rem auto;
`;

const ContentSocial = styled.div`
  margin-top: 3rem;
`;

const SocialLogo = styled.img`
  text-align: center;
  height: 2rem;
  margin: auto 0.5rem;
  :hover {
    opacity: 0.7;
  }
`;

class About extends Component {
  render() {
    return (
      <ContentAbout container justify="center" id="about">
        <Grid item xs={11} sm={10}>
          <Title variant="h4">About</Title>
          <Grid container justify="center">
            <ProfileGrid item xs={12} sm={5} md={6}>
              <ProfilePhoto src={profile} alt="profile" />
            </ProfileGrid>
            <Grid item xs={12} sm={7} md={6}>
              <IntroSentence variant="h5">
                My name is Jun Yamada, a Japanese front-end developer
              </IntroSentence>
              <Typography variant="subtitle1">
                I have worked as a front-end web developer, a software
                engineer. My strength is a software focused front-end, writing
                JavaScript frameworks like React.js, Vue.js.
                <br />
                In my free time, I like working out, watching movie.
              </Typography>
              <Strength variant="h6">Specialities:</Strength>
              <Typography variant="subtitle1">
                <StyledUl>
                  <StyledLi>JavaScript</StyledLi>
                  <StyledLi>React.js</StyledLi>
                  <StyledLi>Vue.js</StyledLi>
                </StyledUl>
              </Typography>
              <Skills variant="h6">Other skills:</Skills>
              <Typography variant="subtitle1">
                <StyledUl>
                  <StyledLi>
                    <Category>Languages: </Category>
                    TypeScript, Python, HTML5, CSS3, Sass, Java
                  </StyledLi>
                  <StyledLi>
                    <Category>Frameworks / Libraries: </Category>
                    Django, jQuery, Bootstrap
                  </StyledLi>
                  <StyledLi>
                    <Category>Others: </Category>Docker, Google Cloud Platform,
                    MySQL, Git, Ubuntu
                  </StyledLi>
                </StyledUl>
              </Typography>
              <ContentSocial>
                <a
                  href="https://github.com/eastend-street"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialLogo src={githubLogo} alt="Github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jun-yamada-0097"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialLogo src={linkedInLogo} alt="LinkedIn" />
                </a>
                <a
                  href="https://www.facebook.com/yamada.junya1211"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialLogo src={FacebookLogo} alt="Facebook" />
                </a>
              </ContentSocial>
              <ContentButton>
                <Grid container>
                  <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
                    <StyledButton
                      name="Resume"
                      url={resume}
                      target="_blank"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
                    <StyledButton
                      name="Email"
                      url="mailto:jun.yamada0097@gmail.com"
                      target="_blank"
                    />
                  </Grid>
                </Grid>
              </ContentButton>
            </Grid>
          </Grid>
        </Grid>
      </ContentAbout>
    );
  }
}

export default About;
