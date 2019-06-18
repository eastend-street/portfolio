import React, { Component } from "react";
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
        <StyledLink to={this.props.url}>
          <CardActionArea>
            <WorkImage image={this.props.image} />
          </CardActionArea>
        </StyledLink>
      </StyledWorkCard>
    );
  }
}

export default WorkCard;
