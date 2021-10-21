import React from 'react';
import styled from 'styled-components';
import WorkSection from 'components/WorkSection';
import ContentWrapper from 'components/shared/ContentWrapper';
import WORKS from 'constants/works';
import mq from 'styles/mediaQuery';

const Works: React.FC = () => (
  <Container id="works">
    <ContentWrapper>
      <Title>WORKS</Title>
      {WORKS.map((work, index: number) => (
        <WorkSection odd={(index + 1) % 2 !== 0} key={work.TITLE} {...work} />
      ))}
    </ContentWrapper>
  </Container>
);

const Container = styled.div`
  margin: 5rem 0 7rem;
  ${mq('xs')} {
    margin: 3rem 0 3rem;
  }
`;

const Title = styled.h2`
  font-size: 2.125rem;
  text-align: center;
  margin-bottom: 4rem;
  ${mq('xs')} {
    margin-bottom: 3rem;
  }
`;

export default Works;
