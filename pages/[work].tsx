import Layout from "components/Layout";
import styled from "styled-components";
import { LinkButton } from "components/shared/Button";

const WorkDetail: React.FC = () => (
  <Layout>
    <Container>
      <Title>WORKS DETAIL</Title>
    </Container>
  </Layout>
);

export default WorkDetail;

const Container = styled.div`
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 5rem 0;
`;
