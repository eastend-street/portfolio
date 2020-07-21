import React, { FC } from "react";
import styled from "styled-components";

import WorkSection from "components/WorkSection";

import { WorksData as WorksDataType } from "types/worksData";
import WorksJson from "data/works.json";

const Works: FC = () => {
  const works: WorksDataType = WorksJson;
  return (
    <Container>
      <Title>WORKS</Title>
      {works.map((work, index) => (
        <WorkSection odd={(index + 1) % 2 !== 0} key={index} {...work} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 5rem 0 7rem 0;
`;

const Title = styled.h2`
  font-size: 2.125rem;
  text-align: center;
  margin-bottom: 4rem;
`;

export default Works;
