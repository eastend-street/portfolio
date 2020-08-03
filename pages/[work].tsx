import Layout from "components/Layout";
import styled from "styled-components";
import { LinkButton } from "components/shared/Button";

const WorkDetail: React.FC = () => (
  <Layout>
    <Title>WORKS DETAIL</Title>
  </Layout>
);

export default WorkDetail;

const Container = styled.div``;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;
