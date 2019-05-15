import React, { Component } from "react";
import styled from "styled-components";

import Title from "../Title/Title";
import About from "../About/About";
import Work from "../Work/Work";

const StyledContainer = styled.div`
  min-height: 20rem;
`;


class Main extends Component {
  render() {
    return (
      <StyledContainer>
        <Title />
        <About />
        <Work />
      </StyledContainer>
    );
  }
}

export default Main;
