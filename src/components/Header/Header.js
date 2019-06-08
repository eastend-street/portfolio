import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { HashLink } from "react-router-hash-link";

const StyledAppBar = styled(AppBar)`
  && {
    background-color: #f9f2ec;
    box-shadow: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4e4e4e;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const StyledHashLink = styled(HashLink)`
  text-decoration: none;
  color: #4e4e4e;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
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

const WrapButton = styled.div`
  margin: 0 0 0 auto;
`;

const StyledButton = styled(Button)`
  && {
    color: #4e4e4e;
    text-transform: none;
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledAppBar position="static">
        <Toolbar>
          <StyledLink to={process.env.PUBLIC_URL + '/'}>
            <Typography variant="title" color="inherit">
              Jun
            </Typography>
          </StyledLink>
          <WrapButton>
            <StyledHashLink smooth={true} to="#about">
              <StyledButton>About</StyledButton>
            </StyledHashLink>
            <StyledHashLink smooth={true} to="#works">
              <StyledButton>Works</StyledButton>
            </StyledHashLink>
            <StyledAnchor
              href="mailto:jun.yamada0097@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledButton>Contact</StyledButton>
            </StyledAnchor>
          </WrapButton>
        </Toolbar>
      </StyledAppBar>
    );
  }
}

export default Header;
