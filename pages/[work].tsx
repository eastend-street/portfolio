import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "components/Layout";
import styled from "styled-components";
import { LinkButton } from "components/shared/Button";
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
        <WrapMarkDown>
          <StyledReactMarkdown source={workData} />
        </WrapMarkDown>
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
  width: 70%;
`;

const WrapMarkDown = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 5rem 0;
  display: flex;
  justify-content: center;
`;

const StyledReactMarkdown = styled(ReactMarkdown)`
  flex-basis: 60%;
  text-align: left;

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
