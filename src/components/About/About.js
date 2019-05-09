import React, { Component } from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import WorkCard from "../WorkCard/WorkCard";

const StyledContainer = styled.div`
  min-height: 20rem;
  margin: auto 2rem;
`;

const ContentTitle = styled(Grid)`
  && {
    min-height: 30rem;
    justify-content: center;
    align-items: center;
  }
`;

const ContentAbout = styled(Grid)`
  && {
    min-height: 25rem;
  }
`;

const ContentWorks = styled(Grid)`
  && {
    min-height: 25rem;
  }
`;

const StyledH1 = styled.h1`
  text-align: center;
`;

const StyledH2 = styled.h2`
  text-align: center;
  margin: 2rem auto;
`;

const StyledH3 = styled.h3`
  text-align: center;
  margin: 0 auto;
`;

const GridCardItem = styled(Grid)`
  && {
    padding: 1rem;
  }
`;

class About extends Component {
  renderWorkCard() {
    return (
      <React.Fragment>
        <GridCardItem item xs={12} md={6}>
          <WorkCard />
        </GridCardItem>
        <GridCardItem item xs={12} md={6}>
          <WorkCard />
        </GridCardItem>
        <GridCardItem item xs={12} md={6}>
          <WorkCard />
        </GridCardItem>
        <GridCardItem item xs={12} md={6}>
          <WorkCard />
        </GridCardItem>
      </React.Fragment>
    );
  }

  render() {
    return (
      <StyledContainer>
        <ContentTitle container>
          <Grid item xs={12}>
            <StyledH1>
              Hi, I'm Jun, a Front-end developer based in Vancouver.
            </StyledH1>
          </Grid>
        </ContentTitle>
        <ContentAbout container justify="center">
          <Grid item xs={12}>
            <StyledH2>About</StyledH2>
            <StyledH3>
              My name is Jun Yamada, Japanese, a front-end developer based in
              Vancouver, Canada.
            </StyledH3>
            <Grid container justify="center">
              <Grid item xs={11} sm={10} md={8} lg={7}>
                <p>
                  I have worked as a front-end web developer, a software
                  engineer. As a developer, my strength is a software focused
                  front-end, writing JavaScript frameworks / libraries like
                  React.js, Vue.js. Also I am excited about startup culture,
                  service architecture, designing intuitive UI.
                </p>
              </Grid>
            </Grid>
            <StyledH3>Work experience</StyledH3>
          </Grid>
        </ContentAbout>
        <ContentWorks container justify="center">
          <Grid item xs={12}>
            <StyledH2>Works</StyledH2>
          </Grid>
          <Grid item xs={12}>
            <Grid container>{this.renderWorkCard()}</Grid>
          </Grid>
        </ContentWorks>
      </StyledContainer>
    );
  }
}

export default About;
