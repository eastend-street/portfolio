import React, { Component } from "react";
import styled from "styled-components";
import githubLogo from "../../static/images/logo/github.png";
import linkedInLogo from "../../static/images/logo/linkedIn.png";
import FacebookLogo from "../../static/images/logo/facebook.png";

const StyledFooter = styled.div`
  /* background-color: #d7ccc8; */
  padding: 3rem;
`;

const Copyright = styled.p`
  text-align: center;
  color: #aea9a5;
  margin-top: 5rem;
`;

const ContentSocial = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const SocialLogo = styled.img`
  text-align: center;
  height: 2rem;
  margin: auto 1rem;
  :hover {
    opacity: 0.5;
  }
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <ContentSocial>
          <a
            href="https://github.com/eastend-street"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialLogo src={githubLogo} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/jun-yamada-0097"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialLogo src={linkedInLogo} alt="LinkedIn" />
          </a>
          <a
            href="https://www.facebook.com/yamada.junya1211"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialLogo src={FacebookLogo} alt="Facebook" />
          </a>
        </ContentSocial>
        <Copyright>&copy; Jun Yamada 2018-2019 All rights reserved.</Copyright>
      </StyledFooter>
    );
  }
}

export default Footer;
