import styled, { keyframes } from "styled-components";

const Hero: React.FC = () => (
  <Container id="hero">
    <Title>Hi, I'm Jun. Front End Engineer based in Vancouver</Title>
  </Container>
);

export default Hero;

const Container = styled.div`
  min-height: calc(95vh - 4rem); /* subtract header height */
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
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
  @media (max-width: 1920px) {
    font-size: 4rem;
  }
  @media (max-width: 1280px) {
    font-size: 3rem;
  }
  @media (max-width: 830px) {
    font-size: 2.2rem;
    width: 95%;
  }
  @media (max-width: 650px) {
    font-size: 2rem;
    margin-top: -3.5rem; /* subtract header height */
  }
  @media (max-width: 350px) {
    font-size: 1.7rem;
  }
  animation: ${FadeIn} 1s linear 0s 1 forwards;
`;
