import React, { Component } from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const ContentWorkExperience = styled(Grid)`
  && {
    min-height: 40rem;
    padding-top: 5rem;
    padding-bottom: 10rem;
    background-color: #fcfcfc;
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

class WorkExperience extends Component {
  render() {
    return (
      <ContentWorkExperience container justify="center">
        <Grid item xs={12}>
          <Title variant="h4">Work experience</Title>
        </Grid>
      </ContentWorkExperience>
    );
  }
}

export default WorkExperience;
