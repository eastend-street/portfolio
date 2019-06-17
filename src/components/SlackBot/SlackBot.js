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

const ContentButton = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

class WorkDetail extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Work - Slack Bot</title>
        </Helmet>
        <Header />
        <ContentWorkDetail>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Title variant="h4">Translation Slack Bot</Title>
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
                    name="View Github"
                    url="https://www.google.com/"
                    target="_blank"
                  />
                </ButtonWrapper>
                <WhatIsIt variant="h6">What is Translation Slack Bot?</WhatIsIt>
                <SiteDescription variant="subtitle1">
                  Translation Slack Bot is a multilingual translation bot on Slack. <br />
                  You can translate English to Japanese, Japanese to English, Other languages to English.
                  It automatically detects the language and translates it.
                </SiteDescription>
                <Technology variant="h6">Technology</Technology>
                <Typography variant="subtitle1">
                  I wrote all of source code. This Slack bot made by Python and using Docker.
                  Also Google Translate API.
                </Typography>
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

export default WorkDetail;
