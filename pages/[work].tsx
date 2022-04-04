import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Layout from 'components/Layout';
import { ExternalLinkButton } from 'components/shared/Buttons';
import ExternalLink from 'components/shared/ExternalLink';
import ContentWrapper from 'components/shared/ContentWrapper';
import { getAllWorks, getWorkData } from 'lib/works';
import mq from 'styles/mediaQuery';

import WORKS from 'constants/works';

interface WorkDetailProps {
  name: string;
  workData: string;
}

const WorkDetail: React.FC<WorkDetailProps> = ({ name, workData }) => {
  const WORK_INFO = WORKS.find(
    (item) => item.INNER_URL === `/${name.toLowerCase()}`
  );
  return (
    <Layout>
      <Container>
        <ExternalLink href={WORK_INFO?.URL || WORK_INFO?.GITHUB}>
          <Title>{WORK_INFO?.TITLE}</Title>
        </ExternalLink>
        <ContentWrapper>
          <ExternalLink href={WORK_INFO?.URL || WORK_INFO?.GITHUB}>
            <WorkImage src={WORK_INFO?.IMAGE_PATH} alt={WORK_INFO?.TITLE} />
          </ExternalLink>
        </ContentWrapper>

        <Description>
          <ContentWrapper>
            <WrapButtons>
              {WORK_INFO?.URL && (
                <ExternalLinkButton href={WORK_INFO.URL}>
                  Visit website
                </ExternalLinkButton>
              )}
              {WORK_INFO?.GITHUB && (
                <ExternalLinkButton href={WORK_INFO.GITHUB}>
                  View GitHub
                </ExternalLinkButton>
              )}
            </WrapButtons>
            <StyledReactMarkdown>{workData}</StyledReactMarkdown>
          </ContentWrapper>
        </Description>
      </Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllWorks(),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const workData = getWorkData(params?.work as string);
  return {
    props: {
      name: params?.work,
      workData,
    },
  };
};

export default WorkDetail;

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 5rem 0;
  ${mq('xs')} {
    font-size: 1.8rem;
    margin: 3rem 0;
  }
`;

const WorkImage = styled.img`
  width: 80%;
`;

const Description = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 10rem 0 5rem;
  margin-top: -10rem;
  ${mq('xs')} {
    padding: 5rem 0;
    margin-top: -5rem;
  }
`;

const WrapButtons = styled.div`
  display: flex;
  margin: 3rem auto;
  justify-content: center;
  align-items: center;
  ${mq('xs')} {
    flex-direction: column;
  }
`;

const StyledReactMarkdown = styled(ReactMarkdown)`
  width: 80%;
  margin: 0 auto;
  text-align: left;
  ${mq('xs')} {
    width: 80%;
  }

  h2 {
    font-weight: bold;
    margin: 4rem auto 0;
    font-size: 1.25rem;
  }
  p {
    margin: 1rem 0;
    line-height: 1.8;
  }

  ul {
    padding-left: 1rem;
  }
  li {
    margin: 0.5rem 0;
  }

  strong {
    opacity: 0.8;
    font-weight: normal;
  }
`;
