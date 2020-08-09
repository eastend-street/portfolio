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
        <ReactMarkdown source={workData} />
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
