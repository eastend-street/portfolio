import React from 'react';
import styled from 'styled-components';
import ExternalLink from 'components/shared/ExternalLink';
import ContentWrapper from 'components/shared/ContentWrapper';
import { GITHUB_URL } from 'constants/info';
import mq from 'styles/mediaQuery';

const Footer: React.FC = () => (
  <Container>
    <ContentWrapper>
      <ExternalLink href={GITHUB_URL}>
        <SocialLogo src="assets/images/logo/github.png" alt="Github" />
      </ExternalLink>
      <Copyright>
        &copy; Jun Yamada {new Date().getFullYear()} All rights reserved.
      </Copyright>
    </ContentWrapper>
  </Container>
);

export default Footer;

const Container = styled.footer`
  text-align: center;
  padding: 8rem 0 3rem;
  ${mq('xs')} {
    padding: 3rem 0;
  }
`;

const Copyright = styled.p`
  text-align: center;
  color: #aea9a5;
  margin-top: 1rem;
`;

const SocialLogo = styled.img`
  text-align: center;
  height: 2rem;
  margin: auto 1rem;
  transition: 0.5s;
  :hover {
    opacity: 0.7;
  }
`;
