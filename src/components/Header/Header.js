import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const StyledAppBar = styled(AppBar)`
  && {
    background-color: #efebe9;
    box-shadow: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #777;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const WrapButton = styled.div`
    margin: 0 0 0 auto;
`;

const StyledButton = styled(Button)`
  && {
    color: #777;
    text-transform: none;
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledAppBar position="static">
        <Toolbar>
          <StyledLink to="/">
            <Typography variant="title" color="inherit">
              Jun Yamada
            </Typography>
          </StyledLink>
          <WrapButton>
            <StyledButton>Work</StyledButton>
            <StyledButton>About</StyledButton>
            <StyledButton>Contact</StyledButton>
          </WrapButton>
        </Toolbar>
      </StyledAppBar>
    );
  }
}

export default Header;
