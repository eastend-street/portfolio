import React from 'react';
import styled from 'styled-components';

import { LinkButton, ExternalLinkButton } from 'components/shared/Button';
import ContentWrapper from 'components/shared/ContentWrapper';

import { EMAIL } from 'constants/info';
import mq from 'styles/mediaQuery';
import Skills from './Skills';

const About: React.FC = () => (
  <Container id="about">
    <ContentWrapper>
      <Title>ABOUT</Title>
      <Wrapper>
        <PhotoSection>
          <Profile src="assets/images/profile.png" alt="profile" />
        </PhotoSection>
        <AboutSection>
          <Name>Jun Yamada</Name>
          <Intro>
            Front end engineer with 5&#43; years of experience in software and
            systems engineering. Specializes in React.js, TypeScript, and
            JavaScript. Keen on writing readable and maintainable code.
          </Intro>
          <Skills />
          <WrapButtons>
            <LinkButton
              name="Resume"
              href="/resume_jun_yamada.pdf"
              target="_blank"
            />
            <ExternalLinkButton name="Email" href={`mailto:${EMAIL}`} />
          </WrapButtons>
        </AboutSection>
      </Wrapper>
    </ContentWrapper>
  </Container>
);

export default About;

const Container = styled.div`
  background-color: #fff;
  padding-top: 5rem;
  padding-bottom: 10rem;
  ${mq('xs')} {
    padding: 3rem 0;
  }
`;

const Title = styled.h2`
  font-size: 2.125rem;
  text-align: center;
  margin-bottom: 5rem;
  ${mq('xs')} {
    margin-bottom: 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  ${mq('sm')} {
    flex-direction: column;
  }
  ${mq('xs')} {
    width: 90%;
  }
`;

const PhotoSection = styled.div`
  text-align: center;
  flex: 50%;
`;

const Profile = styled.img`
  max-width: 50%;
`;

const AboutSection = styled.div`
  flex: 50%;
`;

const Name = styled.h3`
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
  ${mq('xs')} {
    margin-top: 2rem;
    text-align: center;
  }
`;

const Intro = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
  margin-bottom: 0;
  ${mq('xs')} {
    margin-top: 2rem;
  }
`;

const WrapButtons = styled.div`
  display: flex;
  margin: 3rem auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${mq('xs')} {
    flex-direction: column;
  }
`;
