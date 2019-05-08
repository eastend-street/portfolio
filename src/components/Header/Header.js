import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const StyledAppBar = styled(AppBar)`
  && {
    background-color: #f5f5f5;
    box-shadow: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #777;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledAppBar position="static">
        <Toolbar>
          <StyledLink to="/">
            <Typography variant="title" color="inherit">
              Jun's portfolio
            </Typography>
          </StyledLink>
        </Toolbar>
      </StyledAppBar>
    );
  }
}

export default Header;
