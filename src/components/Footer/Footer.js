import React, { Component } from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #cfd8dc;
  padding: 3rem;
`;

const Copyright = styled.p`
  text-align: center;
  color: #777;
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter className="footer">
        <Copyright>
          &copy; Jun Yamada 2018-2019 All rights reserved.
        </Copyright>
      </StyledFooter>
    );
  }
}

export default Footer;
