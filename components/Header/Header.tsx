import React, { FC } from "react";
import styled from "styled-components";
import { AppBar, Button, Toolbar } from "@material-ui/core";

const Header: FC = () => (
  <StyledAppBar position="static" id="header">
    <Toolbar>
      {/* <LogoLink href={process.env.PUBLIC_URL + "/"} rel="noopener noreferrer"> */}
      <StyledLogo src="assets/images/logo/logo.png" alt="logo" />
      {/* </LogoLink> */}
      <WrapButton>
        {/* <StyledHashLink smooth={true} to="/#about"> */}
        <StyledButton>ABOUT</StyledButton>
        {/* </StyledHashLink> */}
        {/* <StyledHashLink smooth={true} to="/#works"> */}
        <StyledButton>WORKS</StyledButton>
        {/* </StyledHashLink> */}
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

const StyledAppBar = styled(AppBar)`
  && {
    background-color: #eee2d7;
    box-shadow: none;
  }
`;

// const StyledHashLink = styled(HashLink)`
//   text-decoration: none;
//   color: #4e4e4e;

//   &:focus,
//   &:hover,
//   &:visited,
//   &:link,
//   &:active {
//     text-decoration: none;
//   }
// `;

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
    font-family: inherit;
    text-transform: none;
  }
`;

const StyledLogo = styled.img`
  max-height: 2rem;
  :hover {
    opacity: 0.7;
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

export default Header;
