import React, { Component } from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";

const ContentAbout = styled(Grid)`
  && {
    min-height: 40rem;
  }
`;

const StyledH2 = styled.h2`
  text-align: center;
  margin: 2rem auto;
`;

const StyledH3 = styled.h3`
  text-align: center;
  margin: 0 auto;
`;

class About extends Component {
  render() {
    return (
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
                I have worked as a front-end web developer, a software engineer.
                As a developer, my strength is a software focused front-end,
                writing JavaScript frameworks / libraries like React.js, Vue.js.
                Also I am excited about startup culture, service architecture,
                designing intuitive UI.
              </p>
            </Grid>
          </Grid>
          <StyledH3>Work experience</StyledH3>
        </Grid>
      </ContentAbout>
    );
  }
}

export default About;
