import React, { FC } from "react";
import styled from "styled-components";

import WorkSection from "components/WorkSection";

import WORKS from "constants/works";

const Works: FC = () => (
  <Container>
    <Title>WORKS</Title>
    {WORKS.map((work, index: number) => (
      <WorkSection odd={(index + 1) % 2 !== 0} key={index} {...work} />
    ))}
  </Container>
);

const Container = styled.div`
  margin: 5rem 0 7rem 0;
`;

const Title = styled.h2`
  font-size: 2.125rem;
  text-align: center;
  margin-bottom: 4rem;
`;

export default Works;
