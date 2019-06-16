import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import WorkPhoto from "../../static/images/sample.png";

const StyledWorkCard = styled(Card)`
  && {
    box-shadow: none;
  }
`;

const WorkImage = styled(CardMedia)`
  && {
    min-height: 15rem;
    object-fit: contain;
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

class WorkCard extends Component {
  render() {
    return (
      <StyledWorkCard>
        <StyledLink to={process.env.PUBLIC_URL + "/work/"}>
          <CardActionArea>
            <WorkImage image={WorkPhoto} />
          </CardActionArea>
        </StyledLink>
      </StyledWorkCard>
    );
  }
}

export default WorkCard;
