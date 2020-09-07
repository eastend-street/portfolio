import React from 'react';
import styled from 'styled-components';
import { LinkButton } from 'components/shared/Button';

const NotFound: React.FC = () => (
  <Container>
    <Title>404 Page not found</Title>
    <Description>
      Sorry, I couldn&apos;t find the page...
      <br />
      Please click the button below to go back to the Homepage.
    </Description>
    <LinkButton name="Go to Homepage" href="/" target="_self" />
  </Container>
);

export default NotFound;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
`;
