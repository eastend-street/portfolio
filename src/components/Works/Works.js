import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import WorkCard from "../WorkCard/WorkCard";
import { Typography } from "@material-ui/core";
import JotDownPhoto from "../../static/images/websites/jotdown/home-jotdown.png";
import MarketplacePhoto from "../../static/images/websites/marketplace/marketplace.png"
import SlackBotPhoto from "../../static/images/websites/slack-bot/slack-bot.png"

const ContentWorks = styled(Grid)`
  && {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

const Title = styled(Typography)`
  && {
    text-align: center;
    color: inherit;
    font-weight: bold;
  }
`;

const GridCardItem = styled(Grid)`
  && {
    /* padding: 1rem; */
    margin-top: 5rem;
  }
`;

const AboutService = styled.div`
  padding: 1rem;
`;

const ServiceName = styled(Typography)`
  && {
    text-align: center;
    color: inherit;
    font-weight: bold;
    :hover {
      opacity: 0.7;
    }
  }
`;

const ServiceDescription = styled(Typography)`
  && {
    text-align: center;
    color: inherit;
    /* margin-top: 0.5rem; */
  }
`;

// const ServiceTechnologies = styled(Typography)`
//   && {
//     text-align: center;
//     color: inherit;
//     margin-top: 1rem;
//   }
// `;

const JotDownImageGrid = styled(Grid)`
  && {
    order: 1;
    @media (max-width: 960px) {
      order: 2;
    }
  }
`;

const JotDownTitleGrid = styled(Grid)`
  && {
    order: 2;
    padding-top: 7rem;
    @media (max-width: 960px) {
      order: 1;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
`;

const MarketplaceImageGrid = styled(Grid)`
  && {
  }
`;

const MarketplaceTitleGrid = styled(Grid)`
  && {
    padding-top: 7rem;
    @media (max-width: 960px) {
      padding-top: 1rem;
    }
  }
`;

const SlackBotImageGrid = styled(Grid)`
  && {
    order: 1;
    @media (max-width: 960px) {
      order: 2;
    }
  }
`;

const SlackBotTitleGrid = styled(Grid)`
  && {
    order: 2;
    padding-top: 7rem;
    @media (max-width: 960px) {
      order: 1;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4e4e4e;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;


class Works extends Component {
  renderWorkCard() {
    return (
      <React.Fragment>
        <GridCardItem item xs={12} md={12}>
          <Grid container>
            <JotDownImageGrid item xs={12} md={6}>
              <WorkCard
                url={process.env.PUBLIC_URL + "/work/jotdown"}
                image={JotDownPhoto}
              />
            </JotDownImageGrid>
            <JotDownTitleGrid item xs={12} md={6}>
              <StyledLink to={process.env.PUBLIC_URL + "/work/jotdown"}>
                <ServiceName variant="h5">Jot down</ServiceName>
              </StyledLink>
              <ServiceDescription variant="subtitle1">
                - Bookmark and note web service -
              </ServiceDescription>
            </JotDownTitleGrid>
          </Grid>
        </GridCardItem>
        <GridCardItem item xs={12} md={12}>
          <Grid container>
            <MarketplaceTitleGrid item xs={12} md={6}>
              <AboutService>
                <StyledLink to={process.env.PUBLIC_URL + "/work/marketplace"}>
                  <ServiceName variant="h5">Mail Marketplace</ServiceName>
                </StyledLink>
                <ServiceDescription variant="subtitle1">
                  - A mail advertisement trading system -
                </ServiceDescription>
                {/* <ServiceTechnologies variant="subtitle2">
                  Vue.js, Vuex, Django, 
                  Python, Google Cloud Platform, Docker
                </ServiceTechnologies> */}
              </AboutService>
            </MarketplaceTitleGrid>
            <MarketplaceImageGrid item xs={12} md={6}>
              <WorkCard
                url={process.env.PUBLIC_URL + "/work/marketplace"}
                image={MarketplacePhoto}
              />
            </MarketplaceImageGrid>
          </Grid>
        </GridCardItem>
        <GridCardItem item xs={12} md={12}>
          <Grid container>
            <SlackBotImageGrid item xs={12} md={6}>
              <WorkCard
                url={process.env.PUBLIC_URL + "/work/slack-bot"}
                image={SlackBotPhoto}
              />
            </SlackBotImageGrid>
            <SlackBotTitleGrid item xs={12} md={6}>
              <StyledLink to={process.env.PUBLIC_URL + "/work/slack-bot"}>
                <ServiceName variant="h5">Translation Slack bot</ServiceName>
              </StyledLink>
              <ServiceDescription variant="subtitle1">
                - A multilingual translation bot on Slack -
              </ServiceDescription>
            </SlackBotTitleGrid>
          </Grid>
        </GridCardItem>
      </React.Fragment>
    );
  }

  render() {
    return (
      <ContentWorks container justify="center" id="works">
        <Grid item xs={12}>
          <Title variant="h4">WORKS</Title>
        </Grid>
        <Grid item xs={11} md={10}>
          <Grid container>{this.renderWorkCard()}</Grid>
        </Grid>
      </ContentWorks>
    );
  }
}

export default Works;
