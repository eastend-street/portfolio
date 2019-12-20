import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const StyledWorkCard = styled(Card)`
  && {
    box-shadow: none;
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

type WorkCardProps = {
  url: string;
  imageUrl: string;
};

const WorkCard: React.FC<WorkCardProps> = ({ url, imageUrl }) => {
  return (
    <StyledWorkCard>
      <StyledLink to={url}>
        <CardActionArea>
          <WorkImage image={imageUrl} />
        </CardActionArea>
      </StyledLink>
    </StyledWorkCard>
  );
};

export default WorkCard;
