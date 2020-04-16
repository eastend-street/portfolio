import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import StyledButton from "components/ChildComponents/StyledButton/StyledButton";
import BrickHousePhoto from "assets/images/websites/brickhouse/brickhouse.jpg";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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

class Brickhouse extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Brickhouse</title>
        </Helmet>
        <Header />
        <ContentWorkDetail>
          <Grid container justify="center">
            <Grid item xs={12}>
              <StyledAnchor
                target="_blank"
                href="https://brickhouse.netlify.com"
              >
                <Title variant="h4" component="h1">
                  Brickhouse Ventures
                </Title>
              </StyledAnchor>
            </Grid>
            <Grid item xs={11} sm={10} md={7}>
              <StyledWorkCard>
                <CardActionArea
                  target="_blank"
                  href="https://brickhouse.netlify.com"
                >
                  <WorkImage image={BrickHousePhoto} />
                </CardActionArea>
              </StyledWorkCard>
            </Grid>
          </Grid>
          <ContentDescription>
            <Grid container justify="center">
              <Grid item xs={11} sm={10} md={8} lg={7}>
                <ButtonWrapper>
                  <StyledButton
                    name="Visit website"
                    url="https://brickhouse.netlify.com"
                    target="_blank"
                  />
                  <StyledButton
                    name="View Github"
                    url="https://github.com/WMAD-react/brickhouse"
                    target="_blank"
                  />
                </ButtonWrapper>
                <WhatIsIt variant="h6" component="h2">
                  What is Brickhouse?
                </WhatIsIt>
                <SiteDescription variant="subtitle1" component="p">
                  Brickhouse ventures company's homepage. This is a team project
                  in CICCC with real client.
                </SiteDescription>
                <Technology variant="h6" component="h2">
                  Technology
                </Technology>
                <Typography variant="subtitle1" component="p">
                  I developed front-end architecture such as directory
                  structure, how to separate component. Also making each
                  component using React.js and TypeScript.
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
      </React.Fragment>
    );
  }
}

export default Brickhouse;
