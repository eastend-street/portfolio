import styled, { keyframes } from "styled-components";
import { Grid, Typography } from "@material-ui/core";
import ScrollDownButton from "components/shared/ScrollDownButton";

const Hero: React.FC = () => (
  <ContentHero container justify="center" id="hero">
    <Grid item xs={10} md={9} lg={8}>
      <h1>
        <Title>Hi, I'm Jun. Front End Engineer based in Vancouver</Title>
      </h1>
    </Grid>
    <ScrollDownButton />
  </ContentHero>
);

const ContentHero = styled(Grid)`
  && {
    min-height: calc(95vh - 4rem); /* subtract header height */
    align-items: center;
    @media (max-width: 600px) {
      min-height: calc(95vh - 3.5rem); /* subtract header height */
    }
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

const Title = styled(Typography)`
  && {
    font-family: inherit;
    color: inherit;
    font-size: 4rem;
    text-align: center;
    margin-top: -4rem; /* subtract header height */

    @media (max-width: 1920px) {
      font-size: 4rem;
    }
    @media (max-width: 1280px) {
      font-size: 3rem;
    }
    @media (max-width: 830px) {
      font-size: 2.2rem;
    }
    @media (max-width: 650px) {
      font-size: 2rem;
      margin-top: -3.5rem; /* subtract header height */
    }
    @media (max-width: 350px) {
      font-size: 1.7rem;
    }
    animation: ${FadeIn} 1s linear 0s 1 forwards;
  }
`;

export default Hero;
