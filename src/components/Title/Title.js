import React, { Component } from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";

const ContentTitle = styled(Grid)`
  && {
    min-height: 90vh;
    align-items: center;
  }
`;

const StyledH1 = styled.h1`
  text-align: center;
  margin-top: -3rem;
`;

class Title extends Component {
  render() {
    return (
      <ContentTitle container justify="center">
        <Grid item xs={11} lg={12}>
          <StyledH1>
            Hi, I'm Jun. A front-end developer based in Vancouver.
          </StyledH1>
        </Grid>
      </ContentTitle>
    );
  }
}

export default Title;
