import React, { Component } from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";

const ContentTitle = styled(Grid)`
  && {
    min-height: 40rem;
    justify-content: center;
    align-items: center;
  }
`;

const StyledH1 = styled.h1`
  text-align: center;
`;

class Title extends Component {
  render() {
    return (
      <ContentTitle container>
        <Grid item xs={12}>
          <StyledH1>
            Hi, I'm Jun. A Front-end developer based in Vancouver.
          </StyledH1>
        </Grid>
      </ContentTitle>
    );
  }
}

export default Title;
