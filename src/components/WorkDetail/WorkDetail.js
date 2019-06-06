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

class WorkDetail extends Component {
  render() {
    return (
      <ContentWorks container justify="center" id="works">
        <Grid item xs={12}>
          <Title variant="h4">ここにタイトルここにタイトル</Title>
        </Grid>
        <Grid item xs={10}>
          <WorkCard />
        </Grid>
      </ContentWorks>
    );
  }
}

export default WorkDetail;
