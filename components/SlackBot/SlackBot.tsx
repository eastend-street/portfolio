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
import StyledButton from "components/shared/Button";
import SlackBotPhoto from "assets/images/websites/slack-bot/slack-bot.png";

import Header from "components/Header";
import Footer from "components/Footer";

const WorkDetail: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Slack Bot</title>
      </Helmet>
      <Header />
      <ContentWorkDetail>
        <Grid container justify="center">
          <Grid item xs={12}>
            <StyledAnchor
              target="_blank"
              href="https://github.com/eastend-street/translation_slackbot"
            >
              <Title variant="h4" component="h1">
                Translation Slack Bot
              </Title>
            </StyledAnchor>
          </Grid>
          <Grid item xs={11} sm={10} md={8}>
            <StyledWorkCard>
              <CardActionArea
                target="_blank"
                href="https://github.com/eastend-street/translation_slackbot"
              >
                <WorkImage image={SlackBotPhoto} />
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
                  url="https://github.com/eastend-street/translation_slackbot"
                  target="_blank"
                />
              </ButtonWrapper>
              <WhatIsIt variant="h6" component="h2">
                What is Translation Slack Bot?
              </WhatIsIt>
              <SiteDescription variant="subtitle1" component="p">
                Translation Slack Bot is a multilingual translation Slack bot.
                <br />
                You can translate English to Japanese, Japanese to English,
                Other languages to English. It automatically detects the
                language and translates it.
              </SiteDescription>
              <Technology variant="h6" component="h2">
                Technology
              </Technology>
              <Typography variant="subtitle1" component="p">
                I wrote all of source code. This Slack bot made by Python and
                uses Docker and Google Cloud Translation API.
              </Typography>
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
  padding-bottom: 5rem;
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

export default WorkDetail;
