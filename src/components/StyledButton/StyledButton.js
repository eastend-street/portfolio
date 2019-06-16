import React, { Component } from "react";
import styled from "styled-components";

import { Button } from "@material-ui/core";

const StyledResumeButton = styled(Button)`
  && {
    background-color: transparent;
    border: 0.01rem solid #4e4e4e;
    border-radius: 0rem;
    text-transform: none;
    padding: 0.5rem;
    margin: 1rem;
    width: 80%;
    max-width: 15rem;
    color: #4e4e4e;
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

class StyledButton extends Component {
  render() {
    return (
      <StyledAnchor
        href={this.props.url}
        target={this.props.target}
        rel="noopener noreferrer"
      >
        <StyledResumeButton>{this.props.name}</StyledResumeButton>
      </StyledAnchor>
    );
  }
}

export default StyledButton;
