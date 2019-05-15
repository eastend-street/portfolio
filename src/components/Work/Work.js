import React, { Component } from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import WorkCard from "../WorkCard/WorkCard";


const ContentWorks = styled(Grid)`
  && {
    min-height: 40rem;
  }
`;

const StyledH2 = styled.h2`
  text-align: center;
  margin: 2rem auto;
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
      <ContentWorks container justify="center">
        <Grid item xs={12}>
          <StyledH2>Works</StyledH2>
        </Grid>
        <Grid item xs={12}>
          <Grid container>{this.renderWorkCard()}</Grid>
        </Grid>
      </ContentWorks>
    );
  }
}

export default Work;
