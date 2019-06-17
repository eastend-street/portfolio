import React, { Component } from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import WorkCard from "../WorkCard/WorkCard";
import { Typography } from "@material-ui/core";
import MemoMemoPhoto from "../../static/images/websites/memomemo/home-memomemo.png";
import SamplePhoto from "../../static/images/sample.png";

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
    padding: 1rem;
    margin-top: 3rem;
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
    margin-top: 7rem;
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
//     margin-top: 2rem;
//   }
// `;

class Works extends Component {
  renderWorkCard() {
    return (
      <React.Fragment>
        <GridCardItem item xs={12} md={12}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <WorkCard
                url={process.env.PUBLIC_URL + "/work/memomemo"}
                image={MemoMemoPhoto}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ServiceName variant="h5">MemoMemo</ServiceName>
              <ServiceDescription variant="subtitle1">
                - Note and bookmark web service -
              </ServiceDescription>
            </Grid>
          </Grid>
        </GridCardItem>
        <GridCardItem item xs={12} md={12}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <AboutService>
                <ServiceName variant="h5">Mail Marketplace</ServiceName>
                <ServiceDescription variant="subtitle1">
                  - A mail advertisement trading web system -
                </ServiceDescription>
                {/* <ServiceTechnologies variant="subtitle1">
                  Vue.js, Vuex, Django, Python, Google Cloud Platform, Docker
                </ServiceTechnologies> */}
              </AboutService>
            </Grid>
            <Grid item xs={12} md={6}>
              <WorkCard
                url={process.env.PUBLIC_URL + "/work/marketplace"}
                image={SamplePhoto}
              />
            </Grid>
          </Grid>
        </GridCardItem>
        <GridCardItem item xs={12} md={12}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <WorkCard
                url={process.env.PUBLIC_URL + "/work/slack-bot"}
                image={SamplePhoto}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ServiceName variant="h5">Translation Slack bot</ServiceName>
              <ServiceDescription variant="subtitle1">
                - A multilingual translation bot on Slack -
              </ServiceDescription>
            </Grid>
          </Grid>
        </GridCardItem>
      </React.Fragment>
    );
  }

  render() {
    return (
      <ContentWorks container justify="center" id="works">
        <Grid item xs={12}>
          <Title variant="h4">Works</Title>
        </Grid>
        <Grid item xs={11} md={10}>
          <Grid container>{this.renderWorkCard()}</Grid>
        </Grid>
      </ContentWorks>
    );
  }
}

export default Works;
