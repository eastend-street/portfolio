import React, { Component } from "react";
import styled from "styled-components";

import Title from "../Title/Title";
import About from "../About/About";
import Works from "../Works/Works";
import WorkExperience from "../WorkExperience/WorkExperience";

const StyledContainer = styled.div`
  /* min-height: 20rem; */
`;


class Main extends Component {
  render() {
    return (
      <StyledContainer>
        <Title />
        <About />
        <Works />
        <WorkExperience />
      </StyledContainer>
    );
  }
}

export default Main;