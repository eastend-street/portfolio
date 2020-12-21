import React from 'react';
import styled, { keyframes } from 'styled-components';
import mq from 'styles/mediaQuery';

const Hero: React.FC = () => (
  <Container id="hero">
    <Title>Hello. I&apos;m Jun, a Front End Engineer</Title>
  </Container>
);

export default Hero;

const Container = styled.div`
  min-height: calc(95vh - 4rem); /* subtract header height */
  display: flex;
  justify-content: center;
  align-items: center;
  ${mq('xs')} {
    min-height: calc(95vh - 3.5rem); /* subtract header height */
  }
`;

const FadeIn = keyframes`
  from {
      opacity: 0;
      transform: translateY(0.5rem);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: normal;
  text-align: center;
  margin-top: -4rem; /* subtract header height */
  width: 80%;
  ${mq('lg')} {
    font-size: 4rem;
  }
  ${mq('md')} {
    font-size: 3rem;
  }
  ${mq(830)} {
    font-size: 2.2rem;
    width: 95%;
  }
  ${mq(650)} {
    font-size: 2rem;
    margin-top: -3.5rem; /* subtract header height */
  }
  ${mq(350)} {
    font-size: 1.7rem;
  }
  animation: ${FadeIn} 1s linear 0s 1 forwards;
`;
