import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const ContentTitle = styled(Grid)`
  && {
    min-height: calc(100vh - 4rem); /* subtract header height */
    align-items: center;
    @media (max-width: 600px) {
      min-height: calc(100vh - 3.5rem); /* subtract header height */
    }
  }
`;

const fadeInTitle = keyframes`
  from {
      opacity: 0;
      transform: translateY(0.5rem);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
`;
const fadeInSub = keyframes`
  from {
      opacity: 0;
      transform: translateY(0.5rem);
  }
  to {
      opacity: 0.7;
      transform: translateY(0);
  }
`;

const StyledTitle = styled(Typography)`
  && {
    color: inherit;
    font-size: 3.5rem;
    font-weight: bold;
    margin-top: -4rem; /* subtract header height */
    @media (max-width: 600px) {
      font-size: 2.5rem;
      margin-top: -3.5rem;  /* subtract header height */
    }
    animation: ${fadeInTitle} 0.5s linear 0s 1 forwards;
  }
`;

const SubTitle = styled(Typography)`
  && {
    color: inherit;
    font-size: 1.7rem;
    opacity: 0;
    @media (max-width: 600px) {
      font-size: 1.3rem;
    }
    animation: ${fadeInSub} 0.5s linear 0s 1 forwards;
  }
`;

class Title extends Component {
  render() {
    return (
      <ContentTitle container justify="center" id="title">
        <Grid item xs={9} md={8} lg={6}>
          <StyledTitle>Hi, I'm Jun.</StyledTitle>
          <SubTitle>Front-End Web Developer based in Vancouver</SubTitle>
        </Grid>
      </ContentTitle>
    );
  }
}

export default Title;
