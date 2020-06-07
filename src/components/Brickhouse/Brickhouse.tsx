import React, { FC, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import BrickHousePhoto from "assets/images/websites/brickhouse/brickhouse.jpg";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Brickhouse: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Brickhouse</title>
      </Helmet>
      <Header />
      <ContentWorkDetail>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Title variant="h4" component="h1">
              Brickhouse Ventures
            </Title>
          </Grid>
          <Grid item xs={11} sm={10} md={7}>
            <StyledWorkCard>
              <WorkImage image={BrickHousePhoto} />
            </StyledWorkCard>
          </Grid>
        </Grid>
        <ContentDescription>
          <Grid container justify="center">
            <Grid item xs={11} sm={10} md={8} lg={7}>
              <WhatIsIt variant="h6" component="h2">
                What is Brickhouse?
              </WhatIsIt>
              <SiteDescription variant="subtitle1" component="p">
                Brickhouse ventures company's homepage. This is a team project
                in CICCC with real client.
                <br />
                <br />* Unfortunately, I could not show the website here due to
                company rules. Please feel free to request me if you want to see
                the website.
              </SiteDescription>
              <Technology variant="h6" component="h2">
                Technology
              </Technology>
              <Typography variant="subtitle1" component="p">
                I developed front-end architecture such as directory structure,
                how to separate component. Also making each component using
                React.js and TypeScript.
              </Typography>
              <StyledUl>
                <StyledLi>React.js</StyledLi>
                <StyledLi>React Hooks</StyledLi>
                <StyledLi>TypeScript</StyledLi>
                <StyledLi>JavaScript</StyledLi>
                <StyledLi>Sass</StyledLi>
                <StyledLi>Material-UI</StyledLi>
                <StyledLi>Netlify</StyledLi>
                <StyledLi>Netlify CMS</StyledLi>
              </StyledUl>
            </Grid>
          </Grid>
        </ContentDescription>
      </ContentWorkDetail>
      <Footer />
    </>
  );
};

const ContentWorkDetail = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const Title = styled(Typography)`
  && {
    text-align: center;
    font-family: inherit;
    font-weight: bold;
    :hover {
      opacity: 0.7;
    }
  }
`;

const ContentDescription = styled.div`
  background-color: #fcfcfc;
  padding-top: 10rem;
  padding-bottom: 2rem;
  @media (max-width: 800px) {
    padding-top: 7rem;
  }
  @media (max-width: 500px) {
    padding-top: 5rem;
  }
`;

const SiteDescription = styled(Typography)`
  && {
  }
`;

const WhatIsIt = styled(Typography)`
  && {
    font-weight: bold;
    margin: 3rem auto 1rem auto;
  }
`;

const StyledWorkCard = styled(Card)`
  && {
    box-shadow: none;
    transform: translateY(20%);
    /* margin: 0 auto -20% */
  }
`;

const WorkImage = styled(CardMedia)`
  && {
    height: 0;
    padding-top: 62.5%;
  }
`;

const Technology = styled(Typography)`
  && {
    margin: 5rem auto 1rem auto;
    font-weight: bold;
  }
`;

const StyledUl = styled.ul`
  margin: 2rem auto 5rem auto;
  padding-left: 1rem;
`;

const StyledLi = styled.li`
  margin-top: 1rem;
`;

export default Brickhouse;
