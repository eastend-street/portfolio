import React, { FC, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Button } from "components/shared/Button";
import CodeoPhoto from "assets/images/websites/codeo/codeo.jpg";

import Header from "components/Header";
import Footer from "components/Footer";

const Codeo: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Codeo</title>
      </Helmet>
      <Header />
      <ContentWorkDetail>
        <Grid container justify="center">
          <Grid item xs={12}>
            <StyledAnchor target="_blank" href="https://codeo.site">
              <Title variant="h4" component="h1">
                Codeo
              </Title>
            </StyledAnchor>
          </Grid>
          <Grid item xs={11} sm={10} md={7}>
            <StyledWorkCard>
              <CardActionArea target="_blank" href="https://codeo.site">
                <WorkImage image={CodeoPhoto} />
              </CardActionArea>
            </StyledWorkCard>
          </Grid>
        </Grid>
        <ContentDescription>
          <Grid container justify="center">
            <Grid item xs={11} sm={10} md={8} lg={7}>
              <ButtonWrapper>
                <Button
                  name="Visit website"
                  url="https://codeo.site"
                  target="_blank"
                />
                <Button
                  name="View Github"
                  url="https://github.com/eastend-street/codeo"
                  target="_blank"
                />
              </ButtonWrapper>
              <WhatIsIt variant="h6" component="h2">
                What is Codeo?
              </WhatIsIt>
              <SiteDescription variant="subtitle1" component="p">
                Codeo is a website to search programming video from YouTube. You
                can search programming YouTube video by each category such as
                React, Python.
              </SiteDescription>
              <Technology variant="h6" component="h2">
                Technology
              </Technology>
              <Typography variant="subtitle1" component="p">
                I developed all of the service, front end, design, calling
                YouTube API.
              </Typography>
              <StyledUl>
                <StyledLi>React.js</StyledLi>
                <StyledLi>React Hooks</StyledLi>
                <StyledLi>React Context API</StyledLi>
                <StyledLi>TypeScript</StyledLi>
                <StyledLi>Styled-components</StyledLi>
                <StyledLi>Material-UI</StyledLi>
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
    font-family: inherit;
    text-align: center;
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

const ButtonWrapper = styled.div`
  text-align: center;
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
  color: #000;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default Codeo;
