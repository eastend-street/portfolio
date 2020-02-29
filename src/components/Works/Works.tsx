import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import WorkCard from "../WorkCard/WorkCard";
import { Typography } from "@material-ui/core";
import JotDownPhoto from "../../assets/images/websites/jotdown/home-jotdown.png";
import CodeoPhoto from "../../assets/images/websites/codeo/codeo.png";
import MarketplacePhoto from "../../assets/images/websites/marketplace/marketplace-logo.png";
import SlackBotPhoto from "../../assets/images/websites/slack-bot/slack-bot-logo.png";
import BrickHousePhoto from "../../assets/images/websites/brickhouse/brickhouse.png";

const ContentWorks = styled(Grid)`
  && {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

const Title = styled(Typography)`
  && {
    font-family: inherit;
    text-align: center;
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
    font-family: inherit;
    text-align: center;
    /* color: inherit; */
    font-weight: 900;
    :hover {
      opacity: 0.7;
    }
  }
`;

const ServiceDescription = styled(Typography)`
  && {
    font-family: inherit;
    text-align: center;
    opacity: 0.8;
  }
`;

const Technologies = styled.div`
  text-align: center;
  margin-top: 2rem;
  @media (max-width: 960px) {
    margin-top: 1rem;
  }
`;

const TechName = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  color: inherit;
  opacity: 0.8;
  border-radius: 0.3rem;
  background-color: #fff;
  padding: 0.5rem;
  margin: 0.2rem;
`;

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
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 960px) {
      order: 1;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
`;

const BrickhouseImageGrid = styled(Grid)`
  && {
    order: 1;
    @media (max-width: 960px) {
      order: 2;
    }
  }
`;

const BrickhouseTitleGrid = styled(Grid)`
  && {
    order: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 960px) {
      order: 1;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
`;

const MarketplaceTitleGrid = styled(Grid)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 960px) {
      padding-top: 1rem;
    }
  }
`;
const CodeoTitleGrid = styled(Grid)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
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
                url={process.env.PUBLIC_URL + "/jotdown"}
                image={JotDownPhoto}
              />
            </JotDownImageGrid>
            <JotDownTitleGrid item xs={12} md={6}>
              <div>
                <StyledLink to={process.env.PUBLIC_URL + "/jotdown"}>
                  <ServiceName variant="h5" component="h3">
                    Jot down
                  </ServiceName>
                </StyledLink>
                <ServiceDescription variant="subtitle1" component="p">
                  - Bookmark and note web service -
                </ServiceDescription>
                <Technologies>
                  <TechName>React.js</TechName>
                  <TechName>Redux</TechName>
                  <TechName>Django</TechName>
                  <TechName>Python</TechName>
                  <TechName>Docker</TechName>
                </Technologies>
              </div>
            </JotDownTitleGrid>
          </Grid>
        </GridCardItem>
        <GridCardItem item xs={12} md={12}>
          <Grid container>
            <CodeoTitleGrid item xs={12} md={6}>
              <div>
                <AboutService>
                  <StyledLink to={process.env.PUBLIC_URL + "/codeo"}>
                    <ServiceName variant="h5" component="h3">
                      Codeo
                    </ServiceName>
                  </StyledLink>
                  <ServiceDescription variant="subtitle1" component="p">
                    - A website to search programming video from YouTube -
                  </ServiceDescription>
                  <Technologies>
                    <TechName>React.js</TechName>
                    <TechName>React hooks</TechName>
                    <TechName>Context API</TechName>
                    <TechName>TypeScript</TechName>
                  </Technologies>
                </AboutService>
              </div>
            </CodeoTitleGrid>
            <Grid item xs={12} md={6}>
              <WorkCard
                url={process.env.PUBLIC_URL + "/codeo"}
                image={CodeoPhoto}
              />
            </Grid>
          </Grid>
        </GridCardItem>
        <GridCardItem item xs={12} md={12}>
          <Grid container>
            <BrickhouseImageGrid item xs={12} md={6}>
              <WorkCard
                url={process.env.PUBLIC_URL + "/brickhouse"}
                image={BrickHousePhoto}
              />
            </BrickhouseImageGrid>
            <BrickhouseTitleGrid item xs={12} md={6}>
              <div>
                <StyledLink to={process.env.PUBLIC_URL + "/brickhouse"}>
                  <ServiceName variant="h5" component="h3">
                    Brickhouse &#40;Coming soon&#41;
                  </ServiceName>
                </StyledLink>
                <ServiceDescription variant="subtitle1" component="p">
                  - Brickhouse company homepage -
                </ServiceDescription>
                <Technologies>
                  <TechName>React.js</TechName>
                  <TechName>React hooks</TechName>
                  <TechName>TypeScript</TechName>
                </Technologies>
              </div>
            </BrickhouseTitleGrid>
          </Grid>
        </GridCardItem>
        <GridCardItem item xs={12} md={12}>
          <Grid container>
            <MarketplaceTitleGrid item xs={12} md={6}>
              <div>
                <AboutService>
                  <StyledLink to={process.env.PUBLIC_URL + "/marketplace"}>
                    <ServiceName variant="h5" component="h3">
                      Mail Marketplace
                    </ServiceName>
                  </StyledLink>
                  <ServiceDescription variant="subtitle1" component="p">
                    - A mail advertisement trading system -
                  </ServiceDescription>
                  <Technologies>
                    <TechName>Vue.js</TechName>
                    <TechName>Vuex</TechName>
                    <TechName>Django</TechName>
                    <TechName>Python</TechName>
                    <TechName>Docker</TechName>
                    <TechName>Google Cloud Platform</TechName>
                  </Technologies>
                </AboutService>
              </div>
            </MarketplaceTitleGrid>
            <Grid item xs={12} md={6}>
              <WorkCard
                url={process.env.PUBLIC_URL + "/marketplace"}
                image={MarketplacePhoto}
              />
            </Grid>
          </Grid>
        </GridCardItem>
        <GridCardItem item xs={12} md={12}>
          <Grid container>
            <SlackBotImageGrid item xs={12} md={6}>
              <WorkCard
                url={process.env.PUBLIC_URL + "/slack-bot"}
                image={SlackBotPhoto}
              />
            </SlackBotImageGrid>
            <SlackBotTitleGrid item xs={12} md={6}>
              <div>
                <StyledLink to={process.env.PUBLIC_URL + "/slack-bot"}>
                  <ServiceName variant="h5" component="h3">
                    Translation Slack bot
                  </ServiceName>
                </StyledLink>
                <ServiceDescription variant="subtitle1" component="p">
                  - A multilingual translation bot on Slack -
                </ServiceDescription>
                <Technologies>
                  <TechName>Python</TechName>
                  <TechName>Docker</TechName>
                  <TechName>Google Translation API</TechName>
                </Technologies>
              </div>
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
          <Title variant="h4" component="h2">
            WORKS
          </Title>
        </Grid>
        <Grid item xs={11} md={10}>
          <Grid container>{this.renderWorkCard()}</Grid>
        </Grid>
      </ContentWorks>
    );
  }
}

export default Works;
