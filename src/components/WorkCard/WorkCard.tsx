import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Card, CardActionArea, CardMedia } from "@material-ui/core";

type WorkCardProps = {
  url: string;
  image: string;
};

const WorkCard: FC<WorkCardProps> = ({ url, image }) => (
  <StyledWorkCard>
    <StyledLink to={url}>
      <CardActionArea>
        <WorkImage image={image} />
      </CardActionArea>
    </StyledLink>
  </StyledWorkCard>
);

const StyledWorkCard = styled(Card)`
  && {
    box-shadow: none;
    /* border-radius: 1rem; */
  }
`;

const WorkImage = styled(CardMedia)`
  && {
    height: 0;
    padding-top: 62.5%;
    /* :hover {
      transition: 0.7s;
      transform: scale(0.95, 0.95);
    } */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4e4e4e;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default WorkCard;
