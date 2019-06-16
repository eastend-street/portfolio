import React, { Component } from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import WorkCard from "../WorkCard/WorkCard";
import { Typography } from "@material-ui/core";

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
    margin-top: 5rem;
  }
`;

const ServiceName = styled(Typography)`
  && {
    text-align: center;
    color: inherit;
    font-weight: bold;
  }
`;

class Works extends Component {
  renderWorkCard() {
    return (
      <React.Fragment>
        <GridCardItem item xs={12} md={12}>
          <Grid container>
            <Grid item xs={12} md={7}>
              <WorkCard url={process.env.PUBLIC_URL + "/work/memomemo"} />
            </Grid>
            <Grid item xs={12} md={5}>
              <ServiceName variant="h6">MemoMemo</ServiceName>
            </Grid>
          </Grid>
        </GridCardItem>
        <GridCardItem item xs={12} md={12}>
          <Grid container>
          <Grid item xs={12} md={5}>
              <ServiceName variant="h6">Mail Marketplace</ServiceName>
            </Grid>
            <Grid item xs={12} md={7}>
              <WorkCard url={process.env.PUBLIC_URL + "/work/marketplace"} />
            </Grid>
          </Grid>
        </GridCardItem>
        <GridCardItem item xs={12} md={12}>
        <Grid container>
            <Grid item xs={12} md={7}>
              <WorkCard url={process.env.PUBLIC_URL + "/work/slack-bot"} />
            </Grid>
            <Grid item xs={12} md={5}>
              <ServiceName variant="h6">Translation Slack bot</ServiceName>
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
        <Grid item xs={10}>
          <Grid container>{this.renderWorkCard()}</Grid>
        </Grid>
      </ContentWorks>
    );
  }
}

export default Works;
