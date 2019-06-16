
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import WorkPhoto from "../../static/images/sample.png";
import StyledButton from "../StyledButton/StyledButton";
import resume from "../../static/pdf/resume_jun_yamada .pdf";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ContentWorkDetail = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const Title = styled(Typography)`
  && {
    text-align: center;
    color: inherit;
    font-weight: bold;
  }
`;

const ContentDescription = styled.div`
  background-color: #fcfcfc;
  padding-top: 10rem;
  padding-bottom: 2rem;
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
    min-height: 30rem;
    object-fit: contain;
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

const Category = styled.span`
  font-weight: bold;
`;

const ContentButton = styled.div`
  /* margin-top: 3rem; */
  text-align: center;
`;

class MarketPlace extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Work - MarketPlace</title>
        </Helmet>
        <Header />
        <ContentWorkDetail>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Title variant="h4">Mail MarketPlace</Title>
            </Grid>
            <Grid item xs={11} sm={10} md={8}>
              <StyledWorkCard>
                <CardActionArea target="_blank" href="https://www.google.com/">
                  <WorkImage image={WorkPhoto} />
                </CardActionArea>
              </StyledWorkCard>
            </Grid>
          </Grid>
          <ContentDescription>
            <Grid container justify="center">
              <Grid item xs={11} sm={10} md={8} lg={7}>
                <ButtonWrapper>
                  <StyledButton
                    name="Visit Website"
                    url="https://www.google.com/"
                    target="_blank"
                  />
                </ButtonWrapper>
                <WhatIsIt variant="h6">What is MemoMemo?</WhatIsIt>
                <SiteDescription variant="subtitle1">
                  MemoMemo is a bookmark and note service for developer. <br />
                  If you solve a error, you can write a note that how to solve
                  the error, and save website that was used to help resolve the
                  error. Of course, even non-developers, you can use MemoMemo as
                  a bookmark and note managing web service.
                </SiteDescription>
                <Technology variant="h6">Technology</Technology>
                <Typography variant="subtitle1">
                  I developed all of the service, front end, back end,
                  infrastructure and design. The front end made by React.js,
                  back end made by Python. In front end, I used Redux and
                  styled-components, correct style application and state
                  management are realized. In back end, I used Django REST
                  framework and Google cloud platform. It established RESTful
                  API communication.
                </Typography>
                <StyledUl>
                  <StyledLi>
                    <Category>Front-end: </Category> React.js, Redux,
                    styled-components, Material-ui
                  </StyledLi>
                  <StyledLi>
                    <Category>Backend: </Category> Django REST framework, Python
                  </StyledLi>
                  <StyledLi>
                    <Category>Infrastructure: </Category> Google cloud platform,
                    Docker
                  </StyledLi>
                  <StyledLi>
                    <Category>Others: </Category> REST API, Axios, Gunicorn
                  </StyledLi>
                </StyledUl>
              </Grid>
            </Grid>
            <ContentButton>
              <StyledButton
                name="Download resume"
                url={resume}
                target="_blank"
              />
              <StyledButton
                name="Say Hello"
                url="mailto:jun.yamada0097@gmail.com"
                target="_blank"
              />
            </ContentButton>
          </ContentDescription>
        </ContentWorkDetail>
        <Footer />
      </React.Fragment>
    );
  }
}

export default MarketPlace;
