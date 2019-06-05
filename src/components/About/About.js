import React, { Component } from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import profile from "../../static/images/profile.png";
import { Typography } from "@material-ui/core";
import StyledButton from "../StyledButton/StyledButton";

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
    margin-bottom: 2rem;
  }
`;

const Skills = styled(Typography)`
  && {
    color: inherit;
    margin-top: 4rem;
  }
`;

const StyledUl = styled.ul`
  margin-top: 0.5rem;
  padding-left: 1rem;
`;

const StyledLi = styled.li`
  margin-top: 0.5rem;
  color: inherit;
`;

const Category = styled.span`
  /* font-weight: bold; */
  color: inherit;
`;

const StrongSkills = styled.span`
  color: inherit;
  font-weight: bold;
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
  margin: 3rem;
`;

class About extends Component {
  render() {
    return (
      <ContentAbout container justify="center">
        <Grid item xs={11} sm={10}>
          <Title variant="h4">About</Title>
          <Grid container justify="center">
            <ProfileGrid item xs={9} sm={5} md={6}>
              <ProfilePhoto src={profile} alt="profile" />
            </ProfileGrid>
            <Grid item xs={11} sm={7} md={6}>
              <IntroSentence variant="h5">
                My name is Jun Yamada, a Japanese front-end developer based in
                Vancouver.
              </IntroSentence>
              <Typography variant="subtitle1">
                I have worked as a front-end web developer, a software engineer.
                As a developer, my strength is a software focused front-end,
                writing JavaScript frameworks / libraries like React.js, Vue.js.
                Also I am excited about startup culture, service architecture,
                designing intuitive UI.
                <br />
                In my spare time, I like working out, watching movie.
              </Typography>
              <Skills variant="h6">Skills</Skills>
              <Typography variant="subtitle1">
                <StyledUl>
                  <StyledLi>
                    <Category>Languages: </Category>
                    <StrongSkills>JavaScript</StrongSkills>, TypeScript, Python,
                    HTML5, CSS3, Sass, Java
                  </StyledLi>
                  <StyledLi>
                    <Category>Frameworks / Libraries: </Category>
                    <StrongSkills>React.js</StrongSkills>,
                    <StrongSkills> Vue.js</StrongSkills>, Django, jQuery,
                    Bootstrap
                  </StyledLi>
                  <StyledLi>
                    <Category>Others: </Category>Docker, Google Cloud Platform,
                    MySQL, Git, Ubuntu
                  </StyledLi>
                </StyledUl>
              </Typography>
              <ContentButton>
                <StyledButton name="Download resume" url="https://www.google.co.jp"/>
                <StyledButton name="Contact me" url="mailto:jun.yamada0097@gmail.com"/>
              </ContentButton>
            </Grid>
          </Grid>
        </Grid>
      </ContentAbout>
    );
  }
}

export default About;
