import React, { Component } from "react";
// import { Link } from "react-router-dom";
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

const Logo = styled(Typography)`
  && {
    color: inherit;
    :hover {
      opacity: 0.7;
    }
  }
`;

const LogoLink = styled.a`
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

class Header extends Component {
  render() {
    return (
      <StyledAppBar position="static" id="header">
        <Toolbar>
          <LogoLink
            href={process.env.PUBLIC_URL + "/"}
            rel="noopener noreferrer"
          >
            {/* <StyledLink to={process.env.PUBLIC_URL + "/"}> */}
            {/* <StyledHashLink smooth={true} to="/#title"> */}
            <Logo variant="title">Jun</Logo>
            {/* </StyledHashLink> */}
            {/* </StyledLink> */}
          </LogoLink>
          <WrapButton>
            <React.Fragment>
              <StyledHashLink smooth={true} to="/#about">
                <StyledButton>ABOUT</StyledButton>
              </StyledHashLink>
              <StyledHashLink smooth={true} to="/#works">
                <StyledButton>WORKS</StyledButton>
              </StyledHashLink>
            </React.Fragment>
            <StyledAnchor
              href="mailto:jun.yamada0097@gmail.com"
              rel="noopener noreferrer"
            >
              <StyledButton>EMAIL</StyledButton>
            </StyledAnchor>
          </WrapButton>
        </Toolbar>
      </StyledAppBar>
    );
  }
}

export default Header;
