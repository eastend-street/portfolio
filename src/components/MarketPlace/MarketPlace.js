import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import MarketplacePhoto from "../../static/images/websites/marketplace/marketplace.png"


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
  @media (max-width: 800px) {
      padding-top: 5rem;
    }
  @media (max-width: 500px) {
      padding-top: 3rem;
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
    border: solid 0.1rem #f9f2ec;
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

const Category = styled.span`
  font-weight: bold;
`;

class MarketPlace extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Mail MarketPlace</title>
        </Helmet>
        <Header />
        <ContentWorkDetail>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Title variant="h4">Mail MarketPlace</Title>
            </Grid>
            <Grid item xs={11} sm={10} md={8}>
              <StyledWorkCard>
                <WorkImage image={MarketplacePhoto} />
              </StyledWorkCard>
            </Grid>
          </Grid>
          <ContentDescription>
            <Grid container justify="center">
              <Grid item xs={11} sm={10} md={8} lg={7}>
                <WhatIsIt variant="h6">What is Mail MarketPlace?</WhatIsIt>
                <SiteDescription variant="subtitle1">
                  Mail MarketPlace is a mail advertisement trading web service.
                  This is a project I was involved in my previous company,
                  bizocean Co., Ltd.
                  <br />
                  It designed to sell email inventory by online. Ad buyers can
                  search and sort inventory by price, date, type and other
                  conditions.
                  <br />
                  <br />* Unfortunately, I could not show you the web service due to company
                  rules.
                </SiteDescription>
                <Technology variant="h6">Technology</Technology>
                <Typography variant="subtitle1">
                  I joined this project from the basic design phase. I developed
                  this web service responsible for all the front end work. Then
                  I wrote back end CRUD processing, and constructed cloud
                  infrastructure environment.
                </Typography>
                <StyledUl>
                  <StyledLi>
                    <Category>Front-end: </Category> Vue.js, Vuex, Vuetify.js,
                    Vue Router
                  </StyledLi>
                  <StyledLi>
                    <Category>Backend: </Category> Django REST framework, Python
                  </StyledLi>
                  <StyledLi>
                    <Category>Infrastructure: </Category> Google Cloud Platform,
                    Docker
                  </StyledLi>
                  <StyledLi>
                    <Category>Others: </Category> REST API, Axios, Gunicorn
                  </StyledLi>
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

export default MarketPlace;
