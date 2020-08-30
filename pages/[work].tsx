import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "components/Layout";
import styled from "styled-components";
import { ExternalLinkButton } from "components/shared/Button";
import { getAllWorks, getWorkData } from "lib/works";
import ReactMarkdown from "react-markdown";

import WORKS from "constants/works";

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
        <Title>{WORK_INFO?.TITLE}</Title>
        <WorkImage src={WORK_INFO?.IMAGE_PATH} alt={WORK_INFO?.TITLE} />
        <Description>
          <WrapButtons>
            {WORK_INFO?.URL && (
              <ExternalLinkButton name="Visit website" href={WORK_INFO.URL} />
            )}
            {WORK_INFO?.GITHUB && (
              <ExternalLinkButton name="View GitHub" href={WORK_INFO.GITHUB} />
            )}
          </WrapButtons>
          <StyledReactMarkdown source={workData} />
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
`;

const WorkImage = styled.img`
  width: 60%;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

const Description = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 10rem 0 5rem;
  margin-top: -10rem;
  @media (max-width: 600px) {
    padding: 5rem 0;
    margin-top: -5rem;
  }
`;

const WrapButtons = styled.div`
  display: flex;
  margin: 3rem auto;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyledReactMarkdown = styled(ReactMarkdown)`
  width: 60%;
  margin: 0 auto;
  text-align: left;
  @media (max-width: 600px) {
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

  li {
    margin: 0.5rem 0;
  }
`;
