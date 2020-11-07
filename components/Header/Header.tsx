import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { EMAIL } from 'constants/info';
import ExternalLink from 'components/shared/ExternalLink';

const Header: React.FC = () => (
  <Container id="header">
    <Link href="/">
      <Logo src="assets/images/logo/logo.png" alt="Jun Yamada Logo" />
    </Link>
    <Nav>
      <Link href="/#about">
        <EachNav>ABOUT</EachNav>
      </Link>
      <Link href="/#works">
        <EachNav>WORKS</EachNav>
      </Link>
      <ExternalLink href={`mailto:${EMAIL}`}>
        <EachNav>EMAIL</EachNav>
      </ExternalLink>
    </Nav>
  </Container>
);

export default Header;

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
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
