import React, { FC } from "react";
import styled from "styled-components";

import WorkSection from "components/WorkSection";

import { WorksData as WorksDataType } from "types/worksData";
import WorksJson from "data/works.json";

import { Typography } from "@material-ui/core";

const Works: FC = () => {
  const works: WorksDataType = WorksJson;
  return (
    <Container>
      <Title variant="h4" component="h2">
        WORKS
      </Title>
      {works.map((work, index) => (
        <WorkSection odd={(index + 1) % 2 !== 0} key={index} {...work} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 5rem 0 7rem 0;
`;

const Title = styled(Typography)`
  && {
    font-family: inherit;
    text-align: center;
    font-weight: bold;
    padding-bottom: 2rem;
  }
`;

export default Works;
