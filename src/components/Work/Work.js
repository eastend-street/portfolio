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
    margin-bottom: 5rem;
    font-weight: bold;
  }
`;


const GridCardItem = styled(Grid)`
  && {
    padding: 1rem;
  }
`;


class Work extends Component {
  renderWorkCard() {
    return (
      <React.Fragment>
        <GridCardItem item xs={12} md={6}>
          <WorkCard />
        </GridCardItem>
        <GridCardItem item xs={12} md={6}>
          <WorkCard />
        </GridCardItem>
        <GridCardItem item xs={12} md={6}>
          <WorkCard />
        </GridCardItem>
        <GridCardItem item xs={12} md={6}>
          <WorkCard />
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

export default Work;
