import Link from "next/link";
import styled from "styled-components";
import { AppBar, Button, Toolbar } from "@material-ui/core";

const Header: React.FC = () => (
  <StyledAppBar position="static" id="header">
    <Toolbar>
      <Link href="/">
        <StyledLogo src="assets/images/logo/logo.png" alt="logo" />
      </Link>
      <WrapButton>
        <Link href="/#about">
          <StyledButton>ABOUT</StyledButton>
        </Link>
        <Link href="/#works">
          <StyledButton>WORKS</StyledButton>
        </Link>
        <StyledAnchor
          href="mailto:jun.yamada0097@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
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

export default Header;
