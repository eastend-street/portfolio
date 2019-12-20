import React from "react";
import styled, { keyframes } from "styled-components";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const ContentTitle = styled(Grid)`
  && {
    min-height: calc(95vh - 4rem); /* subtract header height */
    align-items: center;
    @media (max-width: 600px) {
      min-height: calc(95vh - 3.5rem); /* subtract header height */
    }
  }
`;

const fadeInName = keyframes`
  from {
      opacity: 0;
      transform: translateY(0.5rem);
  }
  to {
      opacity: 0.9;
      transform: translateY(0);
  }
`;
const fadeInProfession = keyframes`
  from {
      opacity: 0;
      transform: translateY(0.5rem);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
`;

const Name = styled(Typography)`
  && {
    color: inherit;
    font-size: 2rem;
    margin-top: -4rem; /* subtract header height */
    @media (max-width: 600px) {
      font-size: 1.5rem;
      margin-top: -3.5rem; /* subtract header height */
    }
    animation: ${fadeInName} 1s linear 0s 1 forwards;
  }
`;

const StyledTitle = styled(Typography)`
  && {
    color: inherit;
    font-size: 3.5rem;
    font-weight: bold;
    opacity: 0;
    @media (max-width: 830px) {
      font-size: 2.7rem;
    }
    @media (max-width: 650px) {
      font-size: 2rem;
    }
    @media (max-width: 350px) {
      font-size: 1.7rem;
    }
    animation: ${fadeInProfession} 1s linear 0s 1 forwards;
  }
`;

const Title: React.FC = () => {
  return (
    <ContentTitle container justify="center" id="title">
      <Grid item xs={10} md={9} lg={8}>
        <h1>
          <Name>Hi, I'm Jun.</Name>
          <StyledTitle>Front-End Web Developer</StyledTitle>
          <StyledTitle>based in Vancouver</StyledTitle>
        </h1>
      </Grid>
    </ContentTitle>
  );
};

export default Title;
