import React from 'react';
import styled from 'styled-components';
import { LinkButton } from 'components/shared/Buttons';

const NotFound: React.FC = () => (
  <Container>
    <Title>404 Page not found</Title>
    <Description>
      Sorry, cannot find the page...
      <br />
      Please click the button below to go back to the Homepage.
    </Description>
    <LinkButton href="/" data-testid="link-button-go-to-homepage">
      Go to Homepage
    </LinkButton>
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
