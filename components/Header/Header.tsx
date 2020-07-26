import Link from "next/link";
import styled from "styled-components";
import { EMAIL } from "constants/Info";

const Header: React.FC = () => (
  <Container id="header">
    <Link href="/">
      <Logo src="assets/images/logo/logo.png" alt="logo" />
    </Link>
    <Nav>
      <Link href="/#about">
        <EachNav>ABOUT</EachNav>
      </Link>
      <Link href="/#works">
        <EachNav>WORKS</EachNav>
      </Link>
      <a href={`mailto:${EMAIL}`} rel="noopener noreferrer" target="_blank">
        <EachNav>EMAIL</EachNav>
      </a>
    </Nav>
  </Container>
);

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
`;

const EachNav = styled.div`
  margin: 0 0.5rem;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Logo = styled.img`
  max-height: 2rem;
  :hover {
    opacity: 0.7;
  }
`;

export default Header;
